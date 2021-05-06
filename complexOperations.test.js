import 'jest';
import * as complexOperations from './complexOperations';


describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {


    it('test for undefined email', () => {
      expect(complexOperations.checkEmail()).toBe(
        'The email should be an string'
      );      
    });

    it('test for empty email', () => {
      expect(complexOperations.checkEmail('')).toBe(
        'The email should be an string'
      );      
    });

    it('test for wrongly formated email', () => {
      expect(complexOperations.checkEmail(42)).toBe(
        'The email should be an string'
      );      
    });

    it('test for wrongly formated email', () => {
      expect(complexOperations.checkEmail('seba20sa')).toBe(
        'The email is invalid'
      );      
    });

    it('test for wrongly formated email', () => {
      expect(complexOperations.checkEmail('@')).toBe(
        'The email is invalid'
      );      
    });

    it('test for wrongly formated email', () => {
      expect(complexOperations.checkEmail('@.com')).toBe(
        'The email is invalid'
      );      
    });

    it('test for wrongly formated email', () => {
      expect(complexOperations.checkEmail('seba20sa@.com')).toBe(
        'The email is invalid'
      );      
    });

    it('test for wrongly formated email', () => {
      expect(complexOperations.checkEmail('seba20sa@.com')).toBe(
        'The email is invalid'
      );      
    });
    it('test for wrongly formated email', () => {
      expect(complexOperations.checkEmail('seba20sa.com')).toBe(
        'The email is invalid'
      );      
    });

    it('test for correctly formated email', () => {
      expect(complexOperations.checkEmail('seba20sa@gmail.com')).toBe(
        'The email is valid'
      );      
    });
    
  });

  describe('calculateArea', () => {

    it('test for undefined figure', () => {
      expect(complexOperations.calculateArea()).toBe('undefined is not supported');

    });

    it('test for wrong figure', () => {
      expect(complexOperations.calculateArea('dog', 1, 3))
      .toBe('dog is not supported');
    });

    it('test for no measurements', () => {
      expect(complexOperations.calculateArea('circle'))
      .toBe('number1 and number2 should be numbers');
    });

    it('test for first wrong measurements', () => {
      expect(complexOperations.calculateArea('circle', 'dog', 3))
      .toBe('number1 and number2 should be numbers');
    });

    it('test for second wrong measurements', () => {
      expect(complexOperations.calculateArea('circle', 2, 'lizzard'))
      .toBe('number1 and number2 should be numbers');
    });

    it('test with correct measurements', () => {
      expect(complexOperations.calculateArea('square', 2, 4)).toEqual(8);
    });
    it('test with correct measurements', () => {
      expect(complexOperations.calculateArea('circle', 3)).toBeCloseTo(28.274);
    });
    it('test with correct measurements', () => {
      expect(complexOperations.calculateArea('triangle', 3, 1)).toEqual(1.5);
    });
    it('test with correct measurements', () => {
      expect(complexOperations.calculateArea('rectangle', 3, 2)).toEqual(6);
    });

    it('test with correct measurements', () => {
      expect(complexOperations.calculateArea('square', 3, 1)).not.toEqual(89);
    });

  });

  describe('sumGratherThan', () => {
    it('test with wrong param', () => {
      expect(complexOperations.sumGratherThan())
      .toBe('The params should be numbers');
    });

    it('test with wrong param', () => {
      expect(complexOperations.sumGratherThan('dog', 2, 5))
      .toBe('The params should be numbers');
    });

    it('test with wrong param', () => {
      expect(complexOperations.sumGratherThan(1, 'cat', 5))
      .toBe('The params should be numbers');
    });

    it('test with wrong param', () => {
      expect(complexOperations.sumGratherThan(1, 4, 'lizzard'))
      .toBe('The params should be numbers');
    });

    it('test with real params', () => {
      expect(complexOperations.sumGratherThan(1, 2, 7))
      .toBe('3 is less than 7');
    });

    it('test with real params', () => {
      expect(complexOperations.sumGratherThan(2, 8, 3))
      .toBe('10 is grather than 3');
    });

  });

  describe('intersectionBetweenArrays', () => {    
    it('intersectionBetweenArrays using wrong params', () => {
      expect(complexOperations.intersectionBetweenArrays([],2).toBe('The params should be arrays'));
    });
    it('intersectionBetweenArrays using wrong params', () => {
      expect(complexOperations.intersectionBetweenArrays('lizzard',[1, 3]).toBe('The params should be arrays'));
    });
    it('intersectionBetweenArrays using correct params', () => {
      expect(complexOperations.intersectionBetweenArrays([2,5],[1, 3]).toBe('There are not matching elements'));
    });
    it('intersectionBetweenArrays using correct params', () => {
      expect(complexOperations.intersectionBetweenArrays([1, 2, 7],[1, 2, 5]).toBe([1, 2]));
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('Test for sortArrayOfObjectsByKey with wrong params', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(undefined, 'pet').toBe('The param should be an array'));
    });

    it('Test for sortArrayOfObjectsByKey with wrong params', () => {
      expect(complexOperations.sortArrayOfObjectsByKey().toBe('The param should be an array'));
    });


    it('Test for sortArrayOfObjectsByKey with wrong params', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{name: 'Bob'}, {name: 'Dylan'}, {pet: 'Paul'}], 'name'
      ).toBe('Some elements in the array does not have the name property'));
    });

    it('Test for sortArrayOfObjectsByKey with wrong params', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{pet: 'lizzard'}, {pet: 'dog'}, {pet: 'bear'}], 'name'
      ).toBe('Some elements in the array does not have the name property'));
    });

    it('Test for sortArrayOfObjectsByKey with wrong params', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{pet: 'lizzard'}, {pet: 'dog'}, {pet: 'bear'}], ''
      ).toBe('The second param should be an string'));
    });

    it('Test for sortArrayOfObjectsByKey with correct params', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{name: 'Bob'}, {name: 'Dylan'}, {name: 'Paul'}], 'name'
      ).toEqual([
          {name: 'Bob'}, {name: 'Dylan'}, {name: 'Paul'}
        ])
      );
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {

    it('Test for numberOfOddAndEvenNumbers with wrong params', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers().toBe('The param should be an array'));      
    });

    it('Test for numberOfOddAndEvenNumbers with wrong params', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('lizzard').toBe('The param should be an array'));      
    });

    it('Test for numberOfOddAndEvenNumbers with wrong params', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 'lizzard']).toBe('The array should have only numbers'));      
    });

    it('Test for numberOfOddAndEvenNumbers with correct params', () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([1, 3, 5, 7]).toEqual({ even: 0, odd: 4 })
      );      
    });

    it('Test for numberOfOddAndEvenNumbers with correct params', () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([2, 4, 8]).toEqual({ even: 3, odd: 0 })
      );      
    });

    it('Test for numberOfOddAndEvenNumbers with correct params', () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([1, 2, 3, 5]).toEqual({ even: 1, odd: 3 })
      );      
    });

  });
  
});