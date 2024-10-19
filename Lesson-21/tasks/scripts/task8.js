function getWorkingDayStart(now, startHours, startMinutes) {
  const workingDayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHours, startMinutes)
  return workingDayStart
}

function getGreeting(now, startHours, startMinutes) {
  const difference = getWorkingDayStart(now, startHours, startMinutes) - now

  let result = ''
  if (difference <= 0) result = 'Вітаю, Ваш робочий день вже розпочався.'
  else if (now.getHours() === 7)
    result = `До початку робочого дня залишилось ${Math.floor(difference / 60000)} хв.`
  else result = 'Вітаю!'
  alert(result)
}

window.onload = () => {
  const now = new Date()
  // const morning = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7, 40)
  getGreeting(now, 8, 0)

}