// Вводимо необхідні дані
let monthNumber = parseInt(prompt('Введіть номер місяця від 1 до 12', '3'))


// Виводимо результат

if (monthNumber >= 3 && monthNumber <= 5)
  document.write(`
  <p>Місяць №${monthNumber} весняний.</p>
  `)
else
  if (monthNumber >= 6 && monthNumber <= 8)
    document.write(`
  <p>Місяць №${monthNumber} літній.</p>
  `)
  else
    if (monthNumber >= 9 && monthNumber <= 11)
      document.write(`
  <p>Місяць №${monthNumber} осінній.</p>
  `)
    else
      document.write(`
  <p>Місяць №${monthNumber} зимній.</p>
  `)