class Company {
  constructor({ companyName, registrationNumber }) {
    this.companyName = companyName
    this.registrationNumber = registrationNumber
  }
}

class Product {
  constructor(initData) {
    this.productName = initData.productName
    this.unit = initData.unit
    this.productAmount = initData.productAmount
    this.company = new Company(initData)
  }

  toString() {
    return `${this.productName} від ${this.company.name} в наявності ${this.productAmount} ${this.unit}.`
  }
}

class Storage {
  constructor(productList) {
    this.productList = productList
  }
  addProduct(productData) {
    let isAvailable
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].productName === productData.productName && this.productList[i].company.registrationNumber === productData.registrationNumber) {
        this.productList[i].productAmount += productData.productAmount
        isAvailable = true
      }
    }
    if (!isAvailable) {
      this.productList.push(new Product(productData))
    }
  }
  deliveryProduct(productData) {
    let isAvailable
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].name === productData.name && this.productList[i].company.registrationNumber === productData.registrationNumber) {
        if (this.productList[i].productAmount >= productData.productAmount) {
          this.productList[i].productAmount -= productData.productAmount
          isAvailable = true
        }
        // else throw new Error('There are not enough products.')
      }
    }
    if (!isAvailable) {
      alert('Select another product or change the quantity.')
    }
  }
  filteredByProductName(productName) {
    const filteredArray = this.productList.filter(el => el.productName === productName)
    return filteredArray
  }
  filteredByCompanyName(companyName) {
    const filteredArray = this.productList.filter(el => el.company.companyName === companyName)
    return filteredArray
  }
}


window.onload = () => {
  const productList = [
    new Product({ productName: 'Coffe', unit: 'packet', productAmount: 12, companyName: 'Lvivska', registrationNumber: 1245456 }),
    new Product({ productName: 'Sugar', unit: 'kg', productAmount: 5, companyName: 'Sugar_company', registrationNumber: 3548454 }),
    new Product({ productName: 'Avocado', unit: 'thing', productAmount: 7, companyName: 'Avocado_company', registrationNumber: 2354746 }),
    new Product({ productName: 'Milk', unit: 'liter', productAmount: 10, companyName: 'Lactel', registrationNumber: 87984513 }),
  ]

  const storage = new Storage(productList)

  const resultContainer = document.querySelector('.resultContainer')
  for (let i = 0; i < storage.productList.length; i++) {
    const productDiv = document.createElement('div')
    productDiv.innerText = storage.productList[i]
    resultContainer.append(productDiv)
  }

  storage.addProduct({ productName: 'Coffe', unit: 'packet', productAmount: 3, companyName: 'Lvivska', registrationNumber: 1245456 })
  storage.addProduct({ productName: 'Latte', unit: 'packet', productAmount: 7, companyName: 'Lvivska', registrationNumber: 1245456 })
  storage.addProduct({ productName: 'Milk', unit: 'liter', productAmount: 10, companyName: 'Farm', registrationNumber: 2115685 })
  storage.deliveryProduct({ productName: 'Avocado', unit: 'thing', productAmount: 10, companyName: 'Avocado_company', registrationNumber: 2354746 })
  storage.deliveryProduct({ productName: 'Avocado', unit: 'thing', productAmount: 3, companyName: 'Avocado_company', registrationNumber: 2354746 })
  console.log(storage)

  console.log(storage.filteredByProductName('Milk'))
  console.log(storage.filteredByCompanyName('Lvivska'))
}