class Star {
  constructor(starUrl, minWidth, maxWidth) {
    this.starUrl = starUrl
    this.minWidth = minWidth
    this.maxWidth = maxWidth
    this.setRandomPosition()
  }

  setRandomPosition() {
    this.left = Math.random() * 100
    this.top = Math.random() * 100
  }
  setRandomGrowingIndex() {
    return 1 + Math.random()
  }
  setRandomInterval() {
    return (1 + Math.floor(Math.random() * 10)) * 300
  }

  moving() {
    this.setRandomPosition()
    this.star.style.left = `${this.left}%`
    this.star.style.top = `${this.top}%`
  }

  growing() {
    this.width = parseInt(this.star.style.width) * this.setRandomGrowingIndex()
    if (this.width > this.maxWidth) {
      this.star.style.width = this.minWidth + 'px'
      this.moving()
    } else this.star.style.width = this.width + 'px'
  }

  render(containerSelector) {
    const star = document.createElement('img')
    star.setAttribute('src', this.starUrl)
    star.style.width = this.minWidth + 'px'
    star.style.position = 'absolute'
    star.style.top = `${this.left}%`
    star.style.left = `${this.top}%`
    this.star = star
    document.querySelector(containerSelector).append(this.star)

    setInterval(() => {
      this.growing()
    }, this.setRandomInterval())
  }
}



window.onload = () => {
  const url = './img/star.png'

  for (let i = 0; i < 7; i++) {
    const s = new Star(url, 25, 250)
    s.render('.container')
  }
}