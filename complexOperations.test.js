import 'jest';
import * as complexOperations from './complexOperations';
// import * as basicOperations from './basicOperations';

describe('complexOperation - Unit Tests', () => {
  decsribe('checkEmail', () => {


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
    
  });

  decsribe('calculateArea', () => {

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

  decsribe('sumGratherThan', () => {
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

  decsribe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {

    });
  });

  decsribe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {

    });
  });

  decsribe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {
      
    });
  });
});