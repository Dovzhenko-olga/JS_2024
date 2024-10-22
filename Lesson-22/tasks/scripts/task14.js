
function filtrString(string) {
  if (/\.gov(\.|$)/.test(string))
    alert('Це урядовий сайт.')
  else alert('Це не урядовий сайт.')
}


window.onload = () => {
  const myString = 'https://portal.pfu.gov.ua/'

  filtrString(myString)
}