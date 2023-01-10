'use strict';

function createSingleRequest(request){
    return `<div id="1" class="request shadow-lg p-3 mb-5 bg-body rounded displayRequest">
                <div class="d-flex w-100 justify-content-between">
                    <div class="form-check">
                        <label id="film" class="form-check-label labelRequest"><b>Film:</b> ${request.film}</label>
                        <label class="form-check-label labelRequest"><b>Regista:</b> ${request.regia}</label>
                        <label class="form-check-label labelRequest"><b>Genere:</b> ${request.genere}</label>
                        <label class="form-check-label labelRequest ${request.stato == 'Pendente' ? 'richiestaPendente' : request.stato == 'Soddisfatta' ? 'richiestaSoddisfatta' : request.stato == 'Rifiutata' ? 'richiestaRifiutata' : ""}"><b>Stato:</b> ${request.stato}</label>
                    </div>
                </div>
            </div>`
}

function createComuneRequestPendente(request){
    return `<div id="1" class="request shadow-lg p-3 mb-5 bg-body rounded displayRequest">
    <div class="d-flex w-100 justify-content-between">
      <div class="form-check">
        <label id="film" class="form-check-label labelRequest classeFilm">Film: ${request.film}
        </label>
        <label id="regia" class="form-check-label labelRequest classeRegia">Regia: ${request.regia}
        </label>
        <label id="genere" class="form-check-label labelRequest classeGenere">Genere: ${request.genere}
        </label>
        <label class="form-check-label labelRequest richiestaPendente">Stato: ${request.stato}
        </label>
        <select class="selectGestioneRichiesta">
          <option>In Osservazione
          </option>
          <option>Rifiuta
          </option>
          <option>Soddisfatta
          </option>
        </select>
        <button class="btn btn-success userBtn" id="generalUserSearch">Submit
        </button>
      </div>
    </div>
  </div>`;
}

function createComuneRequestSoddisfatta(request){
    return `<div id="1" class="request shadow-lg p-3 mb-5 bg-body rounded displayRequest">
    <div class="d-flex w-100 justify-content-between">
      <div class="form-check">
        <label id="film" class="form-check-label labelRequest classeFilm"><b>Film:</b> ${request.film}
        </label>
        <label id="regia" class="form-check-label labelRequest classeRegia"><b>Regia:</b> ${request.regia}
        </label>
        <label id="genere" class="form-check-label labelRequest classeGenere"><b>Genere:</b> ${request.genere}
        </label>
        <label class="form-check-label labelRequest richiestaSoddisfatta"><b>Stato:</b> ${request.stato}
        </label>
      </div>
    </div>
  </div>`;
}

export { createSingleRequest, createComuneRequestPendente, createComuneRequestSoddisfatta};