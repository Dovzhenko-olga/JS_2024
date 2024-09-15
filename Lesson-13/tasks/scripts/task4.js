if (confirm('Почати тестування?')) {

  const girls = ["Olena", "Iryna", "Svitlana", "Oksana"]
  const boys = ["Andriy", "Vladislav", "Mykola", "Taras",]
  // Не придумала, як приліпити сюди рекурсію - занадто це складно буде для такої простої задачі

  function getPairs(girls, boys) {
    const pairsArray = []
    for (const girl of girls) {
      for (const boy of boys) {
        pairsArray.push([girl, boy])
      }
    }
    return pairsArray
  }
  const pairsArray = getPairs(girls, boys)
  document.write(`<div>${pairsArray.join(' <br> ')}</div>`)

}