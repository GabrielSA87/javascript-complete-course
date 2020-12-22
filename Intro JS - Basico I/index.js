console.log("Hello World!");

var traduzirTexto = "Olá Mundo!";

console.log(traduzirTexto);

console.log("---------------------------------------------");

// Atribuicao "=" seta os valores das variaveis.
let a = 10;
const b = 20;

// Comparacao "==" compara os valores entre variaveis.
let c = 10;
const d = "10"; //Mesmo colocando uma das variaveis como string ele ainda compara só os valores.

console.log(a == b); //FALSE
console.log(c == d); //TRUE

// "===" compara os valores e o tipo das variaveis.
let e = 10;
const f = "10";

console.log(c === d); //FALSE

// "!==" ou "!=" contrario do "===" ou "==", respectivamente, verifica a diferenca entre as variaveis.
let g = 10;
const h = "10";

console.log(g !== h); //TRUE
console.log(g != h); //FLASE

console.log("---------------------------------------------");

let cor = "Azul";
/*
if (cor === "Verde") {
    console.log("Siga!");
}
else if (cor === "Amarelo") {
    console.log("Atencao!");
}
else if (cor === "Verde") {
    console.log("Pare!");
}
*/

//Para um melhor codigo, escreveremos o codigo acima da seguinte forma:

switch (cor) {
    case "Verde":
        console.log("Siga!");
        break;

    case "Amarelo":
        console.log("Atencao!");
        break;
        
    case "Vermelho":
        console.log("Pare!");
        break;
    
    default:
        console.log("Cor nao encontrada!")
}

console.log("---------------------------------------------");

/**
 * LACOS DE REPETICAO
 * 
 *      FOR (valor inicial; valor final; incremento) {
 *          instrucoes();
 *          IF (condicao) {break;} *podemos usar o break para sair de uma condicao,
 *                          colocando em uma condicao IF*
 *      }
 *      
 *      FOR EACH
 *          IF (condicao) {continue;} *podemos usar o continue para pular uma condicao,
 *                          colocando em uma condicao IF*
 *      
 *      FOR IN
 * 
 *      DO WHILE      
 */

 // EX.:

let n = 5;

for (let i = 0; i <= 10; i++) {
    
    console.log(`${i} x ${n} = ${i*n}`);
 // console.log(i + " x " + n + " = " + (i * n));
}

console.log("---------------------------------------------");

/* --- FUNCTION --- */

function calc(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);
}

let resultado = calc(1, 2, "+");
console.log(resultado);


/* --- ARROW FUNCTION --- */

let calc2 = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}

let resultado2 = calc2(1, 2, "+");
console.log(resultado2);

console.log("---------------------------------------------");


/* --- EVENT ---*/

window.addEventListener('focus', event => {
    console.log("focus");
});

document.addEventListener('click', event => {
    console.log("click");
});

/* --- DATA --- */

let timeStamp = Date.now();
console.log(timeStamp);

let agoraStand = new Date();
console.log(agoraStand);

let agora = new Date();
console.log(`${agora.getMonth()} / ${agora.getDate()} / ${agora.getFullYear()}`);

let agoraPtBR = new Date();
console.log(agoraPtBR.toLocaleDateString("pt-BR"));


console.log("---------------------------------------------");


/* --- ARRAYS --- */

let carros = ["Palio", "Toro", "Uno", 10, true, new Date(), function(){}];

console.log(carros.lengh);

console.log(carros[3]);

console.log(carros[5]);

console.log(carros[5].getFullYear());

console.log(carros[6]()); //podemos invocar a funcao no array.

carros.forEach(function(value, index) {
    console.log(index, value)
});

console.log(carros.length);

// EXERCICIO - ARRAY //
console.log("EXERCICIO - ARRAY")

let montadoras = ["Ford", 
                  "Troller", 
                  "Nissan", 
                  "BMW", 
                  "Chevrolet", 
                  "Honda",
                  "Toyota",
                  "Mercedes-Benz", 
                  "Kawasaki"];


montadoras.forEach(function(value, index){
    console.log(index, value)
});

console.log(montadoras[6])


console.log("---------------------------------------------");


/* --- OO - Orientacao a Objeto --- */

// Método antigo
/*
let celular = function(){

    this.cor = "Prata";

    this.ligar = function () {
        console.log("Ligacao:");
        return "Chamando...";
    }
}

let objeto = new celular();

console.log(objeto.ligar());
*/

// Método novo - mais polido

class celular {
    constructor(){
        this.cor = "Prata";
    }

    ligar() {
        console.log("Ligacao:");
        return "Chamando";
    }
}

let objeto = new celular();

console.log(objeto.ligar());
