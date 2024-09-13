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


  function bubbleSort(arr) {
    let compareQuantity = 0
    let exchangesQuantity = 0
    let changed
    do {
      changed = false
      for (let i = 1; i < arr.length; i++) {
        compareQuantity++
        if (arr[i - 1] > arr[i]) {
          exchangesQuantity++
          let tmp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = tmp
          changed = true
        }
      }
    } while (changed)
    return [arr, compareQuantity, exchangesQuantity]
  }


  const [arrSorty, compareQuantity, exchangesQuantity] = bubbleSort([...arr])

  document.write(`<div>Відсортований масив: ${arrSorty.join(', ')}.</div>`)

  document.write(`<div>Під час сортування бульбашкою було зроблено ${exchangesQuantity} обмінів та ${compareQuantity} порівнянь.</div>`)
}