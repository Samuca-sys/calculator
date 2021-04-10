import Big from 'big.js'

export default function operate(numberOne, numberTwo, operation) {
  const firstNumber = Big(numberOne || '0')
  const secondNumber = Big(
    numberTwo || (operation === '÷' || operation === 'x' ? '1' : '0')
  )//If division or multiplication, then mantain current value in case of null

  switch (operation){
    case '+':
      return firstNumber.plus(secondNumber).toString();
    case '-':
      return firstNumber.minus(secondNumber).toString();
    case 'x':
      return firstNumber.times(secondNumber).toString();
    case '÷':
      if(secondNumber === '0') {
        alert('Divided by zero error');
        return '0'
      } else {
        return firstNumber.div(secondNumber).toString();
      }
    case 'MOD':
      return firstNumber.mod(secondNumber).toString();
    default:
      throw Error(`Unknown operation '${operation}'`);
  }
}