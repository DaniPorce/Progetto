'use strict';

function createUserLogin(){
    return `<div class="row d-flex justify-content-center "> <ul class="accessStyle list-group ">
    <li class="list-group-item">
        <div class="loginTitleClass">
            <h1 class="pleaseLogin">Login tramite email e password</h1>
            <br>
        </div>
        <form id="loginForm">
            <div class="mb-3">
                <label class="form-label"><h4>Indirizzo Email</h4></label>
                <input class="form-control" id="emailForm" type="email" placeholder="Email" required="">
                <div class="form-text" id="emailHelp">Non condivideremo la tua mail con nessuno</div>
            </div>
            <div class="mb-3" id="sectionId">
                <label class="form-label"><h4>Password</h4></label>
                <input class="form-control" id="passwordForm" type="password" placeholder="Password" required="">
            </div>
            <div><button class="submitBtn btn btn-primary submitText" id="userLoginButton" type="submit">Login</button><a class="notRegistered" href="/register">Non sei registrato?</a></div>
        </form>
    </li>
</ul> <div>`
}

function createAdminLogin(){
    return `<div class="row d-flex justify-content-center"> <ul class="list-group accessStyle">
    <li class="list-group-item">
        <div>
            <div class="loginTitleClass">
                <div class="pleaseLogin"><h4>Per loggarti utilizza le credenziali che ti sono state affidate</h4></div>
            </div>
            <form id="adminLogin">
                <div class="mb-3">
                    <label for="form-select"><h4>Nome</h4></label>
                    <div class="mb-3">
                        <input class="form-control" type="text" id="inputFilm" placeholder="Nome o nickname dell'admin" required="">
                    </div>
                </div>
                <div class="mb-3" id="sectionId">
                    <label class="form-label" for="exampleInputPassword1"><h4>Id</h4></label>
                    <input class="form-control" id="adminId" type="password" placeholder="Id dell'admin">
                </div>
                <button class="submitBtn btn btn-primary submitText" id="adminLoginButton" type="submit">Login</button>
            </form>
        </div>
    </li>
</div>
</ul>`
}

function createUserRegister(){
    return `<div class="row d-flex justify-content-center"> <ul class="list-group">
    <li class="list-group-item">
        <div id = "registerDiv">
            <div class="loginTitleClass">
                <div class="pleaseLogin"><h4>Benvenuto, registrati!</h4></div>
            </div>
            <form>
                <div>
                    <label class="form-label" for="registerName"><h4>Nome</h4></label>
                    <input class="form-control" id="inputName" type="text" required="">
                    <label class="form-label" for="registerSurname"><h4>Cognome</h4></label>
                    <input class="form-control" id="inputSurname" type="text" required="">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="exampleInputEmail1"><h4>Indirizzo Email</h4></label>
                    <input class="form-control" id="inputEmail" type="email" aria-describedby="emailHelp" required="">
                    <div class="form-text" id="emailHelp">Non condivideremo la tua mail con nessuno</div>
                </div>
                <div class="mb-3">
                    <label class="form-label" for="exampleInputPassword1"><h4>Password</h4></label>
                    <input class="form-control" id="password" type="password" required=""></div>
                <div class="mb-3" id="divConfermaPassword">
                    <label class="form-label" for="exampleInputPassword1"><h4>Conferma password</h4></label>
                    <input class="form-control" id="confermaPassword" type="password" required="">
                </div>
                <button class="submitBtn btn btn-primary submitText" id="userRegister" type="submit">Register</button>
            </form>
        </div>
    </li>
</ul> <`
}

export {createUserLogin, createAdminLogin, createUserRegister};