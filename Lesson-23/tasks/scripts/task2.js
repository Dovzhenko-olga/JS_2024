// 1. Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор
// (050….  🡪 MTC, 096… 🡪 Kyivstar, ….)

class PhoneNumber {
  constructor(number) {
    this.number = number
  }

  [Symbol.toPrimitive](hint) {
    let result
    if (hint === 'string') {
      if (/^(050|066)/.test(this.number)) result = 'MTC'
      else if (/^067|096|098/.test(this.number)) result = 'Kyivstar'
      else if (/^063|093/.test(this.number)) result = 'Lifecell'
      else result = 'Unknown operator'
    } else result = this.number
    return result
  }
}

const num1 = new PhoneNumber('063')
console.log("Task 1:", `${num1}`)

// 2. Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць).
// Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар - загальна вартість»

class Shop {
  constructor(productList) {
    this.productList = productList
  }

  [Symbol.iterator]() {
    this.index = 0
    return this
  }

  next() {
    if (this.index < this.productList.length)
      return { done: false, value: `${this.productList[this.index++]}` }
    else return { done: true }
  }
}

class Product {
  constructor(name, price, amount) {
    this.name = name
    this.price = price
    this.amount = amount
  }

  totalPrice() {
    return this.price * this.amount
  }

  [Symbol.toPrimitive](hint) {
    let result
    switch (hint) {
      case 'number':
        result = this.totalPrice()
        break
      case `string`:
        result = `${this.name} - ${this.totalPrice()} грн.`
        break
    }
    return result
  }
}

const productList = [
  new Product('Coffe', 120, 10),
  new Product('Sweet', 70, 15),
  new Product('Milk', 50, 7),
  new Product('Tea', 76, 17)
]
const shop = new Shop(productList)

console.log("Task 2:")
for (const product of shop) {
  console.log(product)
}

// 3.  Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

function* generator(n) {
  let numberCount = 0
  while (numberCount < n) {
    let randomNumber = 2 + Math.floor(Math.random() * 99)
    if (randomNumber % 2 === 0) numberCount++
    else continue
    yield randomNumber
  }
}

const n = 10
console.log("Task 3:")
for (const number of generator(n)) {
  console.log(number)
}