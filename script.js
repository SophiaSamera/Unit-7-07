document.getElementById('button').addEventListener('click', comparison)
let number1 = 0
let number2 = 0
let total = 0

function comparison () {
  number1 = document.getElementById('input').value
  number2 = document.getElementById('input1').value
  number1 = parseInt(number1)
  number2 = parseInt(number2)

  for (let i=0; i<number1; i++) {
    total = total + number2
    }

alert (total)
total = 0
}