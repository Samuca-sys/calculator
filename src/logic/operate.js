import Big from 'big.js'

export default function operate(numberOne, numberTwo, operation) {
  const firstNumber = Big(numberOne)
  const secondNumber = Big(numberTwo)

  switch (operation){
    case '+':
      return firstNumber.plus(secondNumber).toString();
    case '-':
      return firstNumber.minus(secondNumber).toString();
    case '*':
      return firstNumber.times(secondNumber).toString();
    case '÷':
      return firstNumber.div(secondNumber).toString();
    case '%':
      return firstNumber.mod(secondNumber).toString();
    default:
      throw Error(`Unknown operation '${operation}'`);
  }
}