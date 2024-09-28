if (confirm('Почати тестування?')) {
  class Company {
    constructor(initName, initMonth, initYear) {
      this.name = initName
      this.date = {
        month: initMonth,
        year: initYear
      }
      this.services = []
      this.branches = []
    }

    getAges(currentMonth, currentYear) {
      return currentMonth < this.date.month
        ? currentYear - this.date.year - 1
        : currentYear - this.date.year
    }

    getBranchesInCity(city) {
      const branchesInCity = []
      for (const branche of this.branches) {
        if (branche.city === city) {
          const address = `${branche.street}, ${branche.number}`
          branchesInCity.push(address)
        }
      }
      return branchesInCity
    }

    getPossibleServices(money, term) {
      const possibleServices = []
      for (const service of this.services) {
        if (service.price <= money && service.term <= term)
          possibleServices.push(service.title)
      }
      return possibleServices
    }
    toString() {
      return `Компанія ${this.name} заснована у ${this.date.month} місяці ${this.date.year} року.`
    }
  }

  class Service {
    constructor(title, price, term) {
      this.title = title
      this.price = price
      this.term = term
    }
  }

  class Branches {
    constructor(country, city, street, number) {
      this.country = country
      this.city = city
      this.street = street
      this.number = number
    }
  }

  const company = new Company('EPAM Systems', 7, 1993)
  document.write(`<div>${company}</div>`)

  company.services.push(new Service("Website", 10000, 15))
  company.services.push(new Service("Project", 5000, 5))
  company.services.push(new Service("Mobile_App", 20000, 30))

  company.branches.push(new Branches('Ukraine', 'Kyiv', 'Prakhovy family', 54))
  company.branches.push(new Branches('Ukraine', 'Vinnytsia', 'Polytechnic', 2))
  company.branches.push(new Branches('Ukraine', 'Vinnytsia', 'Ovodova', 21))
  company.branches.push(new Branches('Ukraine', 'Chernivtsi', 'Heroiv of Maidan', 150))
  company.branches.push(new Branches('USA', 'Newtown', 'University Drive', 41))
  console.log(company)

  const ages = company.getAges(9, 2024)
  document.write(`<div>Компанія працює вже ${ages} рік.</div>`)

  const city = 'Vinnytsia'
  const branchesInCity = company.getBranchesInCity(city)
  document.write(`<div>Філіали у місті ${city}:<br> ${branchesInCity.join('; ')}</div>`)
  const money = 15000
  const term = 20
  const possibleServices = company.getPossibleServices(money, term)
  document.write(`<div>За ${term} днів, маючи ${money} грн можна скористатися послугами:<br> ${possibleServices.join('; ')}</div>`)

}