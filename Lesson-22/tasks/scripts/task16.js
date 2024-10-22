
function filtrString(string) {
  if (/^\+38/.test(string))
    alert('Це український номер телефону.')
  else alert('Цей номер не є українським.')
}


window.onload = () => {
  const myString = '+38066-654-15-36'

  filtrString(myString)
}