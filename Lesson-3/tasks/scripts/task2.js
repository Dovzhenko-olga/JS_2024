// Вводимо необхідні дані
let productPrice = parseFloat(prompt('Введіть ціну товару в грн', '1.12'))
let amountOfMoney = parseInt(prompt('Введіть кількість грошей у грн', '52.46'))
let lotteryPrice = 4
// Виводимо результат

if (amountOfMoney < productPrice)

  document.write(`
  <p>У Вас не вистачає грошей на цю покупку</p>
  `)
else {
  if ((amountOfMoney - productPrice) >= lotteryPrice)

    document.write(`
  <p>Можливо, Ви бажаєте купити лотерею за ${lotteryPrice} грн.?</p>
  `)

  else document.write(`
  <p>Будь ласка, Ваша покупка і решта ${(amountOfMoney - productPrice).toFixed(2)} грн.</p>
  `)
}