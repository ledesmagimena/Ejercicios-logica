/*const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];
const dni = prompt("Ingrese su DNI");
if (isNaN(dni)) {
  alert("Ingresaste una letra, ingresa un numero");
} else {
  if (dni <= 0 || dni > 99999999) {
    alert("El DNI no es valido");
  }
}
const calculoLetra = letras[dni % 23];
console.log(`Su letra es ${calculoLetra}`);*/

/*let array = [];
let producto = 1;
let totalArray = parseInt(prompt("Elija la cantidad de arreglos que tendrá"));
for (let i = 0; i < totalArray; i++) {
  array[i] = parseInt(prompt(`Ingrese el elemento ${i + 1} del arreglo`));
  producto = producto * array[i];
}
alert(`El producto de los valores ingresados es ${producto}`);*/

/*let nombres = ["fran", "agus", "GIME"];
let arrayNuevo = [];
function nombresMayusculas(nombres) {
  for (let i = 0; i < nombres.length; i++) {
    nombres[i] = nombres[i].toLowerCase();
    let nombresArray = nombres[i].split("");
    let mayuscula = nombresArray[0].toUpperCase();
    nombresArray.splice(0, 1, mayuscula);
    arrayNuevo[i] = nombresArray.join("");
  }
  return arrayNuevo;
}
console.log(nombresMayusculas(nombres));*/

/* estos son intentos del 8 sin terminar pero planteados/
/*let palabras = "hola usuario  usuario jaja";
let resultado = [];
function palabraMasLarga(palabras) {
  for (let i = 0; i < palabras.length; i++) {
    let array = palabras[i].split("");
    let largoPalabra = palabras[0].length;
    if (largoPalabra < array[i].length) {
      largoPalabra = array[i].length;
    }
  }
  for (let i = 0; i < palabras.length; i++) {
    if (array[i].length === largoPalabra) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}
console.log(palabraMasLarga(palabras));

function palabraMasLarga(palabras) {
  let array = palabras[i].split("");
  let largoPalabra = palabras[0].length;
  let resultado = [];
  for (let i = 0; i < palabras.length; i++) {
    if (largoPalabra < array[i].length) {
      largoPalabra = array[i].length;
    }
  }
  for (let i = 0; i < palabras.length; i++) {
    if (array[i].length === largoPalabra) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}
console.log(palabraMasLarga(palabras));*/
/*let palabras = ["hola", "hola", "gato"];
function longeWord(palabras) {
  let palabraMasLarga = palabras.reduce((a, b) =>
    a.length > b.length ? a : a.length === b.length ? `${a} , ${b}` : b
  );
  return palabraMasLarga;
}

console.log(longeWord(palabras));*/

/*este si cumple*/
/*let palabras = ["hola", " puerto", "beber"];

function palabraMasLarga(string) {
  let arregloPalabras = string.split(" ");
  let longitud = 0;
  let palabraMasLargaDelString = null;
  for (let i = 0; i < arregloPalabras.length; i++) {
    if (longitud < arregloPalabras[i].length) {
      longitud = arregloPalabras[i].length;
      palabraMasLargaDelString = arregloPalabras[i];
    }
  }
  return palabraMasLargaDelString;
}

let longitud = -1;
let respuesta = "";
for (let elemento of palabras) {
  let palabraMasLarga2 = palabraMasLarga(elemento);
  let length = palabraMasLarga2.length;
  if (length > longitud) {
    longitud = length;
    respuesta = palabraMasLarga2;
  }
}
console.log(respuesta);*/

let numbers = [2, 3, 1, 5, 9, 7];
function mayorMenor(numeros) {
  let numerOrdenado = numbers.sort((a, b) => a - b);
  {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    if ((a = b)) {
      return 0;
    }
  }
}

console.log(mayorMenor(numeros));
