class House {
  constructor(x, y, url, interval) {
    this.x = x
    this.y = y
    this.url = url
    this.interval = interval
  }

  render() {
    const container = document.querySelector('.resultContainer')
    const myImg = document.createElement('img')
    myImg.setAttribute('src', `${this.url}`)
    myImg.style.width = '450px'
    myImg.style.position = 'absolute'
    myImg.style.left = `${this.x}%`
    myImg.style.top = `${this.y}%`
    this.myImg = myImg
    container.append(myImg)
  }

  updeted() {
    setInterval(
      () => {
        this.myImg.style.transform = `scale(${Math.random()})`
      },
      this.interval
    )
  }
}

class Dog extends House {
  constructor(x, y, url, interval) {
    super(x, y, url, interval)
  }
  getRandomPosition() {
    return Math.random() * 90
  }

  updeted() {
    setInterval(
      () => {
        this.myImg.style.left = `${this.getRandomPosition()}%`
      },
      this.interval
    )
  }
}

class Bird extends House {
  constructor(x, y, url, interval) {
    super(x, y, url, interval)
  }
  getRandomPosition() {
    this.x = Math.random() * 90
    this.y = Math.random() * 90
  }

  updeted() {
    setInterval(
      () => {
        this.getRandomPosition()
        this.myImg.style.left = `${this.x}%`
        this.myImg.style.top = `${this.y}%`
      },
      this.interval
    )
  }
}


window.onload = () => {

  const houseImg = 'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D'
  const dogImg = 'https://vogdog.com/wp-content/uploads/2024/05/scale_2400-6-1264x957.jpeg.webp'
  const birdImg = 'https://www.allaboutbirds.org/news/wp-content/uploads/2024/09/TOC-Autumn24-Ruby-crowned_Kinglet-Christopher_T-ML609692481-FI-480x360.jpg'

  // const house = new House(30, 20, houseImg, 500)
  // house.render()
  // house.updeted()
  // const dog = new Dog(30, 20, dogImg, 500)
  // dog.render()
  // dog.updeted()
  const bird = new Bird(30, 20, birdImg, 500)
  bird.render()
  bird.updeted()

}