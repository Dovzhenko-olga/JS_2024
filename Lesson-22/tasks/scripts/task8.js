
function filtrString(string) {
  return string.match(/\d+/g)
}


window.onload = () => {
  const myString = 'The year is 2023 and I have 5 apples and 3 oranges.'

  console.log(filtrString(myString))
}