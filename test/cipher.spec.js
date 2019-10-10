global.window = global;
require('../src/cipher');

describe('cipher', () => {

  it('debería ser un object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

  });


  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
    expect(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

});
});

describe('cipher.createCipherWithOffset', () => {

  it('debería ser una función', () => {
    expect(typeof cipher.createCipherWithOffset).toBe('function');
  });

  it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
    expect(cipher.createCipherWithOffset(33));
    expect(cipher.createCipherWithOffset(33).encode);
    expect(cipher.createCipherWithOffset(33).decode);
  });

  it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
    expect(cipher.createCipherWithOffset(33).encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
  });

  it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
    expect(cipher.createCipherWithOffset(33).decode('HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  });
});
});
