/*


    Crea una funzione che dato un array, calcoli la somma dei suoi elementi.

*/



const numero = [1,2,3,4,5,5,6,7,8,8,5,3,2,34,23,4];
let somma = 0;

function getSumOfArrayElements (lista){
    
    for(let i = 0; i < lista.length; i++){
        
        somma = somma + lista[i];
    };

    return somma;

};

const sommaFinale = getSumOfArrayElements;


console.log(sommaFinale(numero));