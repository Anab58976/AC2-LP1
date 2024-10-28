let numeros = [2, 5, 8, 13, 16, 21];
let numeroMultiplicado = []

numeros.forEach(numeros => {
if(numero % 2 === 0){
 numeroMultiplicado.push(numero)}  
 else {
let multiplicador = Math.floor(Math.random()* 10);
numeroMultiplicado.push(numeros * multiplicador) 
}
})
console.log(numeroMultiplicado);