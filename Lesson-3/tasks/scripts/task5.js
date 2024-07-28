// Вводимо необхідні дані
let category = prompt('Введіть категорію водія латинськими літерами', 'A, B, C')


// Виводимо результат

if (category !== 'A' && category !== 'B' && category !== 'C')
  document.write(`
  <p>Некоректний формат даних.</p>
  `)
else {
  if (category === 'A')
    document.write(`
  <p>Маючи категорію ${category}, водій має право на керування мотоциклом.</p>
  `)
  else {
    if (category === 'B')
      document.write(`
  <p>Маючи категорію ${category}, водій має право на керування легковим автомобілем.</p>
  `)
    else
      document.write(`
  <p>Маючи категорію ${category}, водій має право на керування вантажним автомобілем.</p>
  `)
  }
}