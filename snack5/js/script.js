


/*

    Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.


*/



function getRandomNumber (numberMin, numberMax){

    let numeroCasuale = Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin);

    return numeroCasuale;
};



const numeroMin = parseInt(prompt("inserisci il numero minimo che vuoi ottenere"));
const numeromax = parseInt(prompt("inserisci il numero massimo che vuoi ottenere"));


const numero = getRandomNumber(numeroMin, numeromax);

console.log(numero);