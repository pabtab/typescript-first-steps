const button = document.querySelector('button')
const input1 = document.getElementById('a');
const input2 = document.getElementById('b');


function add(num1, num2) {
  return num1 + num2
}

button.addEventListener('click', function() {
  console.log(add(input1.value, input2.value))
})