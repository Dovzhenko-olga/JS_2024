if (confirm('Почати тестування?')) {

  function getSum() {
    const firstNumber = parseFloat(document.getElementById('number1').value)
    const secondNumber = parseFloat(document.getElementById('number2').value)
    const sum = firstNumber + secondNumber
    document.getElementById('result').value = sum
  }
  function getDifference() {
    const firstNumber = parseFloat(document.getElementById('number1').value)
    const secondNumber = parseFloat(document.getElementById('number2').value)
    const diff = firstNumber - secondNumber
    document.getElementById('result').value = diff
  }
  function getProduct() {
    const firstNumber = parseFloat(document.getElementById('number1').value)
    const secondNumber = parseFloat(document.getElementById('number2').value)
    const prod = firstNumber * secondNumber
    document.getElementById('result').value = prod
  }
  function getDivide() {
    const firstNumber = parseFloat(document.getElementById('number1').value)
    const secondNumber = parseFloat(document.getElementById('number2').value)
    const divide = firstNumber / secondNumber
    document.getElementById('result').value = divide.toFixed(2)
  }

  window.onload = function () {
    document.getElementById('sum').onclick = getSum
    document.getElementById('diff').onclick = getDifference
    document.getElementById('prod').onclick = getProduct
    document.getElementById('divide').onclick = getDivide
  }
}