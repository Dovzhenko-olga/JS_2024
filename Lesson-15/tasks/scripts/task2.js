if (confirm('Почати тестування?')) {
  const car = {
    model: 'Hyundai',
    tank: 42,
    gasoline: 10,
    seats: 5,
    passengers: 2,
    refueling: function () {
      let liters
      do {
        liters = parseInt(prompt(`Введіть кількість літрів для заправки до ${this.tank - this.gasoline}`, '5'))
        if (isNaN(liters) || liters <= 0 || liters > this.tank - this.gasoline)
          alert(`Введіть коректне значення більше 0 і до ${this.tank - this.gasoline} літрів.`)
      } while (isNaN(liters) || liters <= 0 || liters > this.tank - this.gasoline)
      this.gasoline += liters
      return liters
    },
    getPassengers: function () {
      document.write(`<div>В машині ${this.passengers} пасажир(ів).</div>`)
    },
    sitInCar: function () {
      let newPassengers
      do {
        newPassengers = parseInt(prompt(`Введіть кількість пасажирів, які сядуть в машину, до ${this.seats - this.passengers - 1}`, '2')) // -1 місце для водія :))
        if (isNaN(newPassengers) || newPassengers <= 0 || newPassengers > this.seats - this.passengers - 1)
          alert(`Введіть коректне значення більше 0 і до ${this.seats - this.passengers - 1}.`)
      } while (isNaN(newPassengers) || newPassengers <= 0 || newPassengers > this.seats - this.passengers - 1)
      this.passengers += newPassengers
      return newPassengers
    },
    getOut: function () {
      let lessPassengers
      do {
        lessPassengers = parseInt(prompt(`Введіть кількість пасажирів з ${this.passengers}, які вийдуть з машини`, '2'))
        if (isNaN(lessPassengers) || lessPassengers <= 0 || lessPassengers > this.passengers)
          alert(`Введіть коректне значення більше 0 і до ${this.passengers}.`)
      } while (isNaN(lessPassengers) || lessPassengers <= 0 || lessPassengers > this.passengers);
      this.passengers -= lessPassengers
      return lessPassengers
    }
  }
  const liters = car.refueling()
  document.write(`<div>Після заправки на ${liters} літрів у баку ${car.gasoline}.</div>`)
  car.getPassengers()
  const newPassengers = car.sitInCar()
  document.write(`<div>Коли сіли ${newPassengers} людей, в машині ${car.passengers} пасажири.</div>`)
  const outPassengers = car.getOut()
  document.write(`<div>Коли вийшли ${outPassengers} людей, в машині ${car.passengers} пасажир(и).</div>`)
}