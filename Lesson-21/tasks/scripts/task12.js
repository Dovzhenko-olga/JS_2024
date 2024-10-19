function getStartMaternityLeave() {
  return document.querySelector('.myInput').value
}
function transformDate() {
  const [day, month, year] = getStartMaternityLeave().split('.')
  const startDate = new Date(year, month - 1, day)
  return startDate
}
function getEndMaternityLeave() {
  const startDate = transformDate()
  const endDate = new Date(startDate.setDate(startDate.getDate() + 200))
  return endDate
}
function getResult() {
  const now = new Date()
  const startDate = transformDate()
  const endDate = getEndMaternityLeave()
  let result = ''
  if (now < startDate) result = 'Відпустка ще не почалась.'
  else if (now > endDate) result = 'Відпустка вже закінчилася.'
  else result = 'Ви зараз у відпустці.'
  alert(result)
}

window.onload = () => {

  document.querySelector('button').onclick = getResult

}