//DECLARAÇÃO DE ARRAY

let frutas = []; //Declaração vazia usando colchetes
//OU
let frutas_cheio = ["maçã","banana", "uva", "melão"];

//Outra forma de declração
let carros = new Array(); //Essa também é uma forma de criar um array

//*************Inserir valor**************
carros.push("Ferrari"); //Insere o valor na ultima posição do array

carros.pop(); //Remove o ultimo valor do array

//Vamos supor que eu queira inserir o valor morango, mas antes de maçã

frutas_cheio.unshift("Morango"); //Insere o valor na posição 0 do array
// Vai ficar assim: frutas_cheio = ["Morango", "Maçã", "Banana", "Uva", "Melão"]
frutas_cheio.shift(); //Remove o valor da primeira posição do array
// Vai ficar assim: frutas_cheio = ["Maçã", "Banana", "Uva", "Melão"]

frutas_cheio.push("laranja");
//["maça", "banana", "uva", "laranja"];

frutas_cheio.slice(1, 1); //Remove a banana
//["Maça", "Uva", "Laranja"];
//No uso do splice, o primeiro argumento é o indice do array e o segundo é a quantidade de itens.

/*******************/
//Outra forma de remover valores
let numeros = [10, 20, 30, 40];

//Quero remover o valor 30
let novo = numeros.filter(n => n !== 30);
// novo = [10, 20, 40]

/**********/
//Array, em javaScript, além de ser infinito, aceita valores de multiplos formatos
let misto = [10, "texto", true];

//Declaração de array como matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][1]); //Retorna o valor 2

/**************************************************/
//Objeto
//Objeto são declarados com pares chave-valor
let pessoa = {
    nome: "João",
    idade: 25
}

console.log("Olá, " + pessoa.nome);

let array_pessoa = ["João", 25];

console.log("Olá, " + array_pessoa[0]);

//Voltando ao objeto
pessoa.nome = "Maria"

console.log(pessoa.nome); //Agora aparece "Maria"

pessoa.profissao = "Professora";

console.log(pessoa);

let exemplo ={
    numero: 0,
    texto_exemplo: "oi",
    boleano: true,
    lista: [1, 2, 3],
    outroObjeto: {x: 1}
} //Valores que da de guardar dentro de um objeto

let pessoa = {
    nome: "João",
    falar: function(){
        console.log("Olá!" + this.nome);
    }
};