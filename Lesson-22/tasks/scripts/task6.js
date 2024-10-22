
function filtrList(list) {
  return list.filter(string => !(/[aeiouy]/i.test(string)))
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
    "89HJZ",
    "98 apples",
    "No numbers here"
  ]

  console.log(filtrList(stringList))
}