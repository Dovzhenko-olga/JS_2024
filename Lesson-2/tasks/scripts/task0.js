// Вводимо необхідні дані
let a = parseInt(prompt('Введіть а', '0'))
let b = parseInt(prompt('Введіть b', '0'))
let c = parseInt(prompt('Введіть c', '0'))

// Знаходимо результат
let S1 = a + 12 + b
let S2 = Math.sqrt((a + b) / 2 * a)
let S3 = Math.cbrt((a + b) * c)
let S4 = Math.sin(a / -b)

// Виводимо результат
document.write(`
  <h1>Для введених a=${a}, b=${b}, c=${c} маємо:</h1>
  <ol>
    <li>S1=${S1.toFixed(2)}</li>
    <li>S2=${S2.toFixed(2)}</li>
    <li>S3=${S3.toFixed(2)}</li>
    <li>S4=${S4.toFixed(2)}</li>
  </ol>
  `)