// 1. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
const studentsAgesList = [12, 11, 15, 7, 8, 14, 12, 11, 8, 12, 10, 11, 12, 7]

let studentsMap = new Map
for (const student of studentsAgesList) {
  if (studentsMap.has(student)) studentsMap.set(student, studentsMap.get(student) + 1)
  else studentsMap.set(student, 1)
}

console.log("Task 1:", studentsMap)
console.log("Mаксимальне значення:", Math.max(...studentsMap.keys()))

// 2. Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
const books = [
  { title: "1984", year: 1949, author: "George Orwell" },
  { title: "To Kill a Mockingbird", year: 1960, author: "Harper Lee" },
  { title: "The Great Gatsby", year: 1925, author: "F. Scott Fitzgerald" },
  { title: "Brave New World", year: 1932, author: "Aldous Huxley" },
  { title: "Animal Farm", year: 1945, author: "George Orwell" },
  { title: "The Catcher in the Rye", year: 1951, author: "J.D. Salinger" },
  { title: "Go Set a Watchman", year: 2015, author: "Harper Lee" }
]
let authorMap = new Map()
const authorList = books.map(book => book.author)
for (const author of authorList) {
  if (authorMap.has(author)) authorMap.set(author, authorMap.get(author) + 1)
  else authorMap.set(author, 1)
}
console.log("Task 2:", authorMap)

// 3. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.
const visitors = ["john_doe", "jane_smith", "alice_jones", "bob_brown", "charlie_black", "jane_smith", "alice_jones", "bob_brown", "charlie_black", "jane_smith", "alice_jones", "bob_brown"]

let visitorsMap = new Map
for (const visitor of visitors) {
  if (visitorsMap.has(visitor)) visitorsMap.set(visitor, visitorsMap.get(visitor) + 1)
  else visitorsMap.set(visitor, 1)
}
console.log("Task 3:", visitorsMap)

// 4. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.
const studentsList = [
  { name: "Іванов Іван", course: 1, faculty: "Комп'ютерні науки" },
  { name: "Петров Петро", course: 2, faculty: "Економіка" },
  { name: "Сидоренко Ольга", course: 3, faculty: "Психологія" },
  { name: "Коваленко Анна", course: 1, faculty: "Економіка" },
  { name: "Мельник Сергій", course: 2, faculty: "Комп'ютерні науки" },
  { name: "Ткаченко Олексій", course: 3, faculty: "Інженерія" },
  { name: "Гнатенко Марія", course: 1, faculty: "Психологія" },
  { name: "Шевченко Юлія", course: 4, faculty: "Соціологія" },
  { name: "Левченко Володимир", course: 2, faculty: "Психологія" },
  { name: "Кузьменко Наталія", course: 3, faculty: "Комп'ютерні науки" }
]

const facultyList = studentsList.map(student => student.faculty)
const courseList = studentsList.map(student => student.course)

const facultySet = new Set(facultyList)
const facultyAmount = facultySet.size

const courseMap = new Map
for (const course of courseList) {
  if (courseMap.has(course)) courseMap.set(course, courseMap.get(course) + 1)
  else courseMap.set(course, 1)
}

console.log("Task 4. Кількість факультетів:", facultyAmount)
console.log("Task 4:", courseMap)

// 5. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// Заокруглити вверх значення та підрахувати кількість різних показів.
let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

const tempMap = new Map
for (const temp of temperatures) {
  if (tempMap.has(temp)) tempMap.set(temp, tempMap.get(temp) + 1)
  else tempMap.set(temp, 1)
}
console.log("Task 5:", tempMap)

const roundTemps = temperatures.map(temp => Math.ceil(temp))

const roundTempSet = new Set(roundTemps)
console.log("Кількість заокруглених:", roundTempSet.size)

// 6. Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії.
// Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики.
// Також підрахувати скільки всього студентів відвідують хоча б один гурток.

const mathList = ["Ivanov", "Petrov", "Sydorenko", "Melnyk", "Tkachenko"]
const historyList = ["Petrov", "Kovalenko", "Shevchenko", "Hnatenko", "Melnyk"]

const mathSet = new Set(mathList)
const historySet = new Set(historyList)

const mutualStudents = mathSet.intersection(historySet)
const studentsTotalAmount = mathSet.union(historySet)
console.log("Task 6. Відвідують обидва гуртки:", mutualStudents.size)
console.log("Task 6. Всього студентів:", studentsTotalAmount.size)