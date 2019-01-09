//npm test
require('../src/data.js');
require("./lol");
const datos= Object.values(LOL.data);
let campeones=[]
let az=[]
let za=[]


describe('data', () => {
/*
describe('data.filter', () => {
  
  it('Filter is a function', () => {
    expect(typeof data.filter).toBe('Filter is a function');
    //assert.equal(typeof data.filter, 'function');
  });

  it('Debería retornar los campeones de la categoría Luchador', () => {
    expect(example(filter.data(datos,fighter))).toBe(campeones);
    //assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33),"HIJKLMNOPQRSTUVWXYZABCDEFG");
  });
});

describe('data.ordenar', () => {
  
  it('ordenar is a function', () => {
    expect(typeof data.ordenar).toBe('Ordenar is a function');
  });

  it('Debería retornar los campeones ordenados desde la A hasta la Z', () => {
    expect(example(ordenar.data(datos))).toBe(az);
  });
});

describe('data.ordenarZA', () => {
  
  it('ordenarZA is a function', () => {
    expect(typeof data.ordenarZA).toBe('ordenarZA is a function');
  });

  it('Debería retornar los campeones ordenados desde la Z hasta la A', () => {
    expect(example(ordenarZA.data(datos))).toBe(za);
  });
});
*/
describe('data.computeStats', () => {
  
  it('computeStats is a function', () => {
    expect(typeof data.computeStats).toBe('computeStats is a function');
  });

  it('Debería retornar el promedio de los luchadores en su ataque', () => {
    expect(example(computeStats.data(datos).toBe();
  });
});

});
