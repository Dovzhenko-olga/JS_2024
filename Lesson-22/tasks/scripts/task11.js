
function filtrString(string) {
  if (/\s[0-3]\d.[01]\d.\d{4}/.test(string))
    alert('У рядку є дата')
  else alert('Дати немає.')
}


window.onload = () => {
  const myString = 'The project is due on 15.10.2024, and we need to prepare our presentation.'

  filtrString(myString)
}