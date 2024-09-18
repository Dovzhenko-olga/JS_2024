if (confirm('Почати тестування?')) {
  class MultChecker {
    constructor(chekingNumber) {
      this.chekingNumber = chekingNumber
      this.correctAnswers = 0
      this.wrongAnswers = 0
    }

    generateExample() {
      const multiplier = 1 + Math.floor(Math.random() * 9)
      const userAnswer = parseInt(prompt(`${this.chekingNumber} * ${multiplier} дорівнює:`))
      return [multiplier, userAnswer]
    }

    isCorrect(multiplier, userAnswer) {
      const isAnswerCorrect = userAnswer === multiplier * this.chekingNumber
      if (isAnswerCorrect) this.correctAnswers++
      else this.wrongAnswers++
      return isAnswerCorrect
    }
    render(multiplier, userAnswer) {
      document.write(`<div>${this.chekingNumber}*${multiplier} = ${this.chekingNumber * multiplier}. Ваша відповідь ${userAnswer} ${this.isCorrect(multiplier, userAnswer) ? 'правильна' : 'неправильна'}.</div>`)
    }
    statistic(attempts) {
      document.write(`<div>З ${attempts} спроб Ви дали ${this.correctAnswers} правильних відповідей і ${this.wrongAnswers} неправильних.</div>`)
    }
  }
  const example = new MultChecker(6)
  let attempts = 5
  for (let i = 0; i < attempts; i++) {
    const [multiplier, userAnswer] = example.generateExample()
    example.render(multiplier, userAnswer)
  }
  example.statistic(attempts)
}