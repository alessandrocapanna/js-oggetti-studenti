// - Creo un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
var studente = {
  nome: 'alessandro',
  cognome: 'capanna',
  età: 20
};

// Stampo a schermo attraverso il for in tutte le proprietà.
for (var singolaProprietà in studente) {
  var proprietàDaStampare = studente[singolaProprietà];
  $('ul#proprieta-studente').append('<li>' + proprietàDaStampare+ '</li>');
};

// - Creare un array di oggetti di studenti.
var arrayStudenti = [
  {
    nome:'pippo',
    cognome:'rossi'
  },
  {
    nome:'giacomo',
    cognome:'hackman'
  },
  {
    nome:'steve',
    cognome:'maldo'
  },
  {
    nome:'justin',
    cognome:'gabbana'
  },
  {
    nome:'aldo',
    cognome:'moro'
  }
];
//  Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for (var i = 0; i < arrayStudenti.length; i++) {
  var singoloNome = arrayStudenti[i].nome;
  var singoloCognome = arrayStudenti[i].cognome;
  $('ul#studenti').append('<li>' + 'studente numero: ' + [i + 1] + '</br>' + 'nome: ' + singoloNome   + '</br>' + 'cognome: ' + singoloCognome +'</li>')
}


// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
$('button').click (
  function(){
    var nome = prompt('inserisci il nome dello studente');
    var cognome = prompt('inserisci il cognome dello studente');
    var eta = prompt('inserisci l\'eta dello studente');
    var nuovoStudente = {
      nome: nome,
      cognome: cognome,
      eta: eta
    };
    $('ul#nuovi-studenti').append('<li>' + 'studente nuovo' + '</br>' + 'nome: ' + nome  + '</br>' + 'cognome: ' + cognome + '</br>' + 'età: ' + eta +'</li>')
  }
);
