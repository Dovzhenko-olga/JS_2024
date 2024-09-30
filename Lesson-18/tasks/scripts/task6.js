if (confirm('Почати тестування?')) {
  function getTable() {
    const userNumber = parseFloat(document.getElementById('numbers').value)

    const myTable = document.createElement('table')
    myTable.setAttribute('border', 1)
    myTable.setAttribute('cellspacing', 0)
    const myRow = document.createElement('tr')
    for (let i = 0; i < userNumber; i++) {
      const cell = document.createElement('td')
      myRow.append(cell)
      const label = document.createElement('label')
      cell.append(label)
      const input = document.createElement('input')
      input.setAttribute('type', 'number')
      input.setAttribute('id', `number${i}`)
      input.setAttribute('value', 0)
      label.append(input)
      myTable.append(myRow)
    }
    document.getElementById('table').append(myTable)
    // let myTable = `<hr /><table border="3" cellspacing="0" class="table"><tr>`
    // for (let i = 0; i < userNumber; i++) {

    //   myTable += `<td>
    //                 <label>
    //                   <input type="number" id="number${i}" value="0" />
    //                 </label>
    //               </td>`
    // }
    // myTable += `</tr></table>`
    // document.getElementById('table').innerHTML = myTable
  }

  function getSum() {
    const userNumber = parseFloat(document.getElementById('numbers').value)
    let sum = 0
    for (let i = 0; i < userNumber; i++) {
      const userMark = parseFloat(document.getElementById(`number${i}`).value)
      sum += userMark
    }
    const average = sum / userNumber
    document.getElementById('sum').innerText = `sum = ${average.toFixed(2)}`
  }

  window.onload = function () {
    document.getElementById('getTable').onclick = getTable
    document.getElementById('getSumButton').onclick = getSum
  }
}