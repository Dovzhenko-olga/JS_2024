// Вводимо необхідні дані
let a = parseFloat(prompt('Введіть а', '0.00'))
let b = parseFloat(prompt('Введіть b', '0.00'))

// Знаходимо результат
let sum = a + b
let product = a * b
let part = a / b

// Виводимо результат
document.write(`
    <h1>Для введених a=${a.toFixed(2)}, b=${b.toFixed(2)} маємо:</h1>

  <table border="1" cellspacing="0">
  <tr>
    <th>Сума</th>
    <th>Добуток</th>
    <th>Частка</th>
  </tr>
  <tr>
    <td>${sum.toFixed(2)}</td>
    <td>${product.toFixed(2)}</td>
    <td>${part.toFixed(2)}</td>
  </tr>
  
</table>
`)