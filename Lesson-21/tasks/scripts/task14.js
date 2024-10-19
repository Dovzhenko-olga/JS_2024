function getRundomNumber(min = 1, max = 800) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

function getRandomArray(elementsNumber) {
  return new Array(elementsNumber).fill(0).map(() => getRundomNumber())
}

function bubbleSort(arr) {
  const startTime = new Date()
  let changed
  do {
    changed = false
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        let tmp = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = tmp
        changed = true
      }
    }
  } while (changed)
  return new Date() - startTime
}

function insertSort(arr) {
  const startTime = new Date()

  for (let k = 1; k < arr.length; k++) {
    const currentEl = arr[k]
    let i = k - 1
    while (i >= 0 && arr[i] > currentEl) {
      arr[i + 1] = arr[i]
      i = i - 1
    }
    arr[i + 1] = currentEl
  }

  return new Date() - startTime
}

function getResult(arr) {
  const bubbleSortArrTime = bubbleSort([...arr])
  const insertSortTime = insertSort([...arr])
  let result = ''

  if (bubbleSortArrTime > insertSortTime) result = `Сортування вставкою швидше за сортування бульбашкою на ${bubbleSortArrTime - insertSortTime} мс.`
  else result = `Сортування вставкою повільніше за сортування бульбашкою на ${insertSortTime - bubbleSortArrTime} мс.`
  return result
}

window.onload = () => {

  const elementsNumber = 1000
  const arr = getRandomArray(elementsNumber)
  const result = getResult(arr)
  document.querySelector('.resultContainer').innerHTML = result
}