class Button {
  constructor(btnTitle, cssObj) {
    this.btnTitle = btnTitle
    this.cssObj = cssObj
  }
  render(containerSelector) {
    const btn = document.createElement('button')
    btn.innerText = this.btnTitle
    btn.className = this.cssObj.btnClass
    this.btn = btn
    document.querySelector(containerSelector).append(this.btn)
  }
}
class Input {
  constructor(inputPlaceholder, cssObj) {
    this.inputPlaceholder = inputPlaceholder
    this.cssObj = cssObj
  }
  render(containerSelector) {
    const input = document.createElement('input')
    input.placeholder = this.inputPlaceholder
    input.className = this.cssObj.inputClass
    this.input = input
    document.querySelector(containerSelector).append(this.input)
  }
}



window.onload = () => {
  const cssObj = {
    btnClass: 'myBtn',
    inputClass: 'myInput'
  }
  for (let i = 1; i < 10; i++) {
    const btn = new Button(`Button${i}`, cssObj)
    btn.render('.container')
    const input = new Input(`Input${i}`, cssObj)
    input.render('.container')
  }
  const container = document.querySelector('.container')
  let btnClick = 0
  let inputClick = 0
  container.onclick = function (e) {
    if (e.target.tagName === 'BUTTON') {
      btnClick++
      document.querySelector('.btnClick').innerText = btnClick
    }
    if (e.target.tagName === 'INPUT') {
      inputClick++
      document.querySelector('.inputClick').innerText = inputClick
    }
  }
}