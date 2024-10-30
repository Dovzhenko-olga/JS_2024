class CompanyCar {

  static carRef

  constructor(driver, type, number) {
    if (CompanyCar.carRef)
      return CompanyCar.carRef

    this.driver = driver
    this.type = type
    this.number = number

    CompanyCar.carRef = this
  }

  toString() {
    return `Водій ${this.driver} на авто ${this.type} з номерами ${this.number}.`
  }
}

window.onload = () => {
  const companyCar = new CompanyCar('Victor', 'Audi', 'BI5463AH')
  document.querySelector('.result1').innerText = `Екземпляр 1 : ${companyCar}`
  const companyCarDouble = new CompanyCar('Ivan', 'Ford', 'BE4236AT')
  document.querySelector('.result2').innerText = `Екземпляр 2 : ${companyCarDouble}`
  console.log(companyCar === companyCarDouble)
}