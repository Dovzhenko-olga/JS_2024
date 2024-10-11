class Tank {
  constructor(imagesObj, speed, maxTop, cssObj) {
    this.imagesObj = imagesObj
    this.speed = speed
    this.maxTop = maxTop
    this.cssObj = cssObj
    this.setRandomLeftPosition()
  }

  setRandomLeftPosition(min = 1, max = 15) {
    this.randomLeftPosition = (min + Math.floor(Math.random() * (max - min + 1))) * 100
  }

  moveTank() {
    this.top = parseInt(this.tank.style.top) + this.speed

    if (this.top > this.maxTop) {
      this.tank.style.top = 0
      this.setRandomLeftPosition()
    } else this.tank.style.top = `${this.top}px`
  }
  onClick() {
    clearInterval(this.intervalId)
    this.tank.setAttribute('src', this.imagesObj.blow)
    setTimeout(() => {
      this.tank.remove()
    }, 500)
  }

  render(containerSelector) {
    const tank = document.createElement('img')
    tank.setAttribute('src', this.imagesObj.tank)
    tank.className = this.cssObj.containerClass
    tank.style.top = 0
    tank.style.left = `${this.randomLeftPosition}px`
    this.tank = tank
    this.tank.onclick = this.onClick.bind(this)
    document.querySelector(containerSelector).append(this.tank)

    this.intervalId = setInterval(() => {
      this.moveTank()
    }, 1000)
  }
}



window.onload = () => {

  const maxTop = window.innerHeight

  const imagesObj = {
    tank: './img/tank.png',
    blow: './img/blow.png',
  }

  setInterval(() => {
    const t = new Tank(imagesObj, 35, maxTop, {
      containerClass: 'tank',
    })
    t.render('.container')
  }, 1000)

}