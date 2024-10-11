class Snow {
  constructor(snowImage, maxTop) {
    this.snowImage = snowImage
    this.maxTop = maxTop
    this.getRandomLeftPosition()
    this.getRandomSpeed()
  }

  getRandomSpeed(min = 10, max = 100) {
    this.randomSpeed = min + Math.floor(Math.random() * (max - min + 1))
  }

  getRandomLeftPosition(min = 1, max = 15) {
    this.randomLeftPosition = (min + Math.floor(Math.random() * (max - min + 1))) * 100
  }

  moveSnow() {
    this.top = parseInt(this.snow.style.top) + this.randomSpeed

    if (this.top > this.maxTop) {
      this.snow.style.top = 0
    } else this.snow.style.top = `${this.top}px`
  }

  render(containerSelector) {
    const snow = document.createElement('span')
    snow.innerHTML = this.snowImage

    snow.style.position = 'absolute'
    snow.style.top = 0
    snow.style.left = `${this.randomLeftPosition}px`
    this.snow = snow

    document.querySelector(containerSelector).append(this.snow)
    setInterval(() => {
      this.moveSnow()
    }, 1000)
  }
}

window.onload = () => {
  const maxTop = window.innerHeight
  const snow = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512">
<g id="icomoon-ignore">
</g>
<path fill="#5e5cf1" d="M464 208c-14.214 0-26.979 6.183-35.768 16h-94.978l67.159-67.159c13.156 0.728 26.555-3.927 36.605-13.978 18.745-18.745 18.745-49.137 0-67.882s-49.137-18.745-67.883 0c-10.051 10.051-14.705 23.449-13.978 36.605l-67.157 67.159v-94.977c9.817-8.789 16-21.554 16-35.768 0-26.51-21.49-48-48-48s-48 21.49-48 48c0 14.214 6.183 26.979 16 35.768v94.977l-67.159-67.159c0.727-13.156-3.928-26.555-13.979-36.605-18.745-18.745-49.137-18.745-67.882 0s-18.745 49.137 0 67.882c10.051 10.051 23.449 14.706 36.606 13.978l67.16 67.159h-94.978c-8.789-9.817-21.554-16-35.768-16-26.51 0-48 21.49-48 48s21.49 48 48 48c14.214 0 26.979-6.183 35.768-16h94.978l-67.159 67.159c-13.157-0.728-26.555 3.927-36.606 13.978-18.745 18.746-18.745 49.138 0 67.883s49.137 18.745 67.882 0c10.051-10.051 14.706-23.449 13.979-36.605l67.158-67.16v94.978c-9.817 8.788-16 21.554-16 35.768 0 26.51 21.49 48 48 48s48-21.49 48-48c0-14.214-6.183-26.979-16-35.768v-94.978l67.159 67.159c-0.728 13.156 3.927 26.555 13.978 36.605 18.746 18.745 49.138 18.745 67.883 0s18.745-49.137 0-67.883c-10.051-10.051-23.449-14.705-36.605-13.978l-67.16-67.158h94.978c8.788 9.817 21.554 16 35.768 16 26.51 0 48-21.49 48-48s-21.491-48-48.001-48z"></path>
</svg>`

  for (let i = 0; i < 10; i++) {
    const s = new Snow(snow, maxTop)
    s.render('.container')
  }
}




// window.onload = () => {
//   const snow = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512">
// <g id="icomoon-ignore">
// </g>
// <path fill="#5e5cf1" d="M464 208c-14.214 0-26.979 6.183-35.768 16h-94.978l67.159-67.159c13.156 0.728 26.555-3.927 36.605-13.978 18.745-18.745 18.745-49.137 0-67.882s-49.137-18.745-67.883 0c-10.051 10.051-14.705 23.449-13.978 36.605l-67.157 67.159v-94.977c9.817-8.789 16-21.554 16-35.768 0-26.51-21.49-48-48-48s-48 21.49-48 48c0 14.214 6.183 26.979 16 35.768v94.977l-67.159-67.159c0.727-13.156-3.928-26.555-13.979-36.605-18.745-18.745-49.137-18.745-67.882 0s-18.745 49.137 0 67.882c10.051 10.051 23.449 14.706 36.606 13.978l67.16 67.159h-94.978c-8.789-9.817-21.554-16-35.768-16-26.51 0-48 21.49-48 48s21.49 48 48 48c14.214 0 26.979-6.183 35.768-16h94.978l-67.159 67.159c-13.157-0.728-26.555 3.927-36.606 13.978-18.745 18.746-18.745 49.138 0 67.883s49.137 18.745 67.882 0c10.051-10.051 14.706-23.449 13.979-36.605l67.158-67.16v94.978c-9.817 8.788-16 21.554-16 35.768 0 26.51 21.49 48 48 48s48-21.49 48-48c0-14.214-6.183-26.979-16-35.768v-94.978l67.159 67.159c-0.728 13.156 3.927 26.555 13.978 36.605 18.746 18.745 49.138 18.745 67.883 0s18.745-49.137 0-67.883c-10.051-10.051-23.449-14.705-36.605-13.978l-67.16-67.158h94.978c8.788 9.817 21.554 16 35.768 16 26.51 0 48-21.49 48-48s-21.491-48-48.001-48z"></path>
// </svg>`
//   const mySnow = document.querySelectorAll('li')

//   function getRandomSpeed(min = 10, max = 50) {
//     return min + Math.floor(Math.random() * (max - min + 1))
//   }
//   function getRundomLeftPosition(min = 1, max = 15) {
//     return (min + Math.floor(Math.random() * (max - min + 1))) * 100
//   }

//   function getSnow(mySnow) {
//     for (let i = 0; i < mySnow.length; i++) {
//       mySnow[i].innerHTML = `${snow}`
//       mySnow[i].style.position = 'absolute'
//       mySnow[i].style.top = 0
//       mySnow[i].style.left = `${getRundomLeftPosition()}px`
//     }
//   }
//   getSnow(mySnow)

//   function moveSnow(snowList) {
//     const maxTop = window.innerHeight
//     for (let i = 0; i < snowList.length; i++) {
//       newPosition = parseInt(snowList[i].style.top) + getRandomSpeed()
//       snowList[i].style.top = `${newPosition}px`
//       if (parseInt(snowList[i].style.top) > maxTop) {
//         snowList[i].style.top = 0
//       }
//     }
//   }
//   setInterval(() => moveSnow(mySnow), 1000)
// }
