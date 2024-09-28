if (confirm('Почати тестування?')) {
  class TDate {
    #day
    #month
    #year

    constructor(initDay, initMonth, initYear) {
      this.Day = initDay
      this.Month = initMonth
      this.Year = initYear
    }

    get Day() {
      return this.#day
    }
    set Day(newDay) {

      if (newDay < 1 || newDay > 31)
        throw new Error(`Значення днів ${newDay} не є коректним!!!`)

      this.#day = newDay
    }

    get Month() {
      return this.#month
    }
    set Month(newMonth) {

      if (newMonth < 1 || newMonth > 12)
        throw new Error(`Значення місяців ${newMonth} не є коректним!!!`)

      this.#month = newMonth
    }

    get Year() {
      return this.#year
    }
    set Year(newYear) {

      if (newYear < 1)
        throw new Error(`Значення місяців ${newYear} не є коректним!!!`)

      this.#year = newYear
    }

    subtractionDays(days) {
      const totalDays = this.Day - days
      if (totalDays < 1) {
        const months = Math.ceil(Math.abs((totalDays - 1) / 31))
        this.Day = 31 - (Math.abs(totalDays) % 31)
        this.subtractionMonths(months)
      }
      else this.Day = totalDays
    }

    additionDays(days) {
      const totalDays = this.Day + days
      if (totalDays > 31) {
        const months = Math.floor(totalDays / 31)
        this.Day = ((totalDays - 1) % 31) + 1
        this.additionMonths(months)
      }
      else this.Day = totalDays
    }

    subtractionMonths(months) {
      const totalMonth = this.Month - months
      if (totalMonth < 1) {
        const years = Math.ceil(Math.abs((totalMonth - 1) / 12))
        this.Month = 12 - (Math.abs(totalMonth) % 12)
        this.subtractionYears(years)
      }
      else this.Month = totalMonth
    }

    additionMonths(months) {
      const totalMonth = this.Month + months
      if (totalMonth > 12) {
        const years = Math.floor(totalMonth / 12)
        this.Month = ((totalMonth - 1) % 12) + 1
        this.additionYears(years)
      }
      else this.Month = totalMonth
    }

    subtractionYears(years) {
      this.Year -= years
    }

    additionYears(years) {
      this.Year += years
    }

    toString() {
      return `${this.Day}.${this.Month}.${this.Year}`
    }
  }

  try {
    const date = new TDate(26, 9, 2024)
    document.write(`<div>${date}</div>`)
    date.additionDays(6)
    document.write(`<div>Додаємо дні ${date}</div>`)
    date.subtractionDays(31)
    document.write(`<div>Віднімаємо дні ${date}</div>`)
    date.additionMonths(4)
    document.write(`<div>Додаємо місяці ${date}</div>`)
    date.subtractionMonths(13)
    document.write(`<div>Віднімаємо місяці ${date}</div>`)
    date.additionYears(5)
    document.write(`<div>Додаємо роки ${date}</div>`)
    date.subtractionYears(3)
    document.write(`<div>Віднімаємо роки ${date}</div>`)
  } catch (error) {
    console.log(error.message)
  }
}