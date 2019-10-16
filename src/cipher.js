window.cipher = {

  encode: (offset, string) => { // Función decode (cifrado)
    let resultEncode = ''; // Declarando un acumulador para el texto
    for (let i = 0; i < string.length; i++) { // Ciclo repetitivo para recorrer el texto a cifrar
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) { // Ciclo condicional para que reconozca las mayúculas
        resultEncode += String.fromCharCode((string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65); // Variable con la fórmula del Cifrado César
      }
      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) { // Ciclo condicional para que reconozca las minúsculas
        resultEncode += String.fromCharCode((string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97); // Variable con la formula del Cifrado César
      }
    }
    return resultEncode; // Retornando el valor
  },

  decode: (offset, string) => { // Función decode (descifrado)
    let resultDecode = ''; // Declarando un acumulador para el texto
    for (let i = 0; i < string.length; i++) { // Ciclo repetitivo para recorrer el texto a cifrar
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) { // Ciclo condicional para que reconozca las mayúculas
        resultDecode += String.fromCharCode((string.charCodeAt(i) - 90 - parseInt(offset)) % 26 + 90); // Variable con la fórmula del Cifrado César
      }
      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) { // Ciclo condicional para que reconozca las minúsculas
        resultDecode += String.fromCharCode((string.charCodeAt(i) - 122 - parseInt(offset)) % 26 + 122); // Variable con la formula del Cifrado César
      }
    }
    return resultDecode; // Retornando el valor
  }
};
