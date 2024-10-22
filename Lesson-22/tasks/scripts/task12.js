
function filtrString(string) {
  const listOfNumbers = string.match(/\d{2}/g)
  return listOfNumbers.length
}


window.onload = () => {
  const myString = 'In the competition, 9 teams participated, and the score was 45 to 78.'

  console.log(filtrString(myString))
}