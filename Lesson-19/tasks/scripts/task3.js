if (confirm('Почати тестування?')) {
  function getList() {
    const listElemNumber = 1 + Math.floor(Math.random() * 10)

    const myList = document.createElement('ol')
    for (let i = 0; i < listElemNumber; i++) {
      const listElem = document.createElement('li')
      listElem.innerText = 1 + Math.floor(Math.random() * 100)
      myList.append(listElem)
    }
    return myList
  }
  const container = document.querySelector('.container')
  for (let i = 0; i < 5; i++) {
    container.append(getList())
  }

  function painting() {
    const globalElementsList = document.querySelectorAll('ol')
    for (const elem of globalElementsList) {
      if (elem.children.length % 2 === 0) {
        elem.style.color = 'green'
      }
      else elem.style.color = 'red'
    }
  }

  window.onload = function () {
    document.querySelector('button').onclick = painting
  }
}