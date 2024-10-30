class ArrayOperations {

  static numberOfPositive(list) {
    return list.reduce((acc, item) => item > 0 ? acc + 1 : acc, 0)
  }

  static numberOfNegative(list) {
    return list.reduce((acc, item) => item < 0 ? acc + 1 : acc, 0)
  }

  static quantityOfSomeNumber(list, number) {
    return list.reduce((acc, item) => item === number ? acc + 1 : acc, 0)
  }
}

const list = [1, 5, -9, 7, 12, 58, 64, -21, 7, -12, -7, 5, 1, 12, 7]

console.log(ArrayOperations.numberOfPositive(list))
console.log(ArrayOperations.numberOfNegative(list))
console.log(ArrayOperations.quantityOfSomeNumber(list, 7))
