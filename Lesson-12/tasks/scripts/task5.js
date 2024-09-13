if (confirm('Почати тестування?')) {

  const names = ["Andriy", "Olena", "Vladislav", "Iryna", "Mykola", "Svitlana", "Taras", "Kateryna", "Olga", "Oksana"]

  document.write(`<div>Початковий масив: ${names.join(', ')}.</div>`)


  function insertSort(arr) {

    for (let k = 1; k < arr.length; k++) {
      const currentEl = arr[k]
      let i = k - 1
      while (i >= 0 && arr[i] > currentEl) {
        arr[i + 1] = arr[i]
        i = i - 1
      }
      arr[i + 1] = currentEl
    }

    return arr
  }

  const sortedNames = insertSort([...names])

  document.write(`<div>Відсортований масив: ${sortedNames.join(', ')}.</div>`)

  const searchingName = 'Olga'

  function binarySearch(arr, searchingName) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
      const middle = Math.floor((start + end) / 2)
      if (arr[middle] === searchingName) return middle
      if (arr[middle] > searchingName) end = middle - 1
      if (arr[middle] < searchingName) start = middle + 1
    }
    return -1
  }

  const index = binarySearch(sortedNames, searchingName)

  if (index === -1)
    document.write(`<div>В заданому масиві немає імені ${searchingName}.</div>`)
  else
    document.write(`<div>У відсортованому масиві ім'я ${searchingName} знаходиться під індексом ${index}.</div>`)
}