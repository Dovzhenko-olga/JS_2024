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


  function coctailSort(arr) {
    let compareQuantity = 0
    let exchangesQuantity = 0

    let leftIndex = 0
    let rightIndex = arr.length - 1
    while (leftIndex < rightIndex) {
      //--- проходимось зліва-направо
      let changed = false
      for (let i = leftIndex + 1; i <= rightIndex; i++) {
        compareQuantity++
        if (arr[i - 1] > arr[i]) {
          exchangesQuantity++
          let temp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = temp
          changed = true
        }
      }
      rightIndex--
      if (changed === false) break
      //---- проходимось справа-наліво
      changed = false
      for (let i = rightIndex; i > leftIndex; i--) {
        compareQuantity++
        if (arr[i - 1] > arr[i]) {
          exchangesQuantity++
          let temp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = temp
          changed = true
        }
      }
      leftIndex++
      if (changed === false) break
    }

    return [arr, compareQuantity, exchangesQuantity]
  }


  const [arrSorty, compareQuantity, exchangesQuantity] = coctailSort([...arr])

  document.write(`<div>Відсортований масив: ${arrSorty.join(', ')}.</div>`)

  document.write(`<div>Під час сортування змішуванням було зроблено ${exchangesQuantity} обмінів та ${compareQuantity} порівнянь.</div>`)
}