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