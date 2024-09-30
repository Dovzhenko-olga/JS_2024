if (confirm('Почати тестування?')) {
  function getTable(rows, cols) {

    const myTable = document.createElement('table')
    myTable.setAttribute('border', 1)
    myTable.setAttribute('cellspacing', 0)
    for (let i = 0; i < rows; i++) {
      const myRow = document.createElement('tr')
      for (let j = 0; j < cols; j++) {
        const cell = document.createElement('td')
        cell.innerText = 1 + Math.floor(Math.random() * 9)
        myRow.append(cell)
      }
      myTable.append(myRow)
    }
    document.getElementById('table').append(myTable)

    // let myTable = `<table border="1" cellspacing="0">`
    // for (let i = 0; i < 3; i++) {
    //   myTable += `<tr>`
    //   for (let j = 0; j < 4; j++) {
    //     const rundomNumber = 1 + Math.floor(Math.random() * 9)
    //     myTable += `<td>${rundomNumber}</td>`
    //   }
    //   myTable += `<tr>`
    // }
    // myTable += `</table>`
    // document.getElementById('table').innerHTML = myTable
  }

  window.onload = function () {
    getTable(3, 4)
  }
}