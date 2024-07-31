// Вводимо необхідні дані
let dayOfWeekNumber = parseInt(prompt('Введіть номер дня тижня від 1 до 7', '3'))

// Знаходимо результат
let dayOfWeek
switch (dayOfWeekNumber) {
  case 1: dayOfWeek = 'понеділок'
    break;
  case 2: dayOfWeek = 'вівторок'
    break;
  case 3: dayOfWeek = 'середа'
    break;
  case 4: dayOfWeek = 'четвер'
    break;
  case 5: dayOfWeek = 'п\'ятниця'
    break;
  case 6: dayOfWeek = 'субота'
    break;
  case 7: dayOfWeek = 'неділя'
    break;
  default: dayOfWeek = 'невідомий день. Введіть корректне значення'
    break;
}

// Виводимо результат

document.write(`
  <p>Сьогодні ${dayOfWeek}.</p>
  `)

// if (dayOfWeekNumber <= 0 || dayOfWeekNumber > 7)
//   document.write(`
//   <p>Введіть корректне значення.</p>
//   `)
// else
//   if (dayOfWeekNumber === 1)
//     document.write(`
//   <p>Сьогодні понеділок.</p>
//   `)
//   else
//     if (dayOfWeekNumber === 2)
//       document.write(`
//   <p>Сьогодні вівторок.</p>
//   `)
//     else
//       if (dayOfWeekNumber === 3)
//         document.write(`
//   <p>Сьогодні середа.</p>
//   `)
//       else
//         if (dayOfWeekNumber === 4)
//           document.write(`
//   <p>Сьогодні четвер.</p>
//   `)
//         else
//           if (dayOfWeekNumber === 5)
//             document.write(`
//   <p>Сьогодні п\'ятниця.</p>
//   `)
//           else
//             if (dayOfWeekNumber === 6)
//               document.write(`
//   <p>Сьогодні субота.</p>
//   `)
//             else
//               document.write(`
//   <p>Сьогодні неділя.</p>
//   `)