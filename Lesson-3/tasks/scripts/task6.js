// Вводимо необхідні дані
let dayOfWeekNumber = parseInt(prompt('Введіть номер дня тижня від 1 до 7', '3'))


// Виводимо результат

if (dayOfWeekNumber === 1)
  document.write(`
  <p>Сьогодні понеділок.</p>
  `)
else
  if (dayOfWeekNumber === 2)
    document.write(`
  <p>Сьогодні вівторок.</p>
  `)
  else
    if (dayOfWeekNumber === 3)
      document.write(`
  <p>Сьогодні середа.</p>
  `)
    else
      if (dayOfWeekNumber === 4)
        document.write(`
  <p>Сьогодні четвер.</p>
  `)
      else
        if (dayOfWeekNumber === 5)
          document.write(`
  <p>Сьогодні п\'ятниця.</p>
  `)
        else
          if (dayOfWeekNumber === 6)
            document.write(`
  <p>Сьогодні субота.</p>
  `)
          else
            document.write(`
  <p>Сьогодні неділя.</p>
  `)