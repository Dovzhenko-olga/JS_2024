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

  const firstPriseMoreThan1000Index = arr.findIndex(el => el > 1000)
  document.write(`<div>В масиві ${firstPriseMoreThan1000Index}-й елемент перший, більше за 1000.</div>`)

}