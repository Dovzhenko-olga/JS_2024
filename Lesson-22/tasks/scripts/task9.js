
function filtrString(string) {
  return string.match(/[!.,;?'"()[\]{}:]/g)
  // return string.match(/\W/g)
}


window.onload = () => {
  const myString = 'Hello! How are you today? I hope everything is going well...'

  console.log(filtrString(myString))
}