import 'jest';
import * as complexOperations from './complexOperations';
// import * as basicOperations from './basicOperations';

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
      expect(complexOperations.calculateArea()).tobe('undefined is not supported');

    });

    it('test for wrong figure', () => {
      expect(complexOperations.calculateArea('dog', 1, 3))
      .tobe('dog is not supported');
    });

    it('test for no measurements', () => {
      expect(complexOperations.calculateArea('circle'))
      .tobe('number1 and number2 should be numbers');
    });

    it('test for first wrong measurements', () => {
      expect(complexOperations.calculateArea('circle', 'dog', 3))
      .tobe('number1 and number2 should be numbers');
    });

    it('test for second wrong measurements', () => {
      expect(complexOperations.calculateArea('circle', 2, 'lizzard'))
      .tobe('number1 and number2 should be numbers');
    });

    it('test with correct measurements', () => {
      expect(complexOperations.calculateArea('square', 2, 5)).toEqual(10);
    });
    it('test with correct measurements', () => {
      expect(complexOperations.calculateArea('circle', 3, 1)).toEqual(3);
    });
    it('test with correct measurements', () => {
      expect(complexOperations.calculateArea('triangle', 3, 1)).toEqual(3);
    });
    it('test with correct measurements', () => {
      expect(complexOperations.calculateArea('rectangle', 3, 1)).toEqual(3);
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
      expect(complexOperations.intersectionBetweenArrays()
      .tobe('The params should be arrays'));
    });
    it('intersectionBetweenArrays using wrong params', () => {
      expect(complexOperations.intersectionBetweenArrays([],2)
      .tobe('The params should be arrays'));
    });
    it('intersectionBetweenArrays using wrong params', () => {
      expect(complexOperations.intersectionBetweenArrays('lizzard',[1, 3])
      .tobe('The params should be arrays'));
    });
    it('intersectionBetweenArrays using correct params', () => {
      expect(complexOperations.intersectionBetweenArrays([2,5],[1, 3])
      .tobe('There are not matching elements'));
    });
    it('intersectionBetweenArrays using correct params', () => {
      expect(complexOperations.intersectionBetweenArrays([1, 2, 7],[1, 2, 5])
      .tobe([1, 2]));
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('Test for sortArrayOfObjectsByKey with wrong params', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(undefined, 'pet')
      .tobe('The param should be an array'));
    });

    it('Test for sortArrayOfObjectsByKey with wrong params', () => {
      expect(complexOperations.sortArrayOfObjectsByKey()
      .tobe('The param should be an array'));
    });


    it('Test for sortArrayOfObjectsByKey with wrong params', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{name: 'Bob'}, {name: 'Dylan'}, {pet: 'Paul'}], 'name'
      )
      .tobe('Some elements in the array does not have the name property'));
    });

    it('Test for sortArrayOfObjectsByKey with wrong params', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{pet: 'lizzard'}, {pet: 'dog'}, {pet: 'bear'}], 'name'
      )
      .tobe('Some elements in the array does not have the name property'));
    });

    it('Test for sortArrayOfObjectsByKey with wrong params', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{pet: 'lizzard'}, {pet: 'dog'}, {pet: 'bear'}], ''
      )
      .tobe('The second param should be an string'));
    });

    it('Test for sortArrayOfObjectsByKey with correct params', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(
        [{name: 'Bob'}, {name: 'Dylan'}, {name: 'Paul'}], 'name'
      ).toStrictEqual([
          {name: 'Bob'}, {name: 'Dylan'}, {name: 'Paul'}
        ])
      );
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {

    it('Test for numberOfOddAndEvenNumbers with wrong params', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers()
      .tobe('The param should be an array'));      
    });

    it('Test for numberOfOddAndEvenNumbers with wrong params', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('lizzard')
      .tobe('The param should be an array'));      
    });

    it('Test for numberOfOddAndEvenNumbers with wrong params', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1, 'lizzard'])
      .tobe('The array should have only numbers'));      
    });

    it('Test for numberOfOddAndEvenNumbers with correct params', () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([1, 3, 5, 7])
        .toStrictEqual({ even: 0, odd: 4 })
      );      
    });

    it('Test for numberOfOddAndEvenNumbers with correct params', () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([2, 4, 8])
        .toStrictEqual({ even: 3, odd: 0 })
      );      
    });

    it('Test for numberOfOddAndEvenNumbers with correct params', () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([1, 2, 3, 5])
        .toStrictEqual({ even: 1, odd: 3 })
      );      
    });

  });
  
});