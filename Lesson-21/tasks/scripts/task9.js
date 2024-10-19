window.onload = () => {
  const now = new Date()
  const londonTime = now.toLocaleTimeString("ua-UK", { timeZone: 'Europe/London' })
  document.getElementById('london').innerText += ` ${londonTime}`
  const parisTime = now.toLocaleTimeString("ua-UK", { timeZone: 'Europe/Paris' })
  document.getElementById('paris').innerText += ` ${parisTime}`
  const sidneyTime = now.toLocaleTimeString("ua-UK", { timeZone: 'Australia/Sydney' })
  document.getElementById('sidney').innerText += ` ${sidneyTime}`

}