if (confirm('Почати тестування?')) {
  function myFillInput() {
    const fillInput = this

    let label = fillInput.parentElement
    while (label.previousElementSibling) {
      let value = parseInt(label.lastElementChild.value)
      label = label.previousElementSibling
      if (!isNaN(value)) {
        label.lastElementChild.value = value - 1
      } else label.lastElementChild.value = ''
    }

    label = fillInput.parentElement
    while (label.nextElementSibling) {
      let value = parseInt(label.lastElementChild.value)
      label = label.nextElementSibling
      if (!isNaN(value)) {
        label.lastElementChild.value = value + 1
      } else label.lastElementChild.value = ''
    }
  }

  const inputList = document.querySelectorAll('input')
  for (const input of inputList) {
    input.oninput = myFillInput
  }
}