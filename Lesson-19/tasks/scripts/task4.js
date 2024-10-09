window.onload = () => {

  // Варіант 2
  function getTable() {
    const myTable = document.createElement('table')
    myTable.setAttribute('border', 1)
    myTable.setAttribute('cellspacing', 0)
    const tableBody = document.createElement('tbody')
    myTable.append(tableBody)
    for (let i = 0; i < 3; i++) {
      const myRow = document.createElement('tr')
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement('td')
        cell.innerText = 1 + Math.floor(Math.random() * 9)
        myRow.append(cell)
      }
      tableBody.append(myRow)
    }
    return myTable
  }

  const tableContainer = document.querySelector('.tableContainer')

  function showTables(items) {
    for (let i = 1; i <= items; i++) {
      const tableDiv = document.createElement('div')
      tableDiv.setAttribute('class', `table${i}`)
      tableContainer.append(tableDiv)
      const title = document.createElement('span')
      title.innerText = `Table${i}`
      tableDiv.append(title)
      const counter = document.createElement('span')
      counter.setAttribute('class', `counter${i}`)
      tableDiv.append(counter)
      const myTable = getTable()
      tableDiv.append(myTable)
    }
  }
  showTables(3)

  let clikAmountTable1 = 0
  let clikAmountTable2 = 0
  let clikAmountTable3 = 0

  for (const table of tableContainer.children) {
    table.onclick = function (e) {
      if (e.target.tagName === 'TD')
        e.target.closest('table').style.borderColor = 'red'

      switch (table.className) {
        case 'table1': document.querySelector('.counter1').innerText = `- ${++clikAmountTable1}` + ' кліків'
          break;
        case 'table2': document.querySelector('.counter2').innerText = `- ${++clikAmountTable2}` + ' кліків'
          break;
        case 'table3': document.querySelector('.counter3').innerText = `- ${++clikAmountTable3}` + ' кліків'
          break;
      }
    }
  }

  // Варіант 1

  // function getTable() {
  //   const myTable = document.createElement('table')
  //   myTable.setAttribute('border', 1)
  //   myTable.setAttribute('cellspacing', 0)
  //   const tableBody = document.createElement('tbody')
  //   myTable.append(tableBody)
  //   for (let i = 0; i < 3; i++) {
  //     const myRow = document.createElement('tr')
  //     for (let j = 0; j < 3; j++) {
  //       const cell = document.createElement('td')
  //       cell.setAttribute('tableIndex', `table${tableIndex}`)
  //       cell.innerText = 1 + Math.floor(Math.random() * 9)
  //       myRow.append(cell)
  //     }
  //     tableBody.append(myRow)
  //   }
  //   return myTable
  // }
  // const tableContainer = document.querySelector('.tableContainer')
  // for (let i = 1; i <= 3; i++) {
  //   const myTable = getTable(i)
  //   tableContainer.append(myTable)
  //   const title = document.createElement('span')
  //   title.innerText = `Table${i}`
  //   myTable.before(title)
  //   const counter = document.createElement('span')
  //   counter.setAttribute('class', `table${i}`)
  //   title.after(counter)
  // }
  // let clikAmountTable1 = 0
  // let clikAmountTable2 = 0
  // let clikAmountTable3 = 0

  // // З виведенням кліків намудрила, мабуть, сильно. Але працює :))

  // function cellClick() {
  //   const clickedTd = this
  //   clickedTd.closest('table').style.borderColor = 'red'
  //   const tableIndex = clickedTd.getAttribute('tableIndex')

  //   const counter = document.querySelector(`.${tableIndex}`)
  //   switch (tableIndex) {
  //     case 'table1': counter.innerText = `- ${++clikAmountTable1}` + 'кліків'
  //       break;
  //     case 'table2': counter.innerText = `- ${++clikAmountTable2}` + 'кліків'
  //       break;
  //     case 'table3': counter.innerText = `- ${++clikAmountTable3}` + 'кліків'
  //       break;
  //   }
  // }

  // const tdList = document.querySelectorAll('td')
  // for (const td of tdList) {
  //   td.onclick = cellClick
  // }
}