// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto. 

var studente = {
    nome: 'Lorenzo',
    cognome: 'Bernini',
    età: '14 anni',
}

for (var key in studente) {
    console.log(studente[key]);
}


// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

var studenti = [
    {
    nome: 'Lorenzo',
    cognome: 'Bernini',
    età: '14 anni',
    },

    {
    nome: 'Roy',
    cognome: 'Paci',
    età: '10 anni',
    },

    {
    nome: 'Andrea',
    cognome: 'Sabatini',
    età: '8 anni',
    },

    {
    nome: 'Luca',
    cognome: 'Bernini',
    età: '29 anni',
    }
];

for (var key in studenti) {
    console.log(studenti[key]);
}

// Dare la possibilità all’utente, attraverso 3 prompt(),
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$("#button").click(function (){
    var name = $("#name").val();
    var surname = $("#surname").val();
    var eta = $("#eta").val();

    var studenti = {
        name: name,
        cognome: surname,
        eta: eta,
    }
    console.log(studenti);
})