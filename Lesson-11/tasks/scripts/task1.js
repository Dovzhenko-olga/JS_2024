if (confirm('Почати тестування?')) {

  function getRundomNumber(min = 1, max = 10) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function getArray(colsNumber, rowsNumber) {
    const arr = []

    for (let i = 0; i < rowsNumber; i++) {
      const rowArr = []
      for (let j = 0; j < colsNumber; j++) {
        const random = getRundomNumber()
        rowArr.push(random)
      }
      arr.push(rowArr)
    }
    return arr
  }

  const colsNumber = parseInt(prompt(`Введіть кількість стовпців`, '10'))
  const rowsNumber = parseInt(prompt('Введіть кількість рядків', '6'))
  const arr = getArray(colsNumber, rowsNumber)
  console.log(arr)

  function getSum(arr, startRow, endRow, startCol, endCol, stepRow, stepCol) {
    let sum = 0
    for (let i = startRow; i < endRow; i += stepRow) {
      for (let j = startCol; j < endCol; j += stepCol) {
        sum += arr[i][j]
      }
    }
    return sum
  }

  // номери рядків від 0 до половини, стовпці від 0 до половини;
  const middleOfRow = Math.floor(rowsNumber / 2)
  const middleOfCol = Math.floor(colsNumber / 2)
  document.write(`<div>1: ${getSum(arr, 0, middleOfRow, 0, middleOfCol, 1, 1)}.</div>`)
  // номери рядків від 0 до половини, стовпці від половини до кінця;
  document.write(`<div>2: ${getSum(arr, 0, middleOfRow, middleOfCol, colsNumber, 1, 1)}.</div>`)
  // номери рядків від половини до кінця, стовпці від 0 до половини;
  document.write(`<div>3: ${getSum(arr, middleOfRow, rowsNumber, 0, middleOfCol, 1, 1)}.</div>`)
  // номери рядків від половини до кінця, стовпці від половини до кінця;
  document.write(`<div>4: ${getSum(arr, middleOfRow, rowsNumber, middleOfCol, colsNumber, 1, 1)}.</div>`)
  // суму парних рядків;
  document.write(`<div>5: ${getSum(arr, 0, rowsNumber, 0, colsNumber, 2, 1)}.</div>`)
  // суму непарних стовпців;
  document.write(`<div>6: ${getSum(arr, 0, rowsNumber, 1, colsNumber, 1, 2)}.</div>`)
  // у парних рядках – непарні стовпці, у непарних – парні.

  function getSpecialSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        for (let j = 1; j < arr[i].length; j += 2) {
          sum += arr[i][j]
        }
      } else {
        for (let j = 0; j < arr[i].length; j += 2) {
          sum += arr[i][j]
        }
      }
    }
    return sum
  }

  document.write(`<div>7: ${getSpecialSum(arr)}.</div>`)
}