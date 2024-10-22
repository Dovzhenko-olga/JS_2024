
function onLoad(list) {
  let toDoList = localStorage.getItem('toDoList')

  if (!toDoList) {
    toDoList = JSON.stringify(list)
    localStorage.setItem('toDoList', toDoList)
  }
}
function getRandomToDo() {
  const toDoList = JSON.parse(localStorage.getItem('toDoList'))
  const randomNumber = Math.floor(Math.random() * toDoList.length)

  return [toDoList, randomNumber, toDoList[randomNumber]]
}

function deleteToDo(list, index) {
  list.splice(index, 1)
  localStorage.setItem('toDoList', JSON.stringify(list))
}


window.onload = () => {
  const toDoList = ['work', 'coffe', 'cake', 'shopping']

  onLoad(toDoList)
  const myTimer = setInterval(() => {
    const [toDoList, index, randomToDo] = getRandomToDo()
    if (toDoList.length === 0) {
      alert('Ви виконали всі справи.')
      clearInterval(myTimer)
    }
    else {
      const userAnswer = confirm(`Ви виконали справу ${randomToDo}?`)
      if (userAnswer) deleteToDo(toDoList, index)
    }
  }, 5000)
}