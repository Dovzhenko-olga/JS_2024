if (confirm('Почати тестування?')) {
  const URL = 'https://www.ukr.net/'

  function goToSite() {
    const userAnswer = confirm('Ви хочете перейти на сайт Ukr.Net?')
    if (userAnswer) window.location.href = URL
    else setTimeout(() => window.location.href = URL, 20000)
  }

  goToSite()

}