class Client {
  constructor(id, { name, fathersName, lastName }, money) {
    this.id = id
    this.name = name
    this.fathersName = fathersName
    this.lastName = lastName
    this.money = money
  }

  addMoney(moneyAmount) {
    return this.money += moneyAmount
  }

  substrMoney(moneyAmount) {
    return this.money -= moneyAmount
  }

  toString() {
    return `${this.name} ${this.lastName} - ${this.money} грн.`
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

class Bank {
  constructor(clientsList) {
    this.clientsList = clientsList
  }

  getSimpleClients() {
    const simpleClientsList = this.clientsList.filter((client) => !(client instanceof GoldenClient))
    // const simpleClientsList = []
    // for (const client of this.clientsList) {
    //   if (!(client instanceof GoldenClient)) {
    //     simpleClientsList.push(client)
    //   }
    // }
    this.simpleClientsList = simpleClientsList
    this.showClients('Simple Clients:', simpleClientsList)
  }

  getGoldenClients() {
    const goldenClientsList = this.clientsList.filter((client) => client instanceof GoldenClient)
    // const goldenClientsList = []
    // for (const client of this.clientsList) {
    //   if (client instanceof GoldenClient) {
    //     goldenClientsList.push(client)
    //   }
    // }
    this.goldenClientsList = goldenClientsList
    this.showClients('Golden Clients:', goldenClientsList)
  }

  showClients(typeClient, clients) {
    const listTitle = document.createElement('h3')
    listTitle.innerHTML = typeClient
    document.querySelector('.resultContainer').append(listTitle)
    const list = document.createElement('ol')
    for (let i = 0; i < clients.length; i++) {
      const item = document.createElement('li')
      item.innerText = clients[i]
      list.append(item)
    }
    document.querySelector('.resultContainer').append(list)
  }

  getTotalSum() {
    return this.clientsList.reduce((prevTotalSum, client) => prevTotalSum + client.money, 0)
  }
  toString() {
    return `Загальна сума грошей: ${this.getTotalSum()}`
  }
}


window.onload = () => {
  const clientsList = [
    new Client(1, { name: 'Kiril', fathersName: 'Ivanovich', lastName: 'Filippov' }, 1000),
    new GoldenClient(2, { name: 'Nelya', fathersName: 'Borisovna', lastName: 'Bura' }, 15000, 10000, 0.3),
    new GoldenClient(3, { name: 'Yuriy', fathersName: 'Tarasovich', lastName: 'Buriy' }, 25000, 5000, 0.3),
    new Client(4, { name: 'Artem', fathersName: 'Mihailovich', lastName: 'Pronin' }, 2500),
    new Client(5, { name: 'Katerina', fathersName: 'Ivanovna', lastName: 'Yurchuk' }, 5000),
    new GoldenClient(6, { name: 'Pavlo', fathersName: 'Serhiyovich', lastName: 'Karpenko' }, 1000, 3500, 0.2)
  ]
  const bank = new Bank(clientsList)
  bank.getSimpleClients()
  bank.getGoldenClients()
  document.querySelector('.resultContainer').append(bank)
}