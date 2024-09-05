if (confirm('Почати тестування?')) {

  function getRundomNumber(min = 1, max = 10000) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function getArray(elementsNumber) {
    const arr = []

    for (let i = 0; i < elementsNumber; i++) {
      const random = getRundomNumber()
      arr.push(random)
    }
    return arr
  }

  const elementsNumber = parseInt(prompt(`Введіть кількість елементів масиву`, '10'))
  const arr = getArray(elementsNumber)
  document.write(`<div>Початковий масив: ${arr}.</div>`)

  const isPriceLessThan1000 = arr.some(el => el < 1000)
  let res = ''
  if (isPriceLessThan1000) res = 'не усі'
  else res = 'усі'
  // if (arr.every(el => el > 1000)) res = 'усі'
  // else res = 'не усі'
  document.write(`<div>В масиві ${res} ціни більше за 1000.</div>`)

}