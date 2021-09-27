/*
 3) Dada a string valorA = "substring(): Aprenda a utilizar.", utilizando o método substring, exibir no console: Aprenda a utilizar.
 */
//1
let dominio1 = "mundojs";
let dominio2 = "google";
console.log("Olá "+dominio1+"! O site www."+dominio2+".com te ajuda a achar muitos materiais de estudo");

//2

let valorA = "casa",valorB = "asa", resultado;

valorA=valorA.toUpperCase();
valorB=valorB.toUpperCase();
console.log(valorA+" e "+valorB);
resultado=valorA.localeCompare(valorB)
console.log(resultado);


//3
valorA = "substring(): Aprenda a utilizar."
console.log(valorA.substring(12,32));


