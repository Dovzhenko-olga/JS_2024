
class IsVacationError extends Error {
  constructor() {
    super()
    this.message = 'Введений місяць є канікулами'
    this.name = 'IsVacationError'
  }
}

class IsNotNumberError extends Error {
  constructor() {
    super()
    this.message = 'Значення має бути числом'
    this.name = 'IsNotNumberError'
  }
}

class IsNotMonthError extends Error {
  constructor() {
    super()
    this.message = 'Введіть номер місяця від 1 до 12'
    this.name = 'IsNotMonthError'
  }
}
class IsNotMarkIntervalError extends Error {
  constructor() {
    super()
    this.message = 'Введіть оцінку від 1 до 100'
    this.name = 'IsNotMarkIntervalError'
  }
}

function getMonth() {
  return parseInt(document.querySelector('.month').value)
}
function getMark() {
  return parseInt(document.querySelector('.mark').value)
}

function validateMonth() {
  const monthValue = getMonth()
  try {
    if (isNaN(monthValue)) throw new IsNotNumberError()
    if (monthValue < 1 || monthValue > 12) throw new IsNotMonthError()
    if (monthValue === 1 || (monthValue > 6 && monthValue < 9)) throw new IsVacationError()
  } catch (err) {
    alert(err.message)
    document.querySelector('.month').value = ''
    return false
  }
  return true
}

function validateMark() {
  const markValue = getMark()
  try {
    if (isNaN(markValue)) throw new IsNotNumberError()
    if (markValue < 1 || markValue > 100) throw new IsNotMarkIntervalError()
  } catch (err) {
    alert(err.message)
    document.querySelector('.mark').value = ''
    return false
  }
  return true
}

function getResult() {
  let result = ''
  const monthValue = getMonth()
  const markValue = getMark()
  if (markValue > 50) result = 'У Вас хороша оцінка'
  else if (monthValue === 12 || monthValue === 6) result = 'Нажаль, недостатньо часу виправити оцінку'
  else if (markValue < 50) result = 'Ви ще встигнете виправити оцінку'
  document.querySelector('.result').innerText = result
}


window.onload = () => {

  const month = document.querySelector('.month')
  month.onchange = validateMonth
  const mark = document.querySelector('.mark')
  mark.onchange = validateMark
  document.querySelector('button').onclick = getResult

}