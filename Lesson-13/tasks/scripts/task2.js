if (confirm('Почати тестування?')) {
  const sportsmans = ["Andriy", "Olena", "Iryna", "Mykola"]

  function getPlaces(sportsmans, currentSportsman, res) {
    if (currentSportsman < sportsmans.length) {
      for (let i = currentSportsman; i < sportsmans.length; i++) {
        getPlaces(sportsmans, currentSportsman + 1, [...res, sportsmans[i]])
      }
    } else document.write(`[${res}]  <br>`)

    // if (sportsmans.length === 0) document.write(`[${res}]  <br>`)
    // else {
    //   for (const sportsman of sportsmans) {
    //     getPlaces(
    //       sportsmans.filter((el) => el !== sportsman),
    //       [...res, sportsman]
    //     )
    //   }
    // }
  }
  getPlaces(sportsmans, 0, [])

}