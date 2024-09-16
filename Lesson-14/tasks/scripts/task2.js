if (confirm('Почати тестування?')) {

  const data = {
    day: 15,
    month: 7,
    year: 2015
  }

  function getYear({ month, year }, monthNumber) {
    return year + Math.floor((month + monthNumber - 1) / 12)
  }

  const monthNumber = parseInt(prompt('Введіть кількість місяців для підрахунку', '13'))
  const currentYear = getYear(data, monthNumber)

  document.write(`<div>Через ${monthNumber} місяців буде місяць ${currentYear} рік.</div>`)
}