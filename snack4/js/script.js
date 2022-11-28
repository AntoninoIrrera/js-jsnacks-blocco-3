/*

    Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

*/




const names = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const lastnames = [1, 2, 3, 4, 5, 6, 7];


const sumArray = [];

let i = 0;

while (sumArray.length != names.length * 2) {

    sumArray.push(names[i]);
    sumArray.push(lastnames[i]);

    i++;
}


console.log(sumArray);