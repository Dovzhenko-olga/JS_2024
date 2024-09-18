if (confirm('Почати тестування?')) {
  class Baner {
    constructor(list) {
      this.baners = list
    }

    getRandomBaner() {
      const randomNumber = Math.floor(Math.random() * (this.baners.length))
      return this.baners[randomNumber]
    }
    render() {
      const { title, img, link } = this.getRandomBaner()
      document.write(`<div class="banner"><a href="${link}"><img src="${img}" alt="${title}"></a> </div>`)
    }
  }

  const baners = [{
    title: 'Stone',
    img: './img/stone.jpg',
    link: 'https://www.istockphoto.com/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D1%96%D0%BB%D0%BE%D0%B2%D0%B0-%D0%BB%D1%8E%D0%B4%D0%B8%D0%BD%D0%B0-%D1%88%D1%82%D0%BE%D0%B2%D1%85%D0%B0%D1%94-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9-%D0%BA%D0%B0%D0%BC%D1%96%D0%BD%D1%8C-%D0%BD%D0%B0-%D0%BF%D0%B0%D0%B3%D0%BE%D1%80%D0%B1-%D0%B1%D1%96%D0%B7%D0%BD%D0%B5%D1%81-%D0%B2%D0%B0%D0%B6%D0%BA%D0%B8%D1%85-%D0%B7%D0%B0%D0%B2%D0%B4%D0%B0%D0%BD%D1%8C-%D1%96-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC-gm825383494-133865749?searchscope=image%2Cfilm'
  },
  {
    title: 'Power',
    img: './img/power.jpg',
    link: 'https://media.istockphoto.com/id/1456863710/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%B7%D1%96%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0-%D0%B6%D1%96%D0%BD%D0%BA%D0%B0-%D0%B1%D0%BE%D1%80%D0%B5%D1%86%D1%8C-%D0%B7-%D1%80%D0%B0%D0%BA%D0%BE%D0%BC-%D0%B2%D0%B8%D0%B6%D0%B8%D0%B2%D0%B0%D1%94-%D1%81%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D1%8E.jpg?s=612x612&w=0&k=20&c=gpg4MZvmz1vm6HRtK_hIDON_SQoLFL-DYmVrYash7yM='
  },
  {
    title: 'Baby',
    img: './img/baby.jpg',
    link: 'https://www.istockphoto.com/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%BD%D1%96%D0%BC%D0%BE%D0%BA-%D0%BF%D1%80%D0%B8%D0%B2%D0%B0%D0%B1%D0%BB%D0%B8%D0%B2%D0%BE%D1%97-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D1%97-%D0%B6%D1%96%D0%BD%D0%BA%D0%B8-%D1%8F%D0%BA%D0%B0-%D1%81%D0%B8%D0%B4%D0%B8%D1%82%D1%8C-%D0%BD%D0%B0-%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD%D1%96-%D1%83-%D1%81%D0%B2%D0%BE%D1%97%D0%B9-%D0%B2%D1%96%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%96-%D1%96-%D0%B2%D1%82%D1%96%D1%88%D0%B0%D1%94-%D1%81%D0%B2%D0%BE%D1%8E-gm1390098995-447168748?searchscope=image%2Cfilm'
  },
  {
    title: 'Friendship',
    img: './img/friendship.jpg',
    link: 'https://www.istockphoto.com/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%BE%D1%80%D0%BD%D0%BE-%D0%B1%D1%96%D0%BB%D1%96-%D0%BB%D1%8E%D0%B4%D1%81%D1%8C%D0%BA%D1%96-%D1%80%D1%83%D0%BA%D0%B8-%D1%80%D1%83%D0%BA%D0%BE%D1%81%D1%82%D0%B8%D1%81%D0%BA%D0%B0%D0%BD%D0%BD%D1%8F-%D0%BF%D1%80%D0%BE%D1%82%D0%B8-%D1%80%D0%B0%D1%81%D0%B8%D0%B7%D0%BC%D1%83-gm491249515-39913982?searchscope=image%2Cfilm'
  }]
  const baner = new Baner(baners)
  baner.render()
}