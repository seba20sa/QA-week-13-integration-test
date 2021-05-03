import funMock from './basicOperations.mock'

import * as complexOperations from './complexOperations'

describe ('complexOperations - Mock tests', ()=>{
    describe ('checkEmnail', ()=>{
        it('test for checkEmnail - MOCK FUNCTION', () => {
            expect(
                complexOperations.checkEmail('seba20sa@gmail.com')
            ).toBe(
              'The email is valid'
            );      
        });
    });

    describe ('calculateArea', ()=>{
        it('calculateArea - MOCK FUNCTION - rectangle base of 7 height of 2 area is 14 ', () => {
            expect(
                complexOperations.calculateArea(7,2,'rectangle')
            ).toEqual(14);      
        });
    });


    describe ('sumGratherThan', ()=>{
        it('sumGratherThan - MOCK FUNCTION- sum returns 7', () => {
            expect(
                complexOperations.sumGratherThan(2,5,3)
            ).toBe('7 is grather than 3');      
        });

        it('sumGratherThan - MOCK FUNCTION- sum returns 7', () => {
            expect(
                complexOperations.sumGratherThan(2,5,15)
            ).toBe('7 is less than 15');      
        });
    });

    describe ('intersectionBetweenArrays', ()=>{
        it('intersectionBetweenArrays - MOCK FUNCTION ', () => {
            expect(
                complexOperations.intersectionBetweenArrays([1, 2, 3, 4, 5, 6], [0, 2, 3, 7])
            ).toStrictEqual([2,3]);      
        });
    });


    describe ('sortArrayOfObjectsByKey', ()=>{
        it('sortArrayOfObjectsByKey - MOCK FUNCTION ', () => {
            expect(
                complexOperations.sortArrayOfObjectsByKey(
                    [{cartItem: 'miller lite'}, {cartItem: 'buns'}, {cartItem: 'bread'}]
                )
            ).toStrictEqual([{cartItem: 'bread'}, {cartItem: 'miller lite'}, {cartItem: 'buns'}]);      
        });
    });

    describe ('numberOfOddAndEvenNumbers', ()=>{
        it('numberOfOddAndEvenNumbers - MOCK FUNCTION ', () => {
            expect(
                complexOperations.numberOfOddAndEvenNumbers(
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                )
            ).toEqual({ even: 5, odd: 5 });      
        });
    });

});