

//Declaracion de variables
const ingTex = document.querySelector(".Texto"); 
const regTex = document.querySelector(".areaCodificada");

//Mensaje de error
function msjX(mensaje) {
    const erroneo1 = document.querySelector('#error');
    erroneo1.textContent = mensaje;
    erroreo1.style.display = 'block';
    setTimeout(() => {
        erroneo1.style.display = 'none';
    }, 3000);
}
//funcion que encriptara texto 
function Bencriptar(){
    const correcto = /^[a-z \n]+$/.test(ingTex.value);
    if (correcto==true){
            const textEncrip = encriptar(ingTex.value);
            regTex.value = textEncrip;
            ingTex.value = "";
            regTex.style.backgroundImage = "none";
            document.getElementById("desemcriptar").disabled = false; 
            document.getElementById("Bcopy").disabled = false; 

    }
    else{
        msjX('Unicamente letras minusculas, sin asentos ni caracteres.');
        ingTex.value = "";
        regTex.value = "";
        document.getElementById("desemcriptar").disabled = true; 
        document.getElementById("Bcopy").disabled = true; 
    }
}
//funcion que desencriptara texto
function Bdesencriptar(){
    const textoEncriptado = desencriptar(ingTex.value)
    regTex.value = textoEncriptado;
    ingTex.value = "";
}
//funcion que copia texto
function Bcopiar(){
    document.getElementById("textarea2").select()
            document.execCommand ("copy");
}
 

/* sustitucion de vocales por encriptado de vocales
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

//funcion que encriptara texto introducido por el usiario
function encriptar(codigoencrip){
    let conversion = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    codigoencrip = codigoencrip.toLowerCase()
    for(let i = 0; i < conversion.length; i++){
        if(codigoencrip.includes(conversion[i][0])){
            codigoencrip = codigoencrip.replaceAll(conversion[i][0], conversion[i][1])

        }
    }
    return codigoencrip;
}

//Función para desencriptar texto
function desencriptar(codigodesen){
let conversion2 = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
codigodesen = codigodesen.toLowerCase()
for(let i = 0; i < conversion2.length; i++){
if(codigodesen.includes(conversion2[i][1])){
    codigodesen = codigodesen.replaceAll(conversion2[i][1], conversion2[i][0])
}
}
return codigodesen;
}
