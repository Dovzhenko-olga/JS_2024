if (confirm('Почати тестування?')) {


  function iterator(word) {
    let text = word
    let count = 0
    function increment() {
      let innerCount = count
      count++
      return text[innerCount]
    }
    return increment
  }

  const word = 'victory'

  const letters = iterator(word)
  alert('Вгадайте слово. Відповіть вводьте по одній букві. Це те, що всі українці чекають більше за все.')
  function lettersCheck(word) {
    let rightLettersCount = 0
    for (let i = 0; i < word.length; i++) {
      const userLetter = prompt('Введіть букву')
      const currentLetter = letters()
      if (userLetter.toLowerCase() === currentLetter) {
        document.write(`${userLetter} - ${currentLetter} --- &#8730; <br>`)
        rightLettersCount++
      } else document.write(`${userLetter} - ${currentLetter} <br>`)
    }
    return rightLettersCount
  }
  const matching = lettersCheck(word)
  document.write(`<div>У слові ${word} Ви вгадали ${matching} літер.</div>`)
}