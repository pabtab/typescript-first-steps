/* const button = document.querySelector('button')
const input1 = document.getElementById('a')! as HTMLInputElement;
const input2 = document.getElementById('b')! as HTMLInputElement;


function add(num1: number, num2: number) {
  return num1 + num2
}

button.addEventListener('click', function() {
  console.log(add(+input1.value, +input2.value))
}) */

function add(n1: number, n2: number) {
  return n1 + n2
}

const number1 = 5;
const number2 = 2.8

const result = add(number1, number2)

console.log(result)