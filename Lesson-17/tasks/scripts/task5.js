class MultChecker {
  constructor() {
    this.firstNumber = 1
    this.secondNumber = 1
    this.operation = '*'
  }

  getRandomNumber() {
    return 2 + Math.floor(Math.random() * 8)
  }

  checkMult() {
    this.firstNumber = this.getRandomNumber()
    this.secondNumber = this.getRandomNumber()
    const userAnswer = parseInt(prompt(`${this.firstNumber} помножити ${this.secondNumber} буде?`))
    if (userAnswer === this.firstNumber * this.secondNumber) {
      alert('Відповідь правильна!')
      this.userAnswer = userAnswer
      this.correctAnswer = userAnswer
    }
    else {
      alert('Відповідь невірна.')
      this.userAnswer = userAnswer
      this.correctAnswer = this.firstNumber * this.secondNumber
    }
  }
}

class AddChecker {
  constructor() {
    this.firstNumber = 1
    this.secondNumber = 1
    this.operation = '+'
  }

  getRandomNumber(minNumber = 1, maxNumber = 100) {
    return minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
  }

  checkSum(minNumber, maxNumber) {
    this.firstNumber = this.getRandomNumber(minNumber, maxNumber)
    this.secondNumber = this.getRandomNumber(minNumber, maxNumber)
    const userAnswer = parseInt(prompt(`${this.firstNumber} додати ${this.secondNumber} буде?`))
    if (userAnswer === this.firstNumber + this.secondNumber) {
      alert('Відповідь правильна!')
      this.userAnswer = userAnswer
      this.correctAnswer = userAnswer
    }
    else {
      alert('Відповідь невірна.')
      this.userAnswer = userAnswer
      this.correctAnswer = this.firstNumber + this.secondNumber
    }
  }
}

class TestData {
  showTestRes({ firstNumber, secondNumber, operation, userAnswer, correctAnswer }) {
    return `firstNumber ${firstNumber}, secondNumber ${secondNumber}, operation ${operation}, userAnswer ${userAnswer}, correctAnswer ${correctAnswer}.`
  }
}

class History {

  static historyRef

  constructor() {
    if (History.historyRef)
      return History.historyRef

    this.testsList = []

    History.historyRef = this
  }

  showHistory() {
    for (let i = 1; i <= History.historyRef.testsList.length; i++) {
      const example = History.historyRef.testsList[i - 1]
      const exampleDiv = document.createElement('div')
      const testData = new TestData()
      exampleDiv.innerText = `${i}. ${testData.showTestRes(example)}`
      document.querySelector('.resultContainer').append(exampleDiv)
    }
  }
}

class TestManager {
  getRandomOperation() {
    if (Math.floor(Math.random() * 2)) {
      const multChecker = new MultChecker()
      multChecker.checkMult()
      return multChecker
    }
    else {
      const addChecker = new AddChecker()
      addChecker.checkSum()
      return addChecker
    }
  }

  getExample(exampleNumber) {
    let exampleCount = 0
    let intervalId = setInterval(() => {
      let randomExample = this.getRandomOperation()
      History.historyRef.testsList.push(randomExample)
      exampleCount++
      if (exampleCount === exampleNumber) {
        clearInterval(intervalId)
        History.historyRef.showHistory()
      }
    }, 1000)
  }
}

window.onload = () => {

  new History()
  const manager = new TestManager()
  manager.getExample(4)

  // const multChecker1 = new MultChecker()
  // multChecker1.checkMult()
  // console.log(multChecker1)

  // const addChecker1 = new AddChecker()
  // addChecker1.checkSum(1, 100)
  // console.log(addChecker1)

}