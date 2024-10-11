function seaching() {
  const fillInput = this
  const myList = document.querySelectorAll('li')
  console.log(myList)

  for (const listEl of myList) {
    if (!listEl.innerText.toLowerCase().includes(fillInput.value.toLowerCase()))
      listEl.classList.add('visually-hidden')
    else listEl.classList.remove('visually-hidden')
  }

}

window.onload = () => {
  const input = document.querySelector('input')
  input.oninput = seaching
}