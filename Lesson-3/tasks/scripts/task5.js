// Вводимо необхідні дані
const category = prompt('Введіть категорію водія латинськими літерами', 'A, B, C')
// Знаходимо результат
let typeOfTransport
switch (category.toLocaleUpperCase()) {
  case 'A': typeOfTransport = 'мотоциклом'
    break;
  case 'B': typeOfTransport = 'легковим автомобілем'
    break;
  case 'C': typeOfTransport = 'вантажним автомобілем'
    break;
  default: typeOfTransport = 'триколісним велосипедом. Введіть коректні дані'
    break;
}

// Виводимо результат

document.write(`
  <p>Маючи категорію ${category.toLocaleUpperCase()}, водій має право на керування ${typeOfTransport}.</p>
  `)

// if (category !== 'A' && category !== 'B' && category !== 'C')
//   document.write(`
//   <p>Некоректний формат даних.</p>
//   `)
// else {
//   if (category === 'A')
//     document.write(`
//   <p>Маючи категорію ${category}, водій має право на керування мотоциклом.</p>
//   `)
//   else {
//     if (category === 'B')
//       document.write(`
//   <p>Маючи категорію ${category}, водій має право на керування легковим автомобілем.</p>
//   `)
//     else
//       document.write(`
//   <p>Маючи категорію ${category}, водій має право на керування вантажним автомобілем.</p>
//   `)
//   }
// }