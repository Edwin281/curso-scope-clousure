// variables 

var a; // declanrando
var b ='b'; // declaramos / asignamos
b = 'bb'; // reasignamos
var a= 'a'; // reclanrando


//Global Scope
var fruit = 'Apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Mexico'; // Variable global
    console.log(country);
}

countries();
console.log(country);

