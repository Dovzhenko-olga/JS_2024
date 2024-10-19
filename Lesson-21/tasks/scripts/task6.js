function getStartHours() {
  return parseInt(document.querySelector('.hours').value)
}
function getStartMinutes() {
  return parseInt(document.querySelector('.minutes').value)
}
function getProcessingStartTime(now, startHours, startMinutes) {
  const processingStartTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHours, startMinutes)
  return processingStartTime
}

function getResult() {
  const now = new Date()
  const difference = Math.floor((now - getProcessingStartTime(now, getStartHours(), getStartMinutes())) / 60000)
  let result = ''
  if (difference < 0) result = 'Процес ще не розпочато.'
  else if (difference >= 30) result = 'Процес вже завершено.'
  else result = 'Процес ще триває.'
  alert(result)
}

window.onload = () => {
  document.querySelector('button').onclick = getResult

}