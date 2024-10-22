
function filtrString(string) {
  const reg = /\d{4}-\d{4}-\d{4}-\d{4}/g
  if (reg.test(string))
    alert('У рядку є номер карти.')
  else alert('Немає.')
  return string.match(reg)
}


window.onload = () => {
  const myString = 'Please provide your card details. My first card number is 4532-1234-5678-9010, and my second card number is 6011-1234-5678-9010.'

  console.log(filtrString(myString))
}