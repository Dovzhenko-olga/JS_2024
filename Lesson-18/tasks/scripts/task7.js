if (confirm('Почати тестування?')) {

  function getTotalPriceOfTransport() {
    const transportPriceList = document.querySelectorAll('select')
    let transportPrice = 0
    for (const price of transportPriceList) {
      transportPrice += parseFloat(price.value)
    }
    return transportPrice
  }
  function getTotalPriceOfFood() {
    const foodPriceList = document.querySelectorAll('input[type="checkbox"]')
    let foodPrice = 0
    for (const price of foodPriceList) {
      if (price.checked) foodPrice += parseFloat(price.value)
    }
    return foodPrice
  }
  function getTotalPriceOfGuide() {
    const guidePriceList = document.querySelectorAll('input[type="radio"]')
    let guidePrice = 0
    for (const price of guidePriceList) {
      if (price.checked) guidePrice += parseFloat(price.value)
    }
    return guidePrice
  }
  function getTotalPriceOfTrip() {
    const totalPrice = getTotalPriceOfTransport() + getTotalPriceOfFood() + getTotalPriceOfGuide()
    document.getElementById('result').innerText = totalPrice + 'грн.'
  }

  window.onload = function () {
    document.querySelector('button').onclick = getTotalPriceOfTrip

  }
}