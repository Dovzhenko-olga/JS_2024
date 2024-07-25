// Вводимо необхідні дані
let birthYear = parseInt(prompt('Введіть рік народження', 'РРРР'))
const currentYear = 2024

// Знаходимо результат
let age = currentYear - birthYear

// Виводимо результат
document.write(`
    <h1>Результат обчислення:</h1>

  <table border="1" cellspacing="0">
  <tr>
    <td>Рік народження</td>
    <td>${birthYear}</td>
  </tr>
  <tr>
    <td>Поточний рік</td>
    <td>${currentYear}</td>
  </tr>
  <tr>
    <td>Кількість років</td>
    <td>${age}</td>
  </tr>
</table>
`)