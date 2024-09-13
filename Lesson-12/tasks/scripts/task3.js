if (confirm('Почати тестування?')) {

  function getRundomNumber(min = 1, max = 100) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function getRandomArray(elementsNumber) {
    return new Array(elementsNumber).fill(0).map(() => getRundomNumber())
  }

  const elementsNumber = 30
  const arr = getRandomArray(elementsNumber)
  document.write(`<div>Початковий масив: ${arr.join(', ')}.</div>`)


  function insertSort(arr) {
    let compareQuantity = 0
    let exchangesQuantity = 0

    for (let k = 1; k < arr.length; k++) {
      const currentEl = arr[k]
      let i = k - 1
      compareQuantity++
      while (i >= 0 && arr[i] > currentEl) {
        exchangesQuantity++
        arr[i + 1] = arr[i]
        i = i - 1
      }
      arr[i + 1] = currentEl
    }

    return [arr, compareQuantity, exchangesQuantity]
  }


  const [arrSorty, compareQuantity, exchangesQuantity] = insertSort([...arr])

  document.write(`<div>Відсортований масив: ${arrSorty.join(', ')}.</div>`)

  document.write(`<div>Під час сортування включеннями було зроблено ${exchangesQuantity} обмінів та ${compareQuantity} порівнянь.</div>`)
}