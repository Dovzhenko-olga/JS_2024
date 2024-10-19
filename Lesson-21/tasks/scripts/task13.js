function getProductionDay() {
  return document.querySelector('.date').value
}
function getExpirationTerm() {
  return parseInt(document.querySelector('.days').value)
}

function transformDate() {
  const [year, month, day] = getProductionDay().split(',')
  const productionDay = new Date(year, month - 1, day)
  return productionDay
}

function getEndExpirationTerm() {
  const startDate = transformDate()
  const endDate = new Date(startDate.setDate(startDate.getDate() + getExpirationTerm()))
  return endDate
}
function getResult() {
  const now = new Date()
  const endDate = getEndExpirationTerm()
  let result = ''
  if (now > endDate) result = 'Йогурт вже непридатний.'
  else result = 'Смачного.'
  alert(result)
}

window.onload = () => {

  document.querySelector('button').onclick = getResult

}