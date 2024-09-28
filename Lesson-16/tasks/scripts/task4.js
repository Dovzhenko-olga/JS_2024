if (confirm('Почати тестування?')) {
  class TBankomat {
    constructor() {
      this.bills = []
    }

    getMaxSum() {
      return this.bills.reduce((acc, el) => acc + el.Bill * el.Quantity, 0)
    }

    getMinSum() {
      const sortByBills = [...this.bills].sort((a, b) => a.Bill - b.Bill)
      let minAvailableBill = 0
      for (const bill of sortByBills) {
        if (bill.Quantity > 0) {
          minAvailableBill = bill.Bill
          break
        }
      }
      return minAvailableBill
    }

    getTakeMoney(money) {
      if (money > this.getMaxSum()) throw new Error(`Недостатньо коштів для зняття даної суми!`)

      if (money % this.getMinSum()) throw new Error(`Сума має бути кратною ${this.getMinSum()}`)
      // Я розумію, що метод недороблений і він не працює коректно. Поки не змогла додумати нормально :(((
      const sortByBills = [...this.bills].sort((a, b) => b.Bill - a.Bill)
      for (const bill of sortByBills) {
        let sum = 0
        sum += bill.Bill * bill.Quantity
        bill.Quantity = 0
        if (sum >= money) break
      }
    }

    toString() {
      return `${this.bills[0].Bill}: ${this.bills[0].Quantity}<br>
              ${this.bills[1].Bill}: ${this.bills[1].Quantity}<br>
              ${this.bills[2].Bill}: ${this.bills[2].Quantity}<br>
              ${this.bills[3].Bill}: ${this.bills[3].Quantity}<br>
              ${this.bills[4].Bill}: ${this.bills[4].Quantity}<br>
              ${this.bills[5].Bill}: ${this.bills[5].Quantity}<br>`
    }
  }

  class Bills {
    #bill
    #quantity

    constructor(bill, quantity) {
      this.Bill = bill
      this.Quantity = quantity
    }

    get Bill() {
      return this.#bill
    }
    set Bill(newBill) {

      if (newBill <= 0)
        throw new Error(`Значення не є коректним!!!`)

      this.#bill = newBill
    }

    get Quantity() {
      return this.#quantity
    }
    set Quantity(newQuantity) {

      if (newQuantity < 0)
        throw new Error(`Значення не коректне!!!`)

      this.#quantity = newQuantity
    }
  }

  try {
    const bankomat = new TBankomat()

    bankomat.bills.push(new Bills(200, 5))
    bankomat.bills.push(new Bills(5, 10))
    bankomat.bills.push(new Bills(10, 7))
    bankomat.bills.push(new Bills(20, 15))
    bankomat.bills.push(new Bills(50, 4))
    bankomat.bills.push(new Bills(100, 10))
    document.write(`<div>${bankomat}</div>`)
    console.log(bankomat)

    const maxSum = bankomat.getMaxSum()
    document.write(`<div>Максимально можна зняти ${maxSum} грн.</div>`)

    const minSum = bankomat.getMinSum()
    document.write(`<div>Мінімально можна зняти ${minSum} грн.</div>`)

    bankomat.getTakeMoney(1000)
    document.write(`<div>Вітаємо, Ви зняли гроші.</div>`)
    console.log(bankomat)
  } catch (error) {
    console.log(error.message)
  }

}