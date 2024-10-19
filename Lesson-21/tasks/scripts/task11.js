function showResult(difference) {
  document.querySelector('.resultContainer').innerText += `До першого руху мишкою пройшло ${difference} сек.`
}

function getTimeToMove(visitMoment) {
  const moveMoment = new Date()
  const difference = (moveMoment - visitMoment) / 1000
  showResult(difference)
}

window.onload = () => {
  const visitMoment = new Date()
  // document.onmousemove = () => getTimeToMove(visitMoment)
  document.addEventListener('mousemove', () => getTimeToMove(visitMoment), { once: true })

}