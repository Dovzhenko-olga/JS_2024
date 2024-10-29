
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

// const availableDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

// const day = prompt("Day:")

// try {
//   if (!availableDays.includes(day) && !/^[0-6]$/.test(day))
//     throw new Error("Error! Day is not correct")
//   if (/^([06]|sat|sun)$/.test(day)) console.log("This is weekend")
//   else console.log("This is not weekend")
// } catch (error) {
//   alert(error.message)
// }