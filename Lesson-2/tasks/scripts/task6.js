// Вводимо необхідні дані
let priceProduct1 = parseFloat(prompt('Введіть вартість першого товару', '0.00'))
let amountProduct1 = parseInt(prompt('Введіть кількість першого товару', '0'))
let priceProduct2 = parseFloat(prompt('Введіть вартість другого товару', '0.00'))
let amountProduct2 = parseInt(prompt('Введіть кількість другого товару', '0'))
let priceProduct3 = parseFloat(prompt('Введіть вартість третього товару', '0.00'))
let amountProduct3 = parseInt(prompt('Введіть кількість третього товару', '0'))

// Знаходимо результат
let costProduct1 = priceProduct1 * amountProduct1
let costProduct2 = priceProduct2 * amountProduct2
let costProduct3 = priceProduct3 * amountProduct3
let totalCost = costProduct1 + costProduct2 + costProduct3

// Виводимо результат
document.write(`
    <h1>Фіскальний чек</h1>

  <table border="1" cellspacing="0">
  <tr>
    <td>Товар №1 </td>
    <td>${priceProduct1} x ${amountProduct1} шт = ${costProduct1.toFixed(2)} </td>
  </tr>
  <tr>
    <td>Товар №2 </td>
    <td>${priceProduct2} x ${amountProduct2} шт = ${costProduct2.toFixed(2)} </td>
  </tr>
  <tr>
    <td>Товар №3 </td>
    <td>${priceProduct3} x ${amountProduct3} шт = ${costProduct3.toFixed(2)} </td>
  </tr>
  <tr>
    <td>Всього до сплати: </td>
    <td>${totalCost} грн. </td>
  </tr>
</table>
`)