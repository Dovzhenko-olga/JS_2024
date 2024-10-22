
function filtrString() {
  const day = document.querySelector('.myInput').value

  let result = ''
  if (/^([1-5]|mon|tue|wed|thu|fri)$/.test(day.toLowerCase())) result = 'Сьогодні робочий день.'
  else if (/^([06]|sun|sat)$/.test(day.toLowerCase())) result = 'Сьогодні вихідний.'
  else result = 'Введіть коректне значення.'

  document.querySelector('.result').innerText = result
}


window.onload = () => {
  document.querySelector('.myInput').onchange = filtrString
}