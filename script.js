/* desafio 1


let dia = "dia";

if (dia == "dia") {
  console.log("Claro");
} else {
  console.log("De noite");
}


*/

/* desafio 2


for (let i = 0; i <= 20; i += 2) {
  console.log("contando", i);
}


*/

/* Desafio 3

function nome() {
  console.log("Ola meu nome e Pedro");
}

nome();

*/

/* Desafio 4

function exibirNome(nome) {
  console.log("Meu nome é: " + nome);
}
exibirNome("Pedro");

*/

/* Desafio 5

function sobreMim(nome, idade, musica) {
  console.log("Meu nome é: " + nome);

  console.log("Tenho: " + idade + "anos");

  console.log("E gosto de: " + musica);
}
sobreMim("Pedro", 25, "Sertanejo");

*/

/* Desafio 6

function filmeEmusica(filme, musica) {
  console.log(filme);

  console.log(musica);
}
filmeEmusica("Interestelar", "Sertanejo");

*/

/* Desafio 7

function triploDoNumero(numero) {
  return numero * 3;
}

let resultado = triploDoNumero(5);
console.log(resultado);

*/

/* desaio 8
function trueOuFalso(valor) {
  if (typeof valor === "boolean") {
    return valor === true;
  } else {
    return false;
  }
}

let resultado1 = trueOuFalso(true);
console.log(resultado1);
*/

/* Desafio 9

let array = ["1, 2, 3, 4, 5, 6"];

console.log(array);

*/

/* desafio 10

let array = ["pedro, henrique, souza, candido"];

console.log(array);

array.unshift("Ontonio");

*/

/* desafio 11

let array = ["pedro, henrique, souza, candido"];

array.pop();

console.log(array);

*/

/* Desafio 12

let array = ["Maçã, Pera, Abacate, jabuticaba"];

array.push("Mamão", "Uva");

console.log(array);

*/

/* desafio 13

let frutas = ["Maçã, Pera, Abacate, jabuticaba"];

frutas.shift();

console.log(frutas);

*/

/* desafio 14 - NAO CONSEGUI FAZER SOZINHO, TIVE QUE PESQUISAR

let nomes = ["João", "Maria", "Jose", "Pedro"];

let indiceParaAdicionar = 2;
let nomeASerAdicionado = "Ana";

nomes.splice(indiceParaAdicionar, 0, nomeASerAdicionado);

console.log(nomes);
*/

/* Desafio 15 

let numeros = [6, 5, 6, 9, 8, 4, 2, 1, 2];

numeros.sort(function (a, b) {
  return a - b;
});

console.log(numeros);

*/
