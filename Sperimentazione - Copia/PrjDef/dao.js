'use strict'

const { response } = require('express');
const bcrypt = require('bcrypt');
// DAO (Data Access Object) module for accessing users and requests
const sqlite = require('sqlite3');
const db = new sqlite.Database('project.db', (err)=>{
    
    if(err) throw err;
    else console.log("Connected to DB");

});

/* Get all requests, for index only */

exports.getRequests = function(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM richieste";
        db.all(sql, (err, rows) => {
          if (err) {
            reject(err);
            return;
          }
    
          const courses = rows.map((e) => (
              {
                  film: e.film, 
                  regia: e.regia, 
                  genere: e.genere, 
                  stato: e.stato
                }
            ));
            //console.log(courses);
          resolve(courses.reverse());
        });
      });
}

exports.getIndexRequests = function(){
  return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM richieste WHERE stato = 'Soddisfatta'";
      db.all(sql, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
  
        const courses = rows.map((e) => (
            {
                film: e.film, 
                regia: e.regia, 
                genere: e.genere, 
                stato: e.stato
              }
          ));
          //console.log(courses);
        resolve(courses.reverse());
      });
    });
}

exports.getAdminRequests = function(){
  return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM richieste";
      db.all(sql, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
  
        const courses = rows.map((e) => (
            {
                film: e.film, 
                regia: e.regia, 
                genere: e.genere, 
                stato: e.stato
              }
          ));
          //console.log(courses);
        resolve(courses.reverse());
      });
    });
}

exports.getIndexSearchRequest = function(elements){
    return new Promise((resolve, reject) => {
        const sql = "SELECT film, regia, genere, stato FROM richieste WHERE (film=? AND regia=?);";
        
        db.all(sql, [elements.film, elements.regia], (err, rows) => {
          //console.log(sql);
          if (err) {
            reject(err);
            return;
          }
    
          const selectedItems = rows.map((e) => (
              {
                  film: e.film, 
                  regia: e.regia, 
                  genere: e.genere, 
                  stato: e.stato
                }
            ));
            //console.log(selectedItems);
          resolve(selectedItems);
        });
    })
}

exports.userPostRequest = function(bodyParams){
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO richieste (film, regia, genere, stato) VALUES (?, ?, ?, ?);";
    db.run(sql, [bodyParams.film, bodyParams.regia, bodyParams.genere, bodyParams.stato], (err) => {
      if (err) {
        //console.log("ERR --> "+err);
        reject(err);
        return;
      }
      resolve();
    });
  })
}

exports.comuneUpdateRequest = function(bodyParams){
  return new Promise((resolve, reject) => {
    //sql da gestire tramite query parametrica
    const sql = "UPDATE richieste SET stato='"+bodyParams.stato+"' WHERE film='"+bodyParams.film+"' AND regia='"+bodyParams.regia+"';";
    db.run(sql, (err) => {
      if (err) {
        //console.log("ERR --> "+err);
        reject(err);
        return;
      }
      resolve();
    });
  })
}

exports.getAdmin = function(nome, adminId){
  return new Promise((resolve, reject) => {
    //sql da gestire tramite query parametrica
    const sql = "SELECT * FROM admin WHERE (nome = ? AND id =?);";
    db.get(sql, [nome , adminId],(err, row) => {
      //console.log(sql)
      if (err) {
        //console.log("ERR --> "+err);
        reject(err);
      }
      else if(row == undefined){
        resolve({error:'User not found'});
      }
      else{
        //console.log(row.città)
        const admin = {nome: row.nome};
        //console.log("DAO "+admin.nome);
        let check = false;
        //if(bcrypt.compareSync(adminId, row.adminId)){
          check = true;
        //}
        resolve({admin, check})
      }
    });
  })
}

exports.getUser = function(username, password){
  return new Promise((resolve, reject) => {
    //console.log(username + " dao "+password)
    //sql da gestire tramite query parametrica
    const sql = "SELECT * FROM utenti WHERE (email = ? AND password =?);";
    db.get(sql, [username , password],(err, row) => {
      //console.log(sql)
      if (err) {
        //console.log("ERR --> "+err);
        reject(err);
      }
      else if(row == undefined){
        resolve({error:'User not found'});
      }
      else{
        //console.log(row.città)
        const admin = {nome: row.nome};
        //console.log("DAO "+comune);
        let check = false;
        //if(bcrypt.compareSync(adminId, row.adminId)){
          check = true;
        //}
        resolve({admin, check})
      }
    });
  })
}

exports.getAdminById = function(adminId){
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM admin WHERE id = ?';
    db.get(sql, [adminId], (err, row) => {
        if (err) 
            reject(err);
        else if (row === undefined)
            resolve({error: 'User not found.'});
        else {
            const user = {id: row.id, film:row.film};
            resolve(user);
        }
    });
});
};

exports.newuser = function(userParams){
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO utenti (nome, cognome, email, password) VALUES (?, ?, ?, ?);';
    db.run(sql, [userParams.nome, userParams.cognome, userParams.email, userParams.psw], (err, row) => {
      if (err) {
        //console.log("ERR --> "+err);
        reject(err);
        return;
      }
      resolve();
    });
  });
}