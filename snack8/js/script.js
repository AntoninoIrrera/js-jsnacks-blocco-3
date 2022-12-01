


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

/*

for(let i = 0; i < 10; i++){

    let numeroCasuale = numeriCasuali(0, numeri.length - 1);

    console.log(numeroCasuale);



    if(!numeriDopo.includes(numeri[numeroCasuale])){
        
        numeriDopo.push(numeri[numeroCasuale]);
    
    }else{
        i--;
    }


}


console.log(numeriDopo);

*/



while(numeriDopo.length < 10){
    
    
    let numeroCasuale = numeriCasuali(0, numeri.length - 1);

    console.log(numeroCasuale);
    
    
    
    if (!numeriDopo.includes(numeri[numeroCasuale])) {
        
        numeriDopo.push(numeri[numeroCasuale]);
        
    }
    
    
}


console.log(numeriDopo);