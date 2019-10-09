window.cipher = {
// función encode (cifrado)
  encode: (offset, string) => {

    let resultEncode = '';

    for (let i = 0; i < string.length; i++) {
      let convAscii = string.charCodeAt(i);
    // condicional de mayúscula 65-90
      if (convAscii >= 65 && convAscii <= 90) {

        let result = ((convAscii - 65 + parseInt(offset)) % 26 + 65);
        let resultLetter = String.fromCharCode(result);
        resultEncode = resultEncode + resultLetter;
    }
    }
    return resultEncode;
  },

// función decode (descifrado)
  decode: (offset, string) => {
    let resultDecode = '';
    for (let i = 0; i < string.length; i++) {
      let convAscii = string.charCodeAt(i);
      // condicional de mayúscula 90-65
      if (convAscii >= 65 && convAscii <= 90) {

        let result = ((convAscii - 90 - parseInt(offset)) % 26 + 90);
        let resulLetter = String.fromCharCode(result);
        resultDecode = resultDecode + resulLetter;
      }
    }
    return resultDecode;
  },
  
  // función createCipherWithOffset con dos métodos (encode y decode)
  createCipherWithOffset: (offset) => {
    const result = {
      // métodos con única variable string
      encode(string) {return cipher.encode (offset,string)},
      decode(string) {return cipher.decode (offset,string)}
    }
    return result;
  }
};
