if (confirm('Почати тестування?')) {

  function getRundomNumber(min = 1, max = 10) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function getCheckSum() {
    const num1 = getRundomNumber()
    const num2 = getRundomNumber()
    const userAnswer = parseInt(prompt(`${num1} + ${num2} дорівнює:`))
    if (userAnswer === num1 + num2) alert('Вірно!')
    else alert('Ви порахували неправильно((')
  }

  let timeoutId = setInterval(getCheckSum, 10000)

}