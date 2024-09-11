if (confirm('Почати тестування?')) {

  function getRundomPosition(min = 0, max = 5) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function getField() {
    const arr = []

    for (let i = 0; i < 6; i++) {
      const rowArr = new Array(6).fill(0)
      arr.push(rowArr)
    }
    return arr
  }
  const field = getField()

  function getShips(field) {
    for (let i = 0; i < 5; i++) {
      const randomRow = getRundomPosition()
      const randomCol = getRundomPosition()
      if (field[randomRow][randomCol] === 0) field[randomRow][randomCol] = 'x'
      else i--
    }
  }
  getShips(field)
  console.log(field)
  let killedShips = 0
  let shotsNumber = 10

  function showGame() {
    alert(`Зробіть свій постріл. У Вас ${shotsNumber} спроб(и).`)
    for (let i = 1; i <= shotsNumber; i++) {
      let userRowShot = parseInt(prompt('Введіть координату пострілу по горизонталі від 0 до 5', '1'))
      if (userRowShot < 0 || userRowShot > 5) {
        alert('Введіть корректне число від 0 до 5')
        i--
        continue
      }
      let userColShot = parseInt(prompt('Введіть координату пострілу по вертикалі від 0 до 5', '1'))
      if (userColShot < 0 || userColShot > 5) {
        alert('Введіть корректне число від 0 до 5')
        i--
        continue
      }
      if (field[userRowShot][userColShot] === 'x') {
        killedShips++
        field[userRowShot][userColShot] = 0
        if (killedShips === 5) {
          alert(` Вітаємо! Ви потопили усі ${killedShips} кораблів з ${i} спроб.`)
          break
        }
        alert(` Вітаємо! Ви потопили ${killedShips}-й корабель з ${i} пострілу.`)
      }
      else {
        if (i < shotsNumber)
          alert(`Ви не влучили. Спробуйте ще. Залишилось ${shotsNumber - i} спроб(и).`)
        else alert(`Нажаль, снаряди закінчилися. Ви потопили ${killedShips} кораблів. Спробуйте ще!`)
      }
    }
  }
  showGame()
}