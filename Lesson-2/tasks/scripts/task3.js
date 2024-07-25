// Вводимо необхідні дані
let cost = parseFloat(prompt('Введіть вартість товару', '0.00'))
let amount = parseInt(prompt('Введіть кількість товару', '0'))
const VAT_PERCENTAGE = 5  // ПДВ 5 відсотків

// Знаходимо результат
let totalCost = cost * amount
let vat = totalCost * VAT_PERCENTAGE / 100

// Виводимо результат
document.write(`
    <h1>Для введених вартість = ${cost} грн. і кількість = ${amount} маємо:</h1>
  <ul>
    <li>Загальна вартість складає ${totalCost} грн.</li>
    <li>ПДВ(5% від загальної вартості) - ${vat} грн.</li>
  </ul>
`)