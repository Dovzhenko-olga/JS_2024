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

  const arrMoreThanPrev = arr.reduce((acc, el, ind, baseArr) => {
    if (el < baseArr[ind + 1] && ind !== baseArr.length - 1) acc.push(baseArr[ind + 1])
    return acc
  }, [])
  document.write(`<div>Масив цін, які більші за попереднє значення: ${arrMoreThanPrev}.</div>`)
}