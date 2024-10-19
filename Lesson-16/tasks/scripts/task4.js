class Bill {
  #value
  #quantity

  constructor(value, quantity) {
    this.Value = value
    this.Quantity = quantity
  }

  get Value() {
    return this.#value
  }
  set Value(newValue) {

    if (newValue <= 0)
      throw new Error(`Значення не є коректним!!!`)

    this.#value = newValue
  }

  get Quantity() {
    return this.#quantity
  }
  set Quantity(newQuantity) {

    if (newQuantity < 0)
      throw new Error(`Значення не коректне!!!`)

    this.#quantity = newQuantity
  }

  getTotalSum() {
    return this.Value * this.Quantity
  }

  valueOf() {
    return this.getTotalSum()
  }

  toString() {
    return `${this.Value} - ${this.Quantity}`
  }
}

class TBankomat {
  constructor(billsList) {
    this.bills = this.getSortedByBillsList(billsList)
    this.maxSum = this.getMaxSum()
    this.minSum = this.getMinSum()
  }

  getSortedByBillsList(list) {
    return [...list].sort((a, b) => b.Value - a.Value)
  }

  getMaxSum() {
    return this.bills.reduce((acc, el) => acc + el.getTotalSum(), 0)
  }

  getMinSum() {
    let minAvailableBill = this.bills.reduce((prevMin, el) => el.Quantity > 0 && el.Value < prevMin ? el.Value : prevMin, +Infinity)

    return isFinite(minAvailableBill) ? minAvailableBill : 0
  }

  getBillsForRequiredSum(money) {
    let requiredBillsList = []

    for (const bill of this.bills) {
      if (bill.Quantity > 0 && money > bill.Value) {
        let requiredBillsNumber = Math.min(bill.Quantity, Math.floor(money / bill.Value))
        requiredBillsList.push(
          {
            bill,
            requiredBillsNumber
          }
        )
        money -= bill.Value * requiredBillsNumber
        if (money === 0) break
      }
    }
    return money === 0 ? requiredBillsList : null
  }

  getTakeMoney(money) {
    if (money > this.maxSum) throw new Error(`Недостатньо коштів для зняття даної суми!`)

    if (money % this.minSum) throw new Error(`Сума має бути кратною ${this.minSum}`)

    let requiredBillsList = this.getBillsForRequiredSum(money)
    if (requiredBillsList) {
      for (const { bill, requiredBillsNumber } of requiredBillsList) {
        console.log(`${bill.Value} : ${requiredBillsNumber}`)

        bill.Quantity -= requiredBillsNumber
      }
      this.maxSum -= money
      this.minSum = this.getMinSum()
      return true
    } else throw new Error('Банкомат не має потрібної кількості купюр')
  }

  toString() {
    return `${this.bills[0].Value}: ${this.bills[0].Quantity}<br>
              ${this.bills[1].Value}: ${this.bills[1].Quantity}<br>
              ${this.bills[2].Value}: ${this.bills[2].Quantity}<br>
              ${this.bills[3].Value}: ${this.bills[3].Quantity}<br>
              ${this.bills[4].Value}: ${this.bills[4].Quantity}<br>
              ${this.bills[5].Value}: ${this.bills[5].Quantity}<br>`
  }
}

const billsList = [
  new Bill(5, 10),
  new Bill(10, 7),
  new Bill(20, 15),
  new Bill(50, 4),
  new Bill(100, 10),
  new Bill(200, 5)
]

const bankomat = new TBankomat(billsList)

try {
  document.write(`<div>${bankomat}</div>`)

  document.write(`<div>Максимально можна зняти ${bankomat.maxSum} грн.</div>`)

  document.write(`<div>Мінімально можна зняти ${bankomat.getMinSum()} грн.</div>`)

  if (bankomat.getTakeMoney(2620)) document.write(`<div>Вітаємо, Ви зняли гроші.</div>`)
  console.log(bankomat)
} catch (error) {
  console.log(error.message)
}
