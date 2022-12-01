


/*

    Data una lista di 20 numeri diversi.
    generiamo una lista secondaria di
    10 numeri presi dalla lista, diversi tra loro.


*/


numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

numeriDopo = [];


function numeriCasuali(numMin, numMax){

    const numeroCasuale = Math.floor(Math.random() * (numMax - numMin) + 1) + numMin;

    return numeroCasuale;
}

for(let i = 0; i < 10; i++){

    const numeroCasuale = numeriCasuali(0, 19);


    numeriDopo.push(numeri[numeroCasuale]);


}

console.log(numeriDopo);