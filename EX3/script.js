let numeros = [1.2, 3.7, 4.5, 6.1, 8.9];
let numerosArredondados=[];

numeros.forEach(numeros => {
numerosArredondados.push(Math.ceil(numeros));
})

console.log(numerosArredondados);

