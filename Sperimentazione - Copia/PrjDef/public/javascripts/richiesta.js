class Richiesta{

    constructor(film, regia, genere){
        this.film = film;
        this.regia = regia;
        this.genere = genere;
        this.stato = "Pendente";
    }

    getFilm(){
        return this.film;
    }

    getRegia(){
        return this.regia;
    }

    getGenere(){
        return this.genere;
    }

    static from(json){
        const e = Object.assign(new Richiesta(), json);
        return e;
    }

}

export default Richiesta;