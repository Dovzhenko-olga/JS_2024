if (confirm('Почати тестування?')) {
  const obj1 = {
    arr: [1, 13, 7, 24, 8, 15],
    sum: function () {
      return this.arr.reduce((sum, el) => sum + el)
    }
  }
  const obj2 = {
    arr: [5, 3, 17, 4, 12, 10],
    product: function (min, max) {
      return this.arr.reduce((prod, el) =>
        el > min && el < max
          ? prod * el
          : prod
        , 1)
    }
  }
  document.write(`<div>Сума елементів першого об'єкту: ${obj1.sum()}</div>`)
  document.write(`<div>Добуток елементів другого об'єкту: ${obj2.product(1, 10)}</div>`)
  document.write(`<div>Сума елементів другого об'єкту: ${obj1.sum.call(obj2)}</div>`)
  document.write(`<div>Добуток елементів першого об'єкту: ${obj2.product.apply(obj1, [5, 15])}</div>`)
}