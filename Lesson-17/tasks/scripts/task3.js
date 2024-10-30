class Reminder {

  static remindRef

  constructor(event, time) {
    if (Reminder.remindRef)
      return Reminder.remindRef

    this.event = event
    this.time = time
    this.count = 0

    Reminder.remindRef = this
  }

  reminding() {
    const intervalId = setInterval(() => {
      this.count++
      alert(`${this.event} Нагадали ${this.count} раз(ів).`)
    }, this.time
    )
    this.intervalId = intervalId
  }
  stopRemind() {
    clearInterval(this.intervalId)
    this.count = 0
  }
  changeEvent(newEvent) {
    this.event = newEvent
  }
}

window.onload = () => {
  const reminder = new Reminder('Drink coffe.', 500)
  reminder.reminding()
  setTimeout(() => reminder.changeEvent('Eat cake.'), 2000)
  setTimeout(() => reminder.stopRemind(), 5000)
}