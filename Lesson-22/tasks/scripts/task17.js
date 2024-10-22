
function filtrString() {
  const name = document.querySelector('.myInput').value

  document.querySelector('.result').innerText = name.replace(/\s/, '-')
}


window.onload = () => {
  document.querySelector('.myInput').oninput = filtrString
}