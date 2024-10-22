
function filtrString(string) {

  const splitString = string.split(/[!.,;?'"()[\]{}:]/)
  return splitString.filter(el => el.length > 0)
}


window.onload = () => {
  const myString = 'Hello! How are you today? I hope everything is going well...'

  console.log(filtrString(myString))
}