if (confirm('Почати тестування?')) {
  const CURRENT_YEAR = 2024
  function getAge() {
    const userYear = parseFloat(document.getElementById('year').value)
    const age = CURRENT_YEAR - userYear
    document.getElementById('age').innerText = age + ' років'
  }
  window.onload = function () {
    document.getElementById('year').onchange = getAge
  }
}