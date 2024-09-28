if (confirm('Почати тестування?')) {
  class TMoney {
    #money
    #rate

    constructor(initMoney, initRate) {
      this.Money = initMoney
      this.Rate = initRate
    }

    get Money() {
      return this.#money
    }
    set Money(newMoney) {
      if (newMoney < 0) throw new Error(`Введіть коректні дані!`)

      this.#money = newMoney
    }

    get Rate() {
      return this.#rate
    }

    set Rate(newRate) {
      if (newRate <= 0) throw new Error(`Введіть коректні дані!`)
      this.#rate = newRate
    }

    addMoney(moneyGrn) {
      if (moneyGrn < 0) throw new Error(`Введіть суму у гривнях, більшу за 0!`)
      const moneyDollars = moneyGrn / this.Rate
      this.Money += moneyDollars
    }
    subtrMoney(moneyGrn) {
      if (moneyGrn < 0) throw new Error(`Введіть суму у гривнях, більшу за 0!`)
      const moneyDollars = moneyGrn / this.Rate
      if (this.Money < moneyDollars) throw new Error(`Недостатньо грошей для вилучення даної суми!`)
      this.Money -= moneyDollars
    }
    // курс, щоб сума була більшою на 100 грн
    getRate() {
      return (this.Rate * this.Money + 100) / this.Money
    }
    toString() {
      return `Сума ${this.Money.toFixed(2)} USD. Курс ${this.Rate} грн за долар.`
    }
  }

  try {
    const money = new TMoney(150, 41.48)
    document.write(`<div>${money}</div>`)
    money.addMoney(3500)
    document.write(`<div>Додаємо гроші:<br> ${money}</div>`)
    money.subtrMoney(4100)
    document.write(`<div>Віднімаємо гроші:<br> ${money}</div>`)
    const newRate = money.getRate()
    document.write(`<div>Новий курс: ${newRate.toFixed(2)} грн за долар.</div>`)
  } catch (error) {
    console.log(error.message)
  }
}