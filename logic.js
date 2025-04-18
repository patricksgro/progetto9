function cambiaH1() {
    let titoloNegozio = document.getElementById("titolo")            //funzione per cambiare il titolo
    titoloNegozio.textContent = "Patrick's Articles"
}


function cambiaTema() {
    let temaSito = document.querySelector("body")
    temaSito.style.backgroundColor = "rgb(243, 241, 217)"          //funzione per cambiare il tema
}


function cambiaTema1() {
    let temaSito1 = document.querySelector("body")                    //funzione per ripristinare il titolo
    temaSito1.style.backgroundColor = "white"
}


function cambiaIndirizzo() {
    let indirizzo = document.getElementById("nuovoIndirizzo")         //funzione per cambiare il titolo
    indirizzo.textContent = "Via Roma 150, 11111, Roma, RM"
}


function nuovaClasse() {
    let classe = document.querySelectorAll('a')
    classe.forEach(classe => {                                        //funzione per aggiungere classi ai link
        classe.classList.add('nome-della-classe');
      });
}


function maglia() {
    let img = document.querySelectorAll('.invisible')
    img.forEach(img => {
        if(img.style.display === "none") {
            img.style.display = "block"                                //funzione per mostrare/rimuovere immagini
        } else {                 
            img.style.display = "none"
        }
        
    })
}


function cambiaColorePrezzi() {
    let prezzi = document.querySelectorAll(".prices")
    prezzi.forEach(pre => {
        pre.style.color = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")"             //funzione per cambiare colore di ogni prezzo
    })
}

function randomColor() {
    let x = Math.random() * 255 + 1;
    return x;
}




// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina                                                                                                            
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


