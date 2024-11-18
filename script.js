// ESERCIZIO 1
// Crea un oggetto persona con le seguenti caratteristiche:
// nome
// cognome
// età
// un metodo che permetta di salutare


// let superhero = {
//     'name' : 'Venom',
//     'surname' : 'Brock',
//     'age' : '40',
//     'sayhello' : function(){
//         console.log( `Buongiorno mondo sono il superhero ${this.name}`)
//     }
// }
//   superhero.sayhello();  
// console.log(superhero.sayhello);



// ESERCIZIO 2
// Crea un oggetto rubrica con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
// mostrare tutti i contatti dell’agenda
// mostrare un singolo contatto
// eliminare un contatto dall’agenda
// aggiungere un nuovo contatto
// modificare un contatto esistente
// Suggerimento: let rubrica = { 'contacts': [ {'nome': 'Angela', 'telefono': '3331111111'}, {'nome': 'Annalisa', 'telefono': '3332222222'}, {'nome': 'Paola', 'telefono': '3333333333'}, {'nome': 'Emilia', 'telefono': '3334444444'} ], ... }

   // Creiamo un oggetto rubrica con una proprietà 'contacts' che contiene la lista dei contatti
// const rubrica = {
//     contacts: [
//         { 'nome': 'Angela', 'telefono': '3331111111' },
//         { 'nome': 'Annalisa', 'telefono': '3332222222' },
//         { 'nome': 'Paola', 'telefono': '3333333333' },
//         { 'nome': 'Emilia', 'telefono': '3334444444' },
//         { 'nome': 'Geltrude', 'telefono': '3324474901' }
//     ],

    // Funzione per mostrare tutti i contatti
    // mostraTutti: function() {
    //     this.contacts.forEach(contact => {
    //         console.log(`Nome: ${contact.nome}, Telefono: ${contact.telefono}`);
    //     });
    // },

    // Funzione per mostrare un singolo contatto
    // mostraSingolo: function(nome) {
    //     const contact = this.contacts.find(contact => contact.nome.toLowerCase() === nome.toLowerCase());
    //     if (contact) {
    //         console.log(`Nome: ${contact.nome}, Telefono: ${contact.telefono}`);
    //     } else {
    //         console.log('Contatto non trovato.');
    //     }
    // },

    // Funzione per eliminare un contatto
    // eliminaContatto: function(nome) {
    //     const index = this.contacts.findIndex(contact => contact.nome.toLowerCase() === nome.toLowerCase());
    //     if (index !== -1) {
    //         this.contacts.splice(index, 1);
    //         console.log(`${nome} è stato eliminato.`);
    //     } else {
    //         console.log('Contatto non trovato.');
    //     }
    // },

    // Funzione per aggiungere un nuovo contatto
    // aggiungiContatto: function(nome, telefono) {
    //     this.contacts.push({ nome: nome, telefono: telefono });
    //     console.log(`${nome} è stato aggiunto.`);
    // },

    // Funzione per modificare un contatto esistente
//     modificaContatto: function(nome, nuovoNome, nuovoTelefono) {
//         const contact = this.contacts.find(contact => contact.nome.toLowerCase() === nome.toLowerCase());
//         if (contact) {
//             contact.nome = nuovoNome;
//             contact.telefono = nuovoTelefono;
//             console.log(`${nome} è stato modificato in ${nuovoNome} con telefono ${nuovoTelefono}.`);
//         } else {
//             console.log('Contatto non trovato.');
//         }
//     }
// };

// Esempio di utilizzo delle funzioni:

// Mostra tutti i contatti
// rubrica.mostraTutti();

// Mostra un singolo contatto
// rubrica.mostraSingolo('Paola');

// Aggiungi un nuovo contatto
// rubrica.aggiungiContatto('Luigi', '3335555555');

// Modifica un contatto esistente
// rubrica.modificaContatto('Paola', 'Paola Rossi', '3337777777');

// Elimina un contatto
// rubrica.eliminaContatto('Geltrude');

// Mostra tutti i contatti dopo le modifiche
// rubrica.mostraTutti();


// ESERCIZIO 3
// Lavora con il DOM:
// crea una pagina HTML con 3 paragrafi e 3 bottoni.
// Il primo bottone dovrà cambiare il colore del testo dei paragrafi in modo casuale. ogni paragrafo dovrà avere un colore diverso. = il secondo dovrà rendere il testo dei paragrafi in grassetto.
// il terzo dovrà far scomparire e ricomparire i paragrafi.
// TIPS: ricordati della proprietà display: none in CSS! i colori su CSS sono formati da R, G e B. Quindi puoi settare un colore random semplicemente randomizzando questi tre valori e mettendoli insieme. Scopri come.




// Funzione per ottenere un colore casuale in formato RGB
// function getRandomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// Funzione per cambiare il colore dei paragrafi
// function cambiaColore() {
//     document.getElementById("paragrafo1").style.color = getRandomColor();
//     document.getElementById("paragrafo2").style.color = getRandomColor();
//     document.getElementById("paragrafo3").style.color = getRandomColor();
// }

// Funzione per rendere il testo in grassetto
// function rendiGrassetto() {
//     document.getElementById("paragrafo1").style.fontWeight = 'bold';
//     document.getElementById("paragrafo2").style.fontWeight = 'bold';
//     document.getElementById("paragrafo3").style.fontWeight = 'bold';
// }

// Funzione per far scomparire e ricomparire i paragrafi
// function scompariRicompari() {
//     const paragrafi = document.querySelectorAll('p');
//     paragrafi.forEach(paragrafo => {
//         // Se il paragrafo è visibile, lo nascondiamo
//         if (paragrafo.style.display !== 'none') {
//             paragrafo.style.display = 'none';
//         } else {
//             // Altrimenti lo rendiamo visibile
//             paragrafo.style.display = 'block';
//         }
//     });
// }

// Aggiungi gli event listener ai bottoni
// document.getElementById("btnColore").addEventListener("click", cambiaColore);
// document.getElementById("btnGrassetto").addEventListener("click", rendiGrassetto);
// document.getElementById("btnScompari").addEventListener("click", scompariRicompari);

// Selezioniamo gli elementi del DOM
const titoloInput = document.getElementById("titolo");
const paragrafoInput = document.getElementById("paragrafo");
const btnCreaArticolo = document.getElementById("btnCreaArticolo");
const articoliContainer = document.getElementById("articoli");

// Funzione per creare un articolo
function creaArticolo() {
    const titolo = titoloInput.value.trim();
    const paragrafo = paragrafoInput.value.trim();

    // Controlliamo che i campi non siano vuoti
    if (!titolo || !paragrafo) {
        alert("Per favore, inserisci sia il titolo che il paragrafo!");
        return;
    }

    // Creiamo un nuovo articolo
    let date = new Date();
    let formatDate = date.toLocaleDateString();

    // Creiamo il contenuto HTML dell'articolo
    const articoloHTML = `
        <div class="articolo">
            <h2>${titolo}</h2>
            <p>${paragrafo}</p>
            <p class="data">Pubblicato il: ${formatDate}</p>
        </div>
    `;

    // Aggiungiamo l'articolo all'area degli articoli
    articoliContainer.insertAdjacentHTML("beforeend", articoloHTML);

    // Puliamo gli input
    titoloInput.value = "";
    paragrafoInput.value = "";
}

// Aggiungiamo un event listener al bottone per creare l'articolo
btnCreaArticolo.addEventListener("click", creaArticolo);
