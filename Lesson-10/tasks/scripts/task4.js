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

  const maxPrice = arr.reduce((prevMax, el) => (el > prevMax ? el : prevMax))
  document.write(`<div>Максимальна ціна: ${maxPrice}.</div>`)

  const coefOfPercentage = 100 / maxPrice

  const percentagesArray = arr.map(el => el * coefOfPercentage)
  document.write(`<div>Масив цін у відсотках стосовно максимального: ${percentagesArray}.</div>`)
}