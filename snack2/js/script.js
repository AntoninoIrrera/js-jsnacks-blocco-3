

/*

    Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
    Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

*/



const numeri = [];

let somma = 0;

let i = 0;

// do{ 
    


//     numeri.push(parseInt(prompt("inserisci un numero")));

//     somma = somma + numeri[i]

//     i++;


// }while(somma < 50);


while(somma < 50){
    numeri.push(parseInt(prompt("inserisci un numero")));

    somma = somma + numeri[i]

    i++;

}









console.log(somma);