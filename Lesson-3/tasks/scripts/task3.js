// Вводимо необхідні дані
let minNumber = 1
let maxNumber = 5

// Знаходимо результат
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)


// Виводимо результат

let userNumber = parseInt(prompt('Введіть ціле число від 1 до 5'))

if (randomNumber === userNumber)

  document.write(`
  <p>Вітаємо, Ви вгадали з першого разу! Загадане число ${randomNumber}</p>
  `)
else {
  userNumber = parseInt(prompt('Спробуйте ще раз. Введіть ціле число від 1 до 5'))
  if (randomNumber === userNumber)

    document.write(`
  <p>Друга спроба була вдалою! Загадане число ${randomNumber}</p>
  `)

  else document.write(`
  <p>Нажаль, цього разу Вам не пощастило. Ви не вгадали число ${randomNumber}</p>
  `)
}