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

  const priceChahge = arr.reduce((count, el, ind, baseArray) => {
    if (el !== baseArray[ind + 1] && ind !== baseArray.length - 1) count++
    return count
  }, 0)
  document.write(`<div>Ціна змінювалась ${priceChahge} разів.</div>`)

}