/* const button = document.querySelector('button')
const input1 = document.getElementById('a')! as HTMLInputElement;
const input2 = document.getElementById('b')! as HTMLInputElement;


function add(num1: number, num2: number) {
  return num1 + num2
}

button.addEventListener('click', function() {
  console.log(add(+input1.value, +input2.value))
}) */

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result)
  } else {  
    return result
  }
}

let number1: number
number1 = 5;
const number2 = 2.8;
const printResult = true
const resultPhrase = 'Result is: '

add(number1, number2, printResult, resultPhrase)