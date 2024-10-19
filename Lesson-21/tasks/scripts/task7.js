function getWorkingDayEnd(now, endHours, endMinutes) {
  const workingDayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endHours, endMinutes)
  return workingDayEnd
}

function getResult(now, endHours, endMinutes) {
  const difference = getWorkingDayEnd(now, endHours, endMinutes) - now

  let result = ''
  if (difference <= 0) result = 'Робочий день вже закінчився.'
  else result = `До кінця робочого дня залишилось ${Math.floor(difference / 3600000)} год ${Math.ceil((difference / 60000)) % 60} хв.`
  alert(result)
}

window.onload = () => {
  const now = new Date()
  getResult(now, 17, 0)

}