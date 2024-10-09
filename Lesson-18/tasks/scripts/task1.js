window.onload = function () {
  function getResalt(operation) {
    const firstNumber = parseFloat(document.getElementById('number1').value)
    const secondNumber = parseFloat(document.getElementById('number2').value)

    let result = operation(firstNumber, secondNumber)

    document.getElementById('result').value = result
  }

  document.getElementById('sum').onclick = getResalt.bind(null, (num1, num2) => num1 + num2)
  document.getElementById('diff').onclick = getResalt.bind(null, (num1, num2) => num1 - num2)
  document.getElementById('prod').onclick = getResalt.bind(null, (num1, num2) => num1 * num2)
  document.getElementById('divide').onclick = getResalt.bind(null, (num1, num2) => num1 / num2)

  // document.getElementById('sum').onclick = () => getResalt((num1, num2) => num1 + num2)
  // document.getElementById('diff').onclick = () => getResalt((num1, num2) => num1 - num2)
  // document.getElementById('prod').onclick = () => getResalt((num1, num2) => num1 * num2)
  // document.getElementById('divide').onclick = () => getResalt((num1, num2) => num1 / num2)


  // function getResalt(e) {
  //   const firstNumber = parseFloat(document.getElementById('number1').value)
  //   const secondNumber = parseFloat(document.getElementById('number2').value)
  //   let result

  //   switch (e.target.id) {
  //     case 'sum': result = firstNumber + secondNumber
  //       break;
  //     case 'diff': result = firstNumber - secondNumber
  //       break;
  //     case 'prod': result = firstNumber * secondNumber
  //       break;
  //     case 'divide': result = firstNumber / secondNumber
  //       break;
  //   }
  //   document.getElementById('result').value = result
  // }
  // document.getElementById('buttons').onclick = getResalt


  // function getSum() {
  //   const firstNumber = parseFloat(document.getElementById('number1').value)
  //   const secondNumber = parseFloat(document.getElementById('number2').value)
  //   const sum = firstNumber + secondNumber
  //   document.getElementById('result').value = sum
  // }
  // function getDifference() {
  //   const firstNumber = parseFloat(document.getElementById('number1').value)
  //   const secondNumber = parseFloat(document.getElementById('number2').value)
  //   const diff = firstNumber - secondNumber
  //   document.getElementById('result').value = diff
  // }
  // function getProduct() {
  //   const firstNumber = parseFloat(document.getElementById('number1').value)
  //   const secondNumber = parseFloat(document.getElementById('number2').value)
  //   const prod = firstNumber * secondNumber
  //   document.getElementById('result').value = prod
  // }
  // function getDivide() {
  //   const firstNumber = parseFloat(document.getElementById('number1').value)
  //   const secondNumber = parseFloat(document.getElementById('number2').value)
  //   const divide = firstNumber / secondNumber
  //   document.getElementById('result').value = divide.toFixed(2)
  // }

  // document.getElementById('sum').onclick = getSum
  // document.getElementById('diff').onclick = getDifference
  // document.getElementById('prod').onclick = getProduct
  // document.getElementById('divide').onclick = getDivide
}