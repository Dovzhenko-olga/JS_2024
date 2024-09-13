if (confirm('Почати тестування?')) {

  function getRundomNumber(min = 1, max = 10) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function getRandomArray(elementsNumber) {
    return new Array(elementsNumber).fill(0).map(() => getRundomNumber())
  }

  const elementsNumber = 5
  const arr = getRandomArray(elementsNumber)
  document.write(`<div>Початковий масив: ${arr.join(', ')}.</div>`)

  function bubbleSort(arr) {
    document.write(`<div style="text-decoration: underline">Сортування бульбашкою.</div>`)
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

          document.write(`<div>Етап ${exchangesQuantity}: ${arr.join(', ')}.</div>`)
        }
      }
    } while (changed)
    return [compareQuantity, exchangesQuantity]
  }

  const [compareQuantityBubble, exchangesQuantityBubble] = bubbleSort([...arr])

  document.write(`<div>Під час сортування бульбашкою було зроблено ${exchangesQuantityBubble} обмінів та ${compareQuantityBubble} порівнянь.</div>`)

  function coctailSort(arr) {
    document.write(`<div style="text-decoration: underline">Сортування змішуванням.</div>`)
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

          document.write(`<div>Етап ${exchangesQuantity} зліва-направо: ${arr.join(', ')}.</div>`)
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

          document.write(`<div>Етап ${exchangesQuantity} справа-наліво: ${arr.join(', ')}.</div>`)
        }
      }
      leftIndex++
      if (changed === false) break
    }

    return [compareQuantity, exchangesQuantity]
  }


  const [compareQuantityCoctail, exchangesQuantityCoctail] = coctailSort([...arr])

  document.write(`<div>Під час сортування змішуванням було зроблено ${exchangesQuantityCoctail} обмінів та ${compareQuantityCoctail} порівнянь.</div>`)

  function insertSort(arr) {
    document.write(`<div style="text-decoration: underline">Сортування включеннями.</div>`)
    let compareQuantity = 0
    let exchangesQuantity = 0

    for (let k = 1; k < arr.length; k++) {
      const currentEl = arr[k]
      let i = k - 1
      compareQuantity++
      while (i >= 0 && arr[i] > currentEl) {
        arr[i + 1] = arr[i]
        exchangesQuantity++
        document.write(`<div>Етап ${exchangesQuantity}: ${arr.join(', ')}.</div>`)
        i = i - 1
      }
      arr[i + 1] = currentEl
    }
    document.write(`<div>Відсортований масив: ${arr.join(', ')}.</div>`)

    return [compareQuantity, exchangesQuantity]
  }


  const [compareQuantityInsert, exchangesQuantityInsert] = insertSort([...arr])

  document.write(`<div>Під час сортування включеннями було зроблено ${exchangesQuantityInsert} обмінів та ${compareQuantityInsert} порівнянь.</div>`)
}