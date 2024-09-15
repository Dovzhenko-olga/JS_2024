if (confirm('Почати тестування?')) {

  const min = 1
  const max = 12

  function iterator(min, max) {
    let count = min
    function increment() {
      const innerCount = count
      if (count === max) count = min
      else count++
      return innerCount
    }
    return increment
  }
  const count = iterator(min, max)

  const monthAmount = parseInt(prompt('Введіть кількість місяців', '17'))

  for (let i = 0; i < monthAmount; i++) {
    const monthNumber = count()
    document.write(`${monthNumber}<br>`)
  }

}