function getUserDate() {
  return document.querySelector('.date').value
}
function getUserTime() {
  return document.querySelector('.time').value
}
function transformDate() {
  const [day, month, year] = getUserDate().split('.')
  const [hours, minutes] = getUserTime().split(':')
  const userDate = new Date(year, month - 1, day, hours, minutes)
  return userDate
}
function getStartCurrentWeek(data) {
  const currentDayOfWeek = data.getDay(data)
  const startCurrentWeek = new Date(data.getFullYear(), data.getMonth(), data.getDate() - (currentDayOfWeek - 1), 0, 0)
  return startCurrentWeek
}
function getEndCurrentWeek(data) {
  const start = getStartCurrentWeek(data)
  const endCurrentWeek = new Date(data.getFullYear(), data.getMonth(), start.getDate() + 6, 23, 59)
  return endCurrentWeek
}
function showResult(result) {
  document.querySelector('.result').innerHTML = result
}

function getResult() {
  const now = new Date()
  const startOfWeek = getStartCurrentWeek(now)
  const endOfWeek = getEndCurrentWeek(now)
  const userDate = transformDate()
  let result = ''
  if (startOfWeek <= userDate && userDate <= endOfWeek) result = 'Дата в межах поточного тижня.'
  else result = 'Дата поза межами поточного тижня.'
  showResult(result)
}

window.onload = () => {

  document.querySelector('button').onclick = getResult

}