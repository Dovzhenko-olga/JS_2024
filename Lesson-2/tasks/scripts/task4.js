// Вводимо необхідні дані
let length = parseInt(prompt('Введіть довжину у см', '0'))

// Знаходимо результат
let lengthInMeters = length / 100
let lengthInKilometers = lengthInMeters / 1000

// Виводимо результат
document.write(`
    <h1>Для введеної довжини ${length} см. маємо:</h1>
  <ul>
    <li> ${lengthInMeters} м.</li>
    <li> ${lengthInKilometers} км.</li>
  </ul>
`)