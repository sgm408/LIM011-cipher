// Declaración de variables, vinculación de HTML y Javascript
const message = document.getElementById('writeMessage');
const result = document.getElementById('messageResult');
const offset = document.getElementById('chooseOffset');
const startBtn = document.getElementById('btnStart');
const webIntro = document.getElementById('introWeb');
const webCipher = document.getElementById('cipherWeb');

// Función de inicio declarada, conteniendo funciones propias de la interacción
function start() {

    webCipher.style.display = '';
    startBtn.style.display = 'none';
    webIntro.style.display = 'none';
}

startBtn.addEventListener('click', start);

// Función de control de evento para cifrado
document.getElementById('btnEncode').addEventListener('click', encode);
function encode() {
    result.value = cipher.encode(offset.value, message.value);
}

// Función de control de evento para descifrado
document.getElementById('btnDecode').addEventListener('click', decode);
function decode() {
    result.value = cipher.decode(offset.value, message.value);
}

// Función de control de evento para limpiado de resultado
document.getElementById('btnClean').addEventListener('click', clean)
function clean() {
    offset.value = '';
    message.value = '';
    result.value = '';
}
