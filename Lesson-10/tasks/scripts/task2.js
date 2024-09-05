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

  const arrNumberMoreThan1000 = arr.reduce((acc, el, ind) => {
    if (el > 1000) acc.push(ind)
    return acc
  }, [])
  document.write(`<div>Масив номерів цін, більших за 1000 грн: ${arrNumberMoreThan1000}.</div>`)
}