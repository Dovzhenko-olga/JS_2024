if (confirm('Почати тестування?')) {
  const shootingGallery = {
    field: [[1, 0, 0], [0, 0, 1], [0, 1, 0]],

    shoot: function () {
      let userRow
      let userCol
      do {
        userRow = parseInt(prompt(`Введіть першу координату пострілу від 0 до ${this.field.length - 1}`, '1'))
        if (isNaN(userRow) || userRow < 0 || userRow > this.field.length - 1)
          alert(`Введіть корректне значення від 0 до ${this.field.length - 1}`)
      } while (isNaN(userRow) || userRow < 0 || userRow > this.field.length - 1)

      do {
        userCol = parseInt(prompt(`Введіть другу координату пострілу від 0 до ${this.field[userRow].length - 1}`, '1'))
        if (isNaN(userCol) || userCol < 0 || userCol > this.field[userRow].length - 1)
          alert(`Введіть корректне значення від 0 до ${this.field[userRow].length - 1}`)
      } while (isNaN(userCol) || userCol < 0 || userCol > this.field[userRow].length - 1)

      return [userRow, userCol]
    },

    showField: function () {
      document.write(`<div>${this.field.join('<br>')}</div>`)
    }
  }
  shootingGallery.showField()
  const [userRow, userCol] = shootingGallery.shoot()
  document.write(`<div>Позиція пострілу: x-${userRow} y-${userCol}.</div>`)
}