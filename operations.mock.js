import 'jest';
let isNumber = jest.fn().mockReturnValue(true);
let isArray = jest.fn().mockReturnValue(true);
let isString = jest.fn().mockReturnValue(true);
let validateEmail = jest.fn().mockReturnValue(true);
let sum = jest.fn().mockReturnValue(7);
let multip = jest.fn().mockReturnValue(14);
let division = jest.fn().mockReturnValue(2);
let exponent = jest.fn().mockReturnValue(2);
let isSupportedFigure = jest.fn().mockReturnValue(true);
let arrayElementsAreObjectWithKey = jest.fn().mockReturnValue(true);
let arrayIntersection = jest.fn().mockReturnValue([2]);
let sortArrayByKey = jest.fn().mockReturnValue(
    [{cartItem: 'bread'}, {cartItem: 'cookies'}, {cartItem: 'miller lite'}],
    'cartItem'
);
let getEvenNumbersFromArray = jest.fn().mockReturnValue([0, 2, 4, 6, 8]);
let getOddNumbersFromArray = jest.fn().mockReturnValue([1, 3, 5, 7, 9]);

const funmock = jest.mock('./basicOperations', () => {
    return {
        sum,
        isNumber,
        isNumber,
        isArray,
        isString,
        validateEmail,
        multip,
        division,
        exponent,
        isSupportedFigure,
        arrayElementsAreObjectWithKey,
        arrayIntersection,
        sortArrayByKey,
        getEvenNumbersFromArray,
        getOddNumbersFromArray,
    };
});

export default funmock;