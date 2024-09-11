if (confirm('Почати тестування?')) {

  function getRundomNumber(min = 100, max = 1000) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function getArray(marketsNumber) {
    const arr = []

    for (let i = 0; i < marketsNumber; i++) {
      const rowArr = []
      for (let j = 0; j < 7; j++) {
        const random = getRundomNumber()
        rowArr.push(random)
      }
      arr.push(rowArr)
    }
    return arr
  }

  const marketsNumber = parseInt(prompt(`Введіть кількість магазинів`, '10'))
  const profits = getArray(marketsNumber)
  console.log(profits)

  // загальний прибуток кожного магазину за тиждень;
  function getSumPerWeek(profits, marketsNumber) {
    const totalSumPerWeek = []
    for (let i = 0; i < marketsNumber; i++) {
      let sumByMarket = 0
      for (let j = 0; j < 7; j++) sumByMarket += profits[i][j]
      totalSumPerWeek.push(sumByMarket)
    }
    return totalSumPerWeek
  }

  // загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
  function getSumByDay(profits, marketsNumber) {
    const totalSumByDay = []
    for (let i = 0; i < 7; i++) {
      let sumByDay = 0
      for (let j = 0; j < marketsNumber; j++)sumByDay += profits[j][i]
      totalSumByDay.push(sumByDay)
    }
    return totalSumByDay
  }

  // загальний прибуток за робочі дні;
  // загальний прибуток за вихідні дні;
  function getTotalSum(profits, marketsNumber, firstDay, lastDay) {
    let totalSum = 0
    for (let i = 0; i < marketsNumber; i++) {
      for (let j = firstDay; j <= lastDay; j++) totalSum += profits[i][j]
    }
    return totalSum
  }

  // максимальний прибуток за середу;
  function getMaxByWednesday(profits, marketsNumber, dayNumber) {
    let maxProfitByWednesday = 0
    for (let i = 0; i < marketsNumber; i++)
      maxProfitByWednesday = profits[i][dayNumber] > maxProfitByWednesday ? profits[i][dayNumber] : maxProfitByWednesday
    return maxProfitByWednesday
  }

  // сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200;
  function getArrayMore200(profits, marketsNumber) {
    const arr = []
    for (let i = 0; i < marketsNumber; i++) {
      for (let j = 0; j < 7; j++) {
        if (profits[i][j] > 200)
          arr.push(profits[i][j])
      }
    }
    return arr
  }

  // відсортувати кожен тиждень за зростанням;
  function getSortedProfitsPerWeeks(profits, marketsNumber) {
    const sortedProfitsPerWeeks = []
    for (let i = 0; i < marketsNumber; i++) {
      sortedProfitsPerWeeks.push([...profits[i]].sort((el1, el2) => el1 - el2))
    }
    return sortedProfitsPerWeeks
  }


  // відсортувати тижні (рядки) за спаданням максимального елемента у цьому тижні (рядку),
  // тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків;

  function getSortedByMax(profits) {
    return [...profits].sort((el1, el2) => Math.max(...el2) - Math.max(...el1))
  }


  // упорядкувати тижні(рядки) за спаданням суми елементів у рядку(тобто при порівнянні двох рядків
  // треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

  function getSortedBySum(profits) {
    return [...profits].sort((el1, el2) => el2.reduce((prevSum, el) => prevSum + el) - el1.reduce((prevSum, el) => prevSum + el))
  }


  const sumPerWeek = getSumPerWeek(profits, marketsNumber)
  const sumByDay = getSumByDay(profits, marketsNumber)
  const totalSumByWorkingDay = getTotalSum(profits, marketsNumber, 0, 4)
  const totalSumByWeekend = getTotalSum(profits, marketsNumber, 5, 6)
  const maxByWednesday = getMaxByWednesday(profits, marketsNumber, 2)
  const arrMoreThan200 = getArrayMore200(profits, marketsNumber)
  const sortedProfitsPerWeeks = getSortedProfitsPerWeeks(profits, marketsNumber)
  const sortedByMax = getSortedByMax(profits)
  const sortedBySum = getSortedBySum(profits)

  document.write(`<ol>
  <li> ${sumPerWeek.join(', ')}<br>
  <li> ${sumByDay.join(', ')}<br>
  <li> ${totalSumByWorkingDay}<br>
  <li> ${totalSumByWeekend}<br>
  <li> ${maxByWednesday}<br>
  <li> ${arrMoreThan200.join(', ')}<br>
  <li> ${sortedProfitsPerWeeks.join('<br> ')}<br>
  <li> ${sortedByMax.join('<br> ')}<br>
  <li> ${sortedBySum.join('<br> ')}<br>
  </ol>
  `)
}