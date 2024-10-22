
function filtrList(list) {
  return list.filter(string => !(/\d/.test(string)))
  // return list.filter(string => !(/[0-9]/.test(string)))
}


window.onload = () => {
  const stringList = [
    "Hello",
    "123",
    "World",
    "45.67",
    "JavaScript",
    "2023",
    "OpenAI",
    "98 apples",
    "No numbers here"
  ]

  console.log(filtrList(stringList))
}