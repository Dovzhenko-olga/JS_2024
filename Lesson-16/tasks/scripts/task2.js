if (confirm('Почати тестування?')) {
  class TMoney {
    #money
    #rate

    constructor(initRate, initMoney) {
      this.Rate = initRate
      this.Money = initMoney
    }

    get Money() {
      return this.#money * this.Rate
    }
    set Money(newMoney) {
      if (newMoney < 0) throw new Error(`Введіть коректні дані!`)

      this.#money = newMoney / this.Rate
    }

    get Rate() {
      return this.#rate
    }

    set Rate(newRate) {
      if (newRate <= 0) throw new Error(`Введіть коректні дані!`)
      this.#rate = newRate
    }
    checkingMoney(moneyGrn) {
      if (moneyGrn < 0) throw new Error(`Введіть суму у гривнях, більшу за 0!`)
    }

    addMoney(moneyGrn) {
      this.checkingMoney(moneyGrn)

      this.Money += moneyGrn
    }

    subtrMoney(moneyGrn) {
      this.checkingMoney(moneyGrn)

      if (moneyGrn > this.Money) throw new Error(`Недостатньо грошей для вилучення даної суми!`)
      this.Money -= moneyGrn

      return true
    }
    // курс, щоб сума була більшою на 100 грн
    getRate100() {
      return (this.Money + 100) / this.#money
    }

    toString() {
      return `Сума ${this.Money.toFixed(2)} USD. Курс ${this.Rate} грн за долар.`
    }
  }

  try {
    const money = new TMoney(41.48, 6222)
    document.write(`<div>${money}</div>`)
    money.addMoney(3500)
    document.write(`<div>Додаємо гроші:<br> ${money}</div>`)
    money.subtrMoney(4100)
    document.write(`<div>Віднімаємо гроші:<br> ${money}</div>`)
    const newRate = money.getRate100()
    document.write(`<div>Новий курс: ${newRate.toFixed(2)} грн за долар.</div>`)
  } catch (error) {
    console.log(error.message)
  }
}