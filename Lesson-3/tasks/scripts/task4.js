// Вводимо необхідні дані
let age = parseInt(prompt('Введіть вік людини', '10'))
let maxChildAge = 6
let maxSchoolAge = 16
let maxStudentAge = 25
let maxAdultAge = 65


// Виводимо результат

if (age <= maxChildAge)

  document.write(`
  <p>У ${age} років - це маленька дитина.</p>
  `)
else {
  if (age <= maxSchoolAge)
    document.write(`
  <p>У ${age} років - це школяр.</p>
  `)
  else {
    if (age <= maxSchoolAge)
      document.write(`
  <p>У ${age} років - це школяр.</p>
  `)
    else {
      if (age <= maxStudentAge)
        document.write(`
  <p>У ${age} років - це студент.</p>
  `)
      else {
        if (age < maxAdultAge)
          document.write(`
  <p>У ${age} років - це працівник.</p>
  `)
        else document.write(`
  <p>У ${age} років - це заслужений пенсіонер.</p>
  `)
      }
    }
  }
}