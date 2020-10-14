/*Parámetro usando restOperator(...numeros) este ejemplo no funciona con arrow function
//const conta = conta(operador, acumulador, ...numeros){};

function conta(operador,acumulador,...numeros){
    for(let numero of numeros){
        if(operador === '+') {acumulador += numero}
        if(operador === '-') {acumulador -= numero}
        if(operador === '*') {acumulador *= numero}
        if(operador === '/') {acumulador /= numero}
    }
    console.log(acumulador)
}

conta('+', 15, 80, 90, 70, 50, 40)

*/

//Return

/* function persona(nome, sobrenome){
    return {nome: nome, sobrenome: sobrenome}
}

let pessoa1 = persona('melicia Cristina', 'tejada mendez')

console.log(typeof pessoa1.nome)
*/


/*
//Callback

//function generar numeros random
function rand(max = 4000, min = 1000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function time1(callback){
    setTimeout(function(){
        console.log('queso1')
        if(callback) callback();
    }, rand())
}

function time2(callback){
    setTimeout(function(){
        console.log('queso2')
        if(callback) callback();
    }, rand())
}

function time3(callback){
    setTimeout(function(){
        console.log('queso3')
        if(callback) callback();
    }, rand())
}

time1(callback1);

function callback1(){
    time2(callback2)
}

function callback2(){
    time3(callback3)
}

function callback3(){
    console.log('ultima')
}
*/


/* mi primera idea para filtrar 
let conta =[]

function filtrar(){
    for(elem of arrayfirst){
        if (elem > 10){
            conta.push(elem)
        }
    }
    console.log(conta)
};

filtrar();
*/

// filter, Map, Reduce


let arrayfirst = [50, 40 ,10, 8 , 9 , 45, 35, 25, 15, 5 , 6, 7];
const pessoas = [
    {nome: 'Luiz', idade: 60},
    {nome: 'Maria', idade: 50},
    {nome: 'Jose', idade: 62},
    {nome: 'Pedro', idade: 44},
    {nome: 'Alejandro', idade: 52},
];

const filtro = arrayfirst.filter(obj => obj > 10);

const dois = arrayfirst.filter(obj => obj % 2 === 0);

const alterar = arrayfirst.map(valor => valor * 2 );

const soma = arrayfirst.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador;
}, 0);

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor
});

// Juntar métodos filter/map/reduce

const ultimo = arrayfirst
    .filter(obj => obj % 2 === 0)
    .map(obj => obj * 2)
    .reduce((acumulador, valor) => acumulador + valor );



// forEach percorrer elementos con métodos.

/*Pessoa.prototype === Pessoa._proto_

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function (){
    return this.nome +  ' ' + this.sobrenome;
} 

const pessoa1 = new Pessoa('maria', 'aguilar')

console.log(pessoa1.nomeCompleto())
*/

/*Herença

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco)
    this.material = material;
}

Caneca.prototype.constructor = 'caneca';

const caneca = new Caneca('cafe', 10, 'vidro');

console.log(caneca)
*/