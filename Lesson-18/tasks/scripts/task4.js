if (confirm('Почати тестування?')) {
  const wishesList = ['cake', 'coffee', 'candy', 'mango', 'meat', 'tomato']
  function getWishes(wishesList) {
    const randomWishes = []
    for (let i = 0; i < 3; i++) {
      const rundomNumber = Math.floor(Math.random() * ((wishesList.length - 1) + 1))
      randomWishes.push(wishesList[rundomNumber])
    }

    for (let i = 0; i < randomWishes.length; i++) {
      const myDiv = document.createElement('div')
      myDiv.innerText = randomWishes[i]
      document.getElementById('myWishes').append(myDiv)
    }

    // let randomWishes = ``
    // for (let i = 0; i < 3; i++) {
    //   const rundomNumber = Math.floor(Math.random() * ((wishesList.length - 1) + 1))
    //   randomWishes += `<div>${wishesList[rundomNumber]}</div>`
    // }

    // document.getElementById('myWishes').innerHTML = randomWishes
  }

  window.onload = function () {
    getWishes(wishesList)
  }
}