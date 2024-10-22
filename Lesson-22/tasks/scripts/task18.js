
function filtrString() {
  const date = document.querySelector('.myInput').value

  document.querySelector('.result').innerText = date.replace(/[.]/g, '/')
}


window.onload = () => {
  document.querySelector('.myInput').oninput = filtrString
}