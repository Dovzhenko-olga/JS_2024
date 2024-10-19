
window.onload = () => {

  const visitMoment = Date.now()
  setInterval(() => {
    const currentMoment = Date.now()
    const difference = (currentMoment - visitMoment) / 60000
    alert(`Ви на сайті вже ${Math.floor(difference)}хв.`)
  }, 60000)

}