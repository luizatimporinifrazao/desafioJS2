let colors = ["Azul", "amarelo", "vermelho"]
console.log(colors[1])


let num = [1,2,3,4,5]
console.log(num[0])
console.log(num[4])


let frut = ["morango", "maçã"]
frut.push("laranja")

console.table(frut)



let nome = ["Luiza", "Cari-cari", "Bonnifacio" , "Duarte"]
nome.pop(4);
console.table(nome)


let times = ["palmeiras" , "corinthias" , "carina" , "Ordem paranormal"]
console.log(times.length);

let animal= ["carina","luiza","mariposa", "javali", "jaguatirica" , "coelho"]
console.table(animal)

let carros = ["Fiat Strada", "Chevrolet Onix" , "Hyundai HB20" , "Fiat Mobi"]
carros[1]="Uno";
console.table(carros)

let linguagens = ["JavaScript", "python", "java"]
console.log(linguagens.includes('JavaScript')); // true

let valores = [1,2,3,4,5,6,7,8,9,10]
let soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma)


let tarefas = []
tarefas.push("Desenhar")
tarefas.push("estudar")
tarefas.push("limpar a casa")
console.table("lista:")

tarefas.forEach((tarefas, index) => {
  console.log(`${index + 1}. ${tarefas}`);
});