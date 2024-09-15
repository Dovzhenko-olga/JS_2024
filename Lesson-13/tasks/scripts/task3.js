if (confirm('Почати тестування?')) {
  let gameField = [
    [1, 0, ' '],
    [0, ' ', ' '],
    [' ', 0, 1]
  ]

  function getFreeItemsArray(gameField) {
    let freeItemsArray = []
    for (let i = 0; i < gameField.length; i++) {
      for (let j = 0; j < gameField[i].length; j++) {
        if (gameField[i][j] === ' ') freeItemsArray.push([i, j])
      }
    }
    return freeItemsArray
  }
  const freeItemsArray = getFreeItemsArray(gameField)


  function generateOptions(gameField, freeItemsArray, start) {
    if (start === freeItemsArray.length) document.write(`<div>${JSON.stringify(gameField)} </div>`)
    else {
      for (let i = start; i < freeItemsArray.length; i++) {
        const [x, y] = freeItemsArray[i]

        //----- у вільну клітинку ставимо 0 і переглядаємо усі, що залишились вільні
        gameField[x][y] = 0
        generateOptions(gameField, freeItemsArray, start + 1)

        //----- у вільну клітинку ставимо 1 і переглядаємо усі, що залишились вільні
        gameField[x][y] = 1
        generateOptions(gameField, freeItemsArray, start + 1)
        gameField[x][y] = ''

        return
      }
    }
  }
  generateOptions(gameField, freeItemsArray, 0)

}