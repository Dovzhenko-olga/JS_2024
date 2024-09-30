if (confirm('Почати тестування?')) {
  const EURO_RATE = 46.5
  const USD_RATE = 41.48
  function convert() {
    const userGrn = parseFloat(document.getElementById('grn').value)
    const euro = userGrn / EURO_RATE
    document.getElementById('euro').value = euro.toFixed(2)
    const usd = userGrn / USD_RATE
    document.getElementById('usd').value = usd.toFixed(2)
  }

  window.onload = function () {
    document.getElementById('convert').onclick = convert
  }
}