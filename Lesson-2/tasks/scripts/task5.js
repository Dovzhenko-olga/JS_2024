// Вводимо необхідні дані
let numberOfSeconds = parseInt(prompt('Введіть кількість секунд з початку доби', '0000'))
const secInHour = 3600
const secInMinute = 60

// Знаходимо результат
let hours = numberOfSeconds / secInHour
let minutes = numberOfSeconds % secInHour / secInMinute
let seconds = numberOfSeconds % secInMinute

// Виводимо результат
document.write(`
    <h1>Для введеного часу ${numberOfSeconds} сек. маємо:</h1>
  <ul>
    <li> ${Math.floor(hours)} годин </li>
    <li> ${Math.floor(minutes)} хвилин </li>
    <li> ${(seconds)} секунд </li>
  </ul>
`)