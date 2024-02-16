/* llaves 

la letra e = enter
la letra i = imes
la letra a = ai
la letra o = ober
la letra u = ufat

requisitos
--debe funcionar solo con letras minusculas
--no deben ser utilizados acentos ni caracteres 
    especiales
--Debe ser posible convertir una palabra para la 
    versión encriptada también devolver una palabra 
    encriptada para su versión origina
--El resultado debe ser mostrado en la pantalla

Extra

--Un botón que copie el texto encriptado/desencriptado 
    para la sección de transferencia, o sea que tenga 
    la misma funcionalidad del ctrl+C o de la opción 
    "copiar" del menú de las aplicaciones.
*/

/* control con js de caja de texto, botones y textos*/

let cajaEncriptar = document.getElementById("ingreso");
let botonEncriptar = document.getElementById("btn-encriptar");
let botonDesencriptar = document.getElementById("btn-desencriptar");
let botonCopiar = document.getElementById("btn-copiar");
let tituloDinamico = document.getElementById("titulo");
let instructivo = document.getElementById("parrafo");


/* generacion de titulo dinamico*/

function titulo() {
    tituloDinamico.innerHTML = "Desafio Encriptador Alura-Oracle";
    instructivo.innerHTML = "Ingrese una palabra o frase y toque el boton Encriptar, en caso que tenga un mensaje ya encriptado debe pulsar el boton Desencriptar";
}

titulo()


/* funciones para botones de encriptar y desencriptar y copiar*/

/* funcion para encriptar */
function encriptado() {
    if (cajaEncriptar.value == "") {
        alert("Ingrese una palabra o frase");
        return;
    }
    let encriptado = encriptacion();
    document.getElementById("ingreso").value = encriptado;
}


/* funcion para desencriptar */
function desencriptado() {
    if (cajaEncriptar.value == "") {
        alert("Ingrese una palabra o frase encriptada");
        return;
    }
    let desencriptado = desencriptar();
    document.getElementById("ingreso").value = desencriptado;
}


/* funcion para copiar el texto de la caja */
function copiadoDeTexto(){
    let textoCopiado = document.getElementById("ingreso").value;
    let botonCopiar = document.getElementById("btn-copiar");

    navigator.clipboard.writeText(textoCopiado);
    alert("texto copiado");
}


/* funcion con la logica de encriptar */
function encriptacion() {
    /* en la funcion encriptacion utilizo el metodo de string replace para remplazar 
    la vocal y con switch le doy las condiciones*/
    let palabraAEncriptar = cajaEncriptar.value;

    let palabraEncriptada = palabraAEncriptar.toLowerCase().replace(/[aeiou]/g, function (match) {
        switch (match) {
            case "a":
                return "ai";
                break;
            case "e":
                return "enter";
                break;
            case "i":
                return "imes";
                break;
            case "o":
                return "ober";
                break;
            case "u":
                return "ufat";
                break;
        }
    })
    return palabraEncriptada;
}

encriptacion();


/* funcion con la logica de desencriptar */

function desencriptar() {

    let palabraEncriptada = cajaEncriptar.value;

    let palabraDesencriptada = palabraEncriptada.toLowerCase()
        .replace(/enter/gi, "e")
        .replace(/ober/gi, "o")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ufat/gi, "u");

    return palabraDesencriptada;
}

desencriptar()





