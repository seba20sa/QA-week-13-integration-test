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
    it('first test for calculateArea', () => {

    });
  });

  decsribe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {

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