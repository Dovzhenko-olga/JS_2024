class Client {
  constructor(id, { name, fathersName, lastName }, money) {
    this.id = id
    this.name = name
    this.fathersName = fathersName
    this.lastName = lastName
    this.money = money
  }

  addMoney(moneyAmount) {
    this.money += moneyAmount
  }

  substrMoney(moneyAmount) {
    this.money -= moneyAmount
  }

  toString() {
    return `${this.id}. ${this.name} ${this.lastName} - ${this.money} грн.`
  }
}

class GoldenClient extends Client {
  constructor(id, { name, fathersName, lastName }, money, limit, percent) {
    super(id, { name, fathersName, lastName }, money)
    this.limit = limit
    this.percent = percent
  }

  substrMoney(moneyAmount) {
    if (this.money >= moneyAmount) {
      super.substrMoney(moneyAmount);
    } else {
      const limitUsed = moneyAmount - this.money
      if (limitUsed > this.limit) {
        throw new Error(
          `Не достатньо коштів для зняття ${moneyAmount} грн.`
        )
      }
      this.limitUsed = limitUsed
    }
  }

  getFine() {
    return this.limitUsed * this.percent
  }

  toString() {
    return `${super.toString()} Відсоток за використання кредитних коштів ${this.percent * 100}%.`
  }
}


window.onload = () => {
  const person = {
    name: 'Ivan',
    fathersName: 'Petrovich',
    lastName: 'Ivanov',
  }
  // const client = new Client(2, person, 1200)
  const goldenClient = new GoldenClient(2, person, 3500, 6000, 0.2)
  const container = document.querySelector('.resultContainer')
  const result = document.createElement('span')
  result.innerText = goldenClient
  container.append(result)
}