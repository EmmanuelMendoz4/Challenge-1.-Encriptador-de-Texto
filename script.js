const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#texto-desencriptado");
const matriz_codificar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function botonEncriptar() {
    const texto = encriptar(campo_texto.value);

    if(validarTexto(texto)) {
        campo_mensaje.value = texto;
        campo_texto.value = "";
    } else {
        alert("El texto no puede contener letras mayúsculas, números ni caracteres especiales. Intenta nuevamente.")
    }
}

function botonDesencriptar() {
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
    campo_texto.value = "";
}

function encriptar(mensaje) {
    for (let i = 0; i < matriz_codificar.length; i++) {
        if(mensaje.includes(matriz_codificar[i][0])) {
            mensaje = mensaje.replaceAll(
                matriz_codificar[i][0],
                matriz_codificar[i][1]
            );
        }
    }
    return mensaje;
}

function desencriptar(mensaje) {
    for (let i = 0; i < matriz_codificar.length; i++) {
        if(mensaje.includes(matriz_codificar[i][1])) {
            mensaje = mensaje.replaceAll(
                matriz_codificar[i][1],
                matriz_codificar[i][0]
            );
        }
    }
    return mensaje;
}

function botonCopiar(){
    let boton = document.querySelector('.botonCopiar');

    navigator.clipboard.writeText(campo_mensaje.value);
    botonBorrar();
    alert("Se ha copiado el texto.");
}

function botonBorrar(){
    campo_texto.value = "";
    campo_mensaje.value = "";
}

function validarTexto(mensaje) {
    const regex = /^[a-z\s]*$/;

    if (regex.test(mensaje)) {
        return true;
    } else {
        return false;
    }
}

function botonSecreto() {
    alert("¡Gracias por usar mi Encriptador/Desencriptador de texto!");
}
