if (confirm('Почати тестування?')) {
  function myClickOnDiv(clickedDiv) {
    let div = clickedDiv

    while (div.nextElementSibling) {
      div = div.nextElementSibling
      div.style.color = 'red'
    }
  }

  const container = document.querySelector('.container')
  container.onclick = function (e) {
    if (e.target.className === 'myHello')
      myClickOnDiv(e.target)
    // const divList = document.querySelectorAll('.myHello')
    // for (const div of divList) {
    //   div.onclick = myClickOnDiv
  }
}