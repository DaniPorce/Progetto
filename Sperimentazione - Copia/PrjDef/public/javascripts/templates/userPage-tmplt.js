'use strict';

function createUserSections(){
    return `<div class="requestSubmit" id="requestSubmitSection">
    <div class="sectionsTitle shadow-lg p-3 fs-2 mb-5 bg-body rounded text-center"><b><i style='font-size:24px' class='fas'>&#xf7c2;</i>
    <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
    </svg> Acquista Biglietto</b></div>
    <form class="innerSubmitRequest" id="formRequest" method="POST">
    <div class="mb-3">
        <label class="form-label">Film</label>
        <input class="form-control" type="text" id="inputFilm" placeholder="Inserisci film">
    </div>
    <div class="mb-3 submitVia">
        <label class="form-label">Regista</label><input class="form-control" id="inputRegia" type="text" placeholder="Inserisci Regista">
    </div>
    <div class="mb-3 submitDescrizione">
       <label class="form-label">Genere</label>
       <input class="form-control" id="inputGenere" type="text" placeholder="Inserisci genere">
       <br>
    <div class="col-auto d-flex justify-content-center"><button class="btn btn-success userBtn" id="userRequestsubmit" type="button">Acquista</button></div>
    </div>
      </div>
    </form>
</div>
<div>
    <div class="sectionsTitle shadow-lg p-3 mb-5 fs-2 bg-body rounded text-center"><b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
  </svg> Le richieste affidate a noi</b></div>
    <div class="userRecentRequest" id="userDisplayrequest"></div>
</div>
<div class="about-us">
    <div class="sectionsTitle shadow-lg p-3 fs-2 mb-5 bg-body rounded text-center"><b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
  </svg> About Us</b></div>
    <div class="aboutUsDescription">
    <!-- footer -->
    <footer class="text-center text-white mt-5">
      <div class="text-center p-4">
        <h3 class="mt-3">© 2022 Copyright:</h3>
        <h2 class="text-white">Daniele Porcelli</h2>
      </div>
    </footer>
</div>
</div>`
}

   

function insertrequestSuccess(){
    return `<div class="userCorrectInsert" id="requestInsert">Richiesta ricevuta, grazie per la tua collaborazione!</div>`;
}

export {createUserSections, insertrequestSuccess};