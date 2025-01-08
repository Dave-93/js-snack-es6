//todo Snack 1
let arrayMarca = ["Fiat", "BMW", "Audi", "Alfa Romeo"];
let arrayModello = ["Suv", "Berlina", "Sportiva", "Utilitaria"];
let arrayAlimentazione = ["Benzina", "Diesel", "GPL", "Elettrico", "Metano"];

let arrayAuto = [];
let arrayBenzina = [];
let arrayDiesel = [];
let arrayAlimentazioneMista = [];

function randomComplete(){ //funzione per la compilazione random dell'array
    for(let i = 0; i < 10; i++){
        //sceglie in modo randomico i valori presenti in arrayMarca, arrayModello e arrayAlimentazione
        let marcaRandom = arrayMarca[Math.floor(Math.random() * arrayMarca.length)];
        let modelloRandom = arrayModello[Math.floor(Math.random() * arrayModello.length)];
        let alimentazioneRandom = arrayAlimentazione[Math.floor(Math.random() * arrayAlimentazione.length)];
        //popola l'array con i valori generati
        arrayAuto.push({
           marca: marcaRandom,
           modello: modelloRandom,
          alimentazione: alimentazioneRandom
        });
    }
    return;
}
randomComplete(); //invoca funzione
console.log(arrayAuto);

for(let i = 0; i < arrayAuto.length; i++){
    if(arrayAuto[i].alimentazione == "Benzina"){
        arrayBenzina.push(arrayAuto[i]);
    }else if(arrayAuto[i].alimentazione == "Diesel"){
        arrayDiesel.push(arrayAuto[i]);
    }else{
        arrayAlimentazioneMista.push(arrayAuto[i]);
    }
}
console.log(arrayBenzina);
console.log(arrayDiesel);
console.log(arrayAlimentazioneMista);

//todo Snack 2
let arrayString = ["PippO", "PLUto", "paPERIno", "ToPoLiNo", "minnie"];
let arrayCorrect = [];

function firstLetterUpper(){
    for(let i = 0; i < arrayString.length; i++){
        let array = [];
        array = arrayString[i].toLowerCase().split("");//Trasforma la parola in minuscolo e la separa in array di caratteri
        let firstLetter = array[0].toUpperCase();//Conversione della prima lettera in maiuscolo
        array.splice(0,1,firstLetter);//Sostituzione della prima lettera dell'array
        array = array.join("");//Riconversione dell'array in una stringa
        arrayCorrect.push(array);
    }
    return;
}
firstLetterUpper();
console.log(arrayCorrect)

//todo Snack 3
let arrayAnimals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'balena', famiglia: 'cetacei', classe:'mammiferi' },
    { nome: 'vipera', famiglia: 'viperidi', classe: 'rettili'},
    { nome: 'tartaruga', famiglia: 'cheloni', classe: 'rettili'},
    { nome: 'gatto', famiglia: 'felini', classe: 'mammiferi' }
  ]
let arrayMammiferi =[];

for(let i = 0; i < arrayAnimals.length; i++){
    if(arrayAnimals[i].classe === 'mammiferi'){
        arrayMammiferi.push(arrayAnimals[i]);
    }
}
console.log(arrayMammiferi);

//todo Snack 4
let arrayPeople = [
    { nome: "Marco", cognome: "Rossi", eta: 19},
    { nome: "Sara", cognome: "Bianchi", eta: 45},
    { nome: "Pietro", cognome: "Neri", eta: 11},
    { nome: "Luca", cognome: "Neri", eta: 18},
    { nome: "Anna", cognome: "Verdi", eta: 50},
    { nome: "Sara", cognome: "Verdi", eta: 5}
]

for(let i = 0; i < arrayPeople.length; i++){
    if(arrayPeople[i].eta >= 18){
        arrayPeople[i].info = `${arrayPeople[i].cognome} ${arrayPeople[i].nome} è Maggiorenne, quindi può guidare!`;
    }else{
        arrayPeople[i].info = `${arrayPeople[i].cognome} ${arrayPeople[i].nome} è Minorenne, purtroppo non può guidare!`;
    }
}
console.log(arrayPeople)