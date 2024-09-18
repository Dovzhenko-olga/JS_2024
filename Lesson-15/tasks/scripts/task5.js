if (confirm('Почати тестування?')) {
  class DanceTeacher {

    constructor(girls, boys) {
      this.girls = girls
      this.boys = boys
    }

    getRandomBoyName() {
      const randomNumber = Math.floor(Math.random() * (this.boys.length))
      return this.boys[randomNumber]
    }
    getRandomGirlName() {
      const randomNumber = Math.floor(Math.random() * (this.girls.length))
      return this.girls[randomNumber]
    }
    render() {
      alert(`Випадкова пара для танців ${this.getRandomBoyName()} та ${this.getRandomGirlName()}.`)
      // document.write(`Випадкова пара для танців ${this.getRandomBoyName()} та ${this.getRandomGirlName()}.<br>`)
    }
    run() {
      setInterval(() => this.render(), 5000)
    }
  }

  const girls = ["Olena", "Iryna", "Svitlana", "Oksana"]
  const boys = ["Andriy", "Vladislav", "Mykola", "Taras"]
  const danceTeacher = new DanceTeacher(girls, boys)
  danceTeacher.run()
}