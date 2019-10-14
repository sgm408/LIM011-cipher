window.cipher = {
  
  encode: (offset, string) => { // función encode (cifrado)
    let resultEncode = ''; //Declarando un acumulador para el texto
    for (let i = 0; i < string.length; i++) { // Ciclo repetitivo para recorrer el texto a cifrar
    let convAscii = string.charCodeAt(i); // Declarando una variable que guardará el codigo Ascii
    if (convAscii >= 65 && convAscii <= 90) { // Ciclo condicional para que reconozca las mayusculas
    let result = ((convAscii - 65 + parseInt(offset)) % 26 + 65); // Variable con la formula del cifrado Cesar
    let resultLetter = String.fromCharCode(result); // Variable reasignada, retornandole el valor de letra.
    resultEncode = resultEncode + resultLetter;
    } 
    }
    return resultEncode; // Retornando el valor
  },

  decode: (offset, string) => { // función decode (descifrado)
    let resultDecode = ''; //Declarando un acumulador para el texto
    for (let i = 0; i < string.length; i++) { // Ciclo repetitivo para recorrer el texto a cifrar
    let convAscii = string.charCodeAt(i); // Declarando una variable que guardará el codigo Ascii
    if (convAscii >= 65 && convAscii <= 90) { // Ciclo condicional para que reconozca las mayusculas
    let result = ((convAscii - 90 - parseInt(offset)) % 26 + 90); // Variable con la formula del cifrado Cesar
    let resulLetter = String.fromCharCode(result); // Variable reasignada, retornandole el valor de letra.
    resultDecode = resultDecode + resulLetter;
    }
    }
    return resultDecode; // Retornando el valor
  },

  createCipherWithOffset: (offset) => { // función createCipherWithOffset con dos métodos (encode y decode)
    const result = {
    encode(string) { return cipher.encode(offset, string) },
    decode(string) { return cipher.decode(offset, string) }
    }
    return result;
  }
};
