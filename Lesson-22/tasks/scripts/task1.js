
function onLoad() {
  let bgColor = localStorage.getItem('bgColor')

  if (bgColor) {
    document.querySelector('input').value = bgColor
    document.body.style.background = bgColor
  }
  const count = sessionStorage.getItem('changeAmount')
  if (count) showChanges(count)
}

function showChanges(count) {
  const changesDiv = document.querySelector('.changesCount')
  changesDiv.innerText = `Ви змінювали колір фону ${count} раз(ів).`
}
function changeCount() {
  let count = sessionStorage.getItem('changeAmount')
  if (count) count++
  else count = 1
  sessionStorage.setItem('changeAmount', count)
  showChanges(count)
}
function changeBg(e) {
  const newColor = e.target.value
  document.body.style.background = newColor
  localStorage.setItem('bgColor', newColor)
  changeCount()
}


window.onload = () => {
  onLoad()
  document.querySelector('input').onchange = changeBg
  window.addEventListener('storage', onLoad)
}