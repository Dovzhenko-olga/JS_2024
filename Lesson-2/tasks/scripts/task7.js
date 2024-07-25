// Вводимо необхідні дані
const minMonth = 1
const maxMonth = 12
const minDay = 0
const maxDay = 6

// Знаходимо результат
let randomMonth = Math.floor(Math.random() * (maxMonth - minMonth + 1) + minMonth)
let randomDay = Math.floor(Math.random() * (maxDay - minDay + 1) + minDay)
let sumRandomData = randomMonth + randomDay

// Виводимо результат
document.write(`
    <h1>Результати обчислень:</h1>
  <ul>
    <li> Випадковий номер місяця ${randomMonth} </li>
    <li> Випадковий номер дня ${randomDay} </li>
    <li> Сума випадкових даних ${sumRandomData} </li>
  </ul>
`)