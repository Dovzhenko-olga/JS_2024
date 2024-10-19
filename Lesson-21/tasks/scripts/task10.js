function transformDate(dateInString) {
  const [day, month, year] = dateInString.split('.')
  const birthDate = new Date(year, month - 1, day)
  return birthDate
}

function getOldestStudent(studentsList) {
  return studentsList.reduce((prevStudent, student) => (transformDate(student.birthDate) > transformDate(prevStudent.birthDate) ? student : prevStudent))
}

window.onload = () => {
  const students = [
    { name: "Вікторія", birthDate: "15.04.2001" },
    { name: "Максим", birthDate: "22.06.2003" },
    { name: "Олена", birthDate: "10.11.2005" },
    { name: "Іван", birthDate: "05.02.2002" },
    { name: "Софія", birthDate: "30.08.2004" },
  ]
  const oldestStudent = getOldestStudent(students)

  document.querySelector('.resultContainer').innerText += `Найстарший студент ${oldestStudent.name}.`

}