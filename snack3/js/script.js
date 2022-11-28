/*


    Crea due array che hanno un numero di elementi diversi. 
    Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

*/


const numeri = [1,2,3,4,5];

const lettere = ["a","b","c","d","e","f","g","h"];


console.log(numeri);
console.log(lettere);



while(lettere.length != numeri.length){
    
    numeri.push(2);

}


console.log(numeri);
console.log(lettere);



