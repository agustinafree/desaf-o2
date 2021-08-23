let MayorMill = parseInt(prompt("Ingrese número mayor a 1000"));
if (MayorMill >1000) {
    alert("Es mayor a 1000!");
} else if (MayorMill>= 1000) {
    alert("No es mayor a 1000");
} else {
    alert("ERROR"); 
}

let Saludo = prompt("Saludanos, por favor");
if (Saludo == "hola" == "hi") {
  alert("gracias");
} else {
    alert("Error no dijiste 'hola' ");
}

let numeroIngresado = prompt("Ingrese numero entre 10 y 50")
if ((numeroIngresado >= 10 && numeroIngresado <= 50)  || (numeroIngresado > numeroMax)) {
    alert("el numero ingresado esta entre 10 y 50");
} else {
    alert(numeroIngresado + " " + " No cumple lo requerido"); 
}

