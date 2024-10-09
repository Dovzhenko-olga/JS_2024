
window.onload = () => {
  const cards = document.querySelector('.card_list')
  cards.onclick = function (e) {
    if (e.target.closest('.card')) {
      const item = e.target.closest('.card')
      item.classList.toggle('selected')
    }
  }
}