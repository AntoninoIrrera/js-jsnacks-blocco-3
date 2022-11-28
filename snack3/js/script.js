/*


    Crea due array che hanno un numero di elementi diversi. 
    Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

*/


const numeri = [1,2,3,4,5,2,2,2,2,2,2,2,2,2,22,2,2,2];

const lettere = ["a","b","c","d","e","f","g","h"];


console.log(numeri);
console.log(lettere);



while(lettere.length != numeri.length){
    
    if(numeri.length < lettere.length){
        numeri.push(2);
    }else if(lettere.length < numeri.length){
        lettere.push("a");
    }

}


console.log(numeri);
console.log(lettere);



