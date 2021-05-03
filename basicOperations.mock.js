import 'jest'

let isNumber = jest.fn().mockReturnValue(-3)
let isArray = jest.fn().mockReturnValue([0, 2, -1, 5])
let isString = jest.fn().mockReturnValue('LoreN Ipsun')
let validateEmail = jest.fn().mockReturnValue('seba20sa@gmail.com')
let sum = jest.fn().mockReturnValue(7)
let multip  = jest.fn().mockReturnValue(14)
let division = jest.fn().mockReturnValue(1)
let exponent = jest.fn().mockReturnValue(1000)
let isSupportedFigure = jest.fn().mockReturnValue('rectangle')
let arrayElementsAreObjectWithKey = jest.fn().mockReturnValue(
        [{cartItem: 'bread'}, {cartItem: 'miller lite'}, {cartItem: 'buns'}]
    )
let arrayIntersection = jest.fn().mockReturnValue([2,3])
let sortArrayByKey = jest.fn().mockReturnValue(
    [{cartItem: 'bread'}, {cartItem: 'cookies'}, {cartItem: 'miller lite'}],
    'cartItem'
)
let getEvenNumbersFromArray = jest.fn().mockReturnValue([0, 2, 4, 6, 8])
let getOddNumbersFromArray = jest.fn().mockReturnValue([1, 3, 5, 7, 9])

const funMock = jest.mock('./basicOperations', () => {
    return {
      sum,
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
      getOddNumbersFromArray
    }
  })

  export default funMock