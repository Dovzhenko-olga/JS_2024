class ImageRequest {
  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  async getImageUrl() {
    return fetch(this.apiUrl)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return data.url
      })
  }
}

class ImageGallery {
  constructor(imagesList) {
    this.imagesList = imagesList
  }
  render() {
    const imageGallery = document.createElement('ul')
    imageGallery.className = 'imageGallery'
    for (let i = 0; i < this.imagesList.length; i++) {
      const imageItem = document.createElement('li')
      imageItem.className = 'imageItem'
      const randomImage = document.createElement('img')
      randomImage.setAttribute('src', this.imagesList[i])
      randomImage.classList = 'randomImage'
      imageItem.append(randomImage)
      console.log(imageItem)
      imageGallery.append(imageItem)
    }
    document.querySelector('.resultContainer').append(imageGallery)
  }
}

async function getArray(imageNumber, imageRequest) {
  const arr = new Array(imageNumber)

  for (let i = 0; i < arr.length; i++) {
    const randomUrl = await imageRequest.getImageUrl()
    if (!/(\.jpg|\.jpeg|\.gif|\.png)/.test(randomUrl.toLowerCase())) {
      i--
      continue
    }
    arr[i] = randomUrl
  }
  return arr
}

window.onload = async () => {
  const imageRequest = new ImageRequest('https://random.dog/woof.json')
  const imagesList = await getArray(12, imageRequest)
  const imageGallery = new ImageGallery(imagesList)
  imageGallery.render()
}