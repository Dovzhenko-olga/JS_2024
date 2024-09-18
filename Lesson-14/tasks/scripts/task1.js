if (confirm('Почати тестування?')) {

  const sites = [
    {
      siteName: 'Google',
      owner: 'Larry Page',
      sponsors: [
        {
          lastName: 'Behtolsgame',
          firstName: 'Endy',
          money: 100000
        }
      ],
      year: 1998,
      cost: 44300000000
    },
    {
      siteName: 'Wikipedia',
      owner: 'Wikimedia Foundation',
      sponsors: [
        {
          lastName: 'Weils',
          firstName: 'Jimmy',
          money: 10000
        },
        {
          lastName: 'Wendy',
          firstName: 'Tony',
          money: 25000
        }
      ],
      year: 2001,
      cost: 10000
    },
    {
      siteName: 'ukrNet',
      owner: 'ukrnet',
      sponsors: [
        {
          lastName: 'Kushnir',
          firstName: 'Vitatchi',
          money: 150000
        }
      ],
      year: 1998,
      cost: 7915229
    },
    {
      siteName: 'Преступности НЕТ ',
      owner: 'Ukrainian Media Group',
      sponsors: [
        {
          lastName: 'Diblenko',
          firstName: 'Artem',
          money: 15000
        }
      ],
      year: 2008,
      cost: 200000
    }
  ]
  // загальну вартість усіх сайтів
  function sitesCost(sites) {
    return sites.reduce((prevSum, site) => prevSum + site.cost, 0)
  }
  // кількість сайтів, що було зроблено між 2000 та 2009 рр.
  function sitesMillenium(sites) {
    return sites.reduce((acc, site) =>
      site.year >= 2000 && site.year < 2009
        ? acc + 1
        : acc
      , 0)
  }
  // кількість сайтів, де сума спонсорських вкладень була більшою за 100000
  function sitesBigSponsorsMoney(sites) {
    return sites.reduce((acc, site) =>
      site.sponsors.reduce((prevSum, sponsor) => prevSum + sponsor.money, 0) > 100000 ? acc + 1 : acc
      // {
      //   for (const sponsor of site.sponsors) {
      //     if (sponsor.money > 100000) acc++
      //   }
      //   return acc
      // }
      , 0)
  }
  // створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
  function getSponsors(sites) {
    return sites.reduce((acc, site) => {
      site.sponsors.forEach(sponsor => acc.push(sponsor.lastName))
      // for (const sponsor of site.sponsors) {
      //   acc.push(sponsor.lastName)
      // }

      return acc
    }, [])
  }
  // знайти рік, коли прибуток був найбільшим
  function siteBigestProfit(sites) {
    return sites.reduce((prevSite, site) => site.cost > prevSite.cost ? site : prevSite)
  }
  // упорядкувати список за спаданням прибутку
  function getSortedByProfit(sites) {
    return [...sites].sort((el1, el2) => el2.cost - el1.cost)
  }
  // Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
  function getArraysByCost(sites) {
    const arrLess10000 = []
    const arrMore10000 = []
    for (const site of sites) {
      if (site.cost > 10000) arrMore10000.push(site)
      else arrLess10000.push(site)
    }
    return { arrLess10000, arrMore10000 }
  }

  document.write(`<ol>
  <li> Загальна вартість усіх сайтів: ${sitesCost(sites)}$<br>
  <li> Кількість сайтів, що було зроблено між 2000 та 2009 рр.: ${sitesMillenium(sites)}<br>
  <li> Кількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${sitesBigSponsorsMoney(sites)}<br>
  <li> Загальний список усіх спонсорів: ${getSponsors(sites).join(', ')}<br>
  <li> Рік, коли прибуток був найбільшим: ${siteBigestProfit(sites).year}<br>
  </ol>
  `)

  console.log('Упорядкувати список за спаданням прибутку')
  console.log(getSortedByProfit(sites))
  const { arrLess10000, arrMore10000 } = getArraysByCost(sites)
  console.log('2 окремих списки')
  console.log(arrLess10000)
  console.log(arrMore10000)
}