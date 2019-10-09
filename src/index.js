// Declaración de variables, vinculación de HTML y Javascript
let message = document.getElementById('writeMessage');
let result = document.getElementById('msgResult');
let offset = document.getElementById('chooseOffset');

// función de control de evento para cifrado
document.getElementById('btnEncode').addEventListener('click', encrypted);
function encrypted() {
    result.value = cipher.createCipherWithOffset(offset.value).encode(message.value);
}

// función de control de evento para descifrado
document.getElementById('btnDecode').addEventListener('click',decrypted);
function decrypted (){
    result.value = cipher.decode(offset.value, message.value);
}

// función de control de evento para limpiado de resultado
document.getElementById('btnClean').addEventListener('click', clean)
function clean (){
    message.value = '';
    result.value = '';
    offset.value = '';
}
