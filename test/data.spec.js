global.window=global;
global.assert=require('chai').assert;
require('../src/lol.js');
require('../src/data.js');


const dataTest = window.LOL.lol;

describe('lol', () => {
    it('Debería ser un objeto', () => {
        assert.equal(typeof window.data, 'object');
      });

    describe('data.filterData',()=>{
        it('Debería ser una funcion',()=>{
            assert.equal(typeof window.data.filterData,'function');
        });
        it('Debería retornar el primer campeon de la categoría Fighter',()=>{
            let championFighter=window.data.filterData(dataTest,'Fighter')[0].name;
            assert.equal(championFighter,'Aatrox');
        });
        it('Debería retornar el decimo campeon de la categoría Tank ',()=>{
            let championTank=window.data.filterData(dataTest,'Tank')[9].name;
            assert.equal(championTank,'Galio');                        
        });
    });
    
    describe('data.sortData',()=>{
        it('Debería ser una funcion',()=>{
            assert.equal(typeof window.data.sortData,'function');
        });
        it('Debería retornar ',()=>{

        });
        it('Debería retornar ',()=>{
            
        });
    });
    
    /*
    describe('data.compiteStats',()=>{
        it('Debería ser una funcion',()=>{
            assert.equal(typeof window.data.computeStats,'function');
        });
        it('Debería retornar ',()=>{

        });
        it('Debería retornar ',()=>{
            
        });
    });



    }
*/
      
/*
describe("Testear isMail", () => {
    it("Debería, si no tiene arroba, retornar false", () =>{
        const elResultado = isEmail("asgfscgas.com");
        assert.equal(elResultado,false);
    }) 
})
*/
