// Вводимо необхідні дані
let firstName = prompt('Введіть ім\'я першої дитини', 'Катруся')
let numberOfCandies1 = parseInt(prompt(`Введіть кількість цукерок у ${firstName}`, '2'))
let secondName = prompt('Введіть ім\'я другої дитини', 'Петрик')
let numberOfCandies2 = parseInt(prompt(`Введіть кількість цукерок у ${secondName}`, '2'))

// Виводимо результат

if (numberOfCandies1 > numberOfCandies2)

  document.write(`
  <p>У ${firstName} цукерок більше</p>
  `)
else {
  if (numberOfCandies1 < numberOfCandies2)

    document.write(`
  <p>У ${secondName} цукерок більше</p>
  `)

  else document.write(`
  <p>У ${firstName} та ${secondName} однакова кількість цукерок</p>
  `)
}