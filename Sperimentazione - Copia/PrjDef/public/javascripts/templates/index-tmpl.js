'use strict';

function createIndexSections(){
    return `
    <div id="interventionSearch">
    <img src="imgs/svgs/rotating.svg" class="img-fluid mx-auto d-block">
    <h1 class="text-center p-3 display-1 title text-light">CINEMA YOSEMITE</h1>
	<hr/>
        <div class="sectionsTitle shadow-lg fs-2 p-3 mb-5 bg-body rounded text-center"><b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg> Ricerca Film effettuata</b></div>
      <p class="h1 text-center text-light">SEZIONE RICERCA </p>
        <div class="d-flex interventionsForm d-flex justify-content-center" id="indexForm">
            <form method="GET">
                <hr></hr>
                <form>
                <div class="row d-flex justify-content-center">
                    <div class="col">
                         <input class="form-control text-center" type="text" id="inputFilm" placeholder="Inserisci film" required>
                     </div>
                    <div class="col">
                        <input class="form-control text-center" type="text" id="inputRegia" placeholder="Inserisci regista" required>
                    </div>
                    <div class="col">
                        <button class="btn btn-success" id="generalUserSearch" type="submit">Search</button>
                    </div>
                    <hr></hr>
                </div>
        </div>
            </form>
            </form>
        </div>
    </div>
    <div class="lavoriRecenti" id="recentWorks">
    <hr>
    
        <div class="sectionsTitle shadow-lg  fs-2 p-3 mb-5 bg-body rounded text-center"><b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
      </svg> Film recentemente in</b></div>
      <img src="imgs/svgs/popcorn.svg" class="img-fluid mx-auto d-block">
      <h1 id="filmID" class="text-center p-5 display-3 titleFilm text-black">PROGRAMMAZIONE</h1>
      <hr>
      <div class="container-fluid px-lg-5">
        <div class="innerLavoriRecenti" id="displayRecentWorks"></div>
    </div>

    <!-- nuovi arrivi -->
	<h1 class="text-center p-5 display-3 titleFilm">NUOVI ARRIVI</h1>
	<section id="gallery">
	  <div class="container">
	    <div class="row">
		  <div class="col-lg-4 mb-4">
		    <div class="card">
			  <img src="imgs/the witch.jpg" alt="Card image" class="card-img-top">
			  <div class="card-body">
				<h5 class="card-title text-dark">The VVitch</h5>
				<p class="card-text text-dark">The Witch rappresenta un'esperienza visiva ed emotiva tutt'altro che facile da decodificare e da smaltire. Ponendosi su differenti piani narrativi si offre per più spunti riflessivi e chiavi di lettura dello stesso. Un film ambiguo, profondamente evocativo, mistico e sinistro è un prodotto che ti resta impresso e si scava una strada nel subconscio degli spettatori.</p>
			  </div>
			</div>
		  </div>
		  <div class="col-lg-4 mb-4">
		    <div class="card">
			  <img src="imgs/midsommar.jpg" alt="" class="card-img-top">
			  <div class="card-body">
				<h5 class="card-title text-dark">Midsommar</h5>
				<p class="card-text text-dark">Chi conosce le scienze tradizionali ravvisa immediatamente in questo film la esemplificazione abbastanza ben riuscita degli elementi fondanti di una cultura tradizionale, cultura che si esprime con ritualità ben definite assolutamente indecifrabili, e solo per questo orrifiche, agli occhi di un occidentale.Qualcosa che non potrete dimenticare.</p>
			  </div>
			</div>
		  </div>
		  <div class="col-lg-4 mb-4">
			<div class="card">
			  <img src="imgs/the lobster.jpg" alt="" class="card-img-top">
			  <div class="card-body">
				<h5 class="card-title text-dark">The Lobster</h5>
				<p class="card-text text-dark">The Lobster è un futuro poco distante dove i single sono fuori legge e vengono internati in un hotel, luogo circondato da una splendida cartolina dai toni freddi, ed hanno 45 giorni per trovare l’anima gemella, periodo entro il quale vengono esposti i vantaggi pratici della vita di coppia in modo sterile e grottesco.</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</section>
	
	<p>&nbsp;</p><hr/>

    <!-- dove siamo -->
	<h1 id="doveID" class="text-center p-5 display-3 titleFilm">DOVE SIAMO</h1>
    <img src="imgs/svgs/ticket.svg" class="img-icon img-responsive img-fluid mx-auto d-block m-5">
	<section>
      <div class="container">
        <div class="container-fluid d-flex justify-content-center">
          <iframe class="container-fluid" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.444351714201!2d-119.65776388469502!3d37.331987579842526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8094277afc2aa2b5%3A0xc19961f4bba94cc1!2sYosemite%20Cinema!5e0!3m2!1sit!2sit!4v1651010917598!5m2!1sit!2sit" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </section>
	
	<p>&nbsp;</p><hr/>

    

    <div class="about-us fs-2 text-center" id="aboutUs">
        <div class="sectionsTitle shadow-lg p-3 mb-5 bg-body rounded"><b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
      </svg> About Us</b></div>
        <div class="aboutUsDescription">
        <!-- footer -->
        <footer class="text-center text-white mt-5">
          <div class="text-center p-4">
            <h3 class="mt-3">© 2023 Copyright:</h3>
            <h2 class="text-white">Daniele Porcelli</h2>
          </div>
        </footer>
        </div>
    </div> `
}

   

export {createIndexSections};