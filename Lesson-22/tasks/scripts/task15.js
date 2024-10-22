
function filtrString(string) {
  return string.match(/\b(202[2-9]|20[3-9][0-9])\b/g)
}


window.onload = () => {
  const myString = 'In 2020, many events were canceled. In 2022, we saw a return to normal. By 2025, I hope to travel again.'

  console.log(filtrString(myString))
}