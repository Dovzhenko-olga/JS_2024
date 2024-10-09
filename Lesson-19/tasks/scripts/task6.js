window.onload = () => {
  const rightArrow = `<svg class="right_arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="30"
            viewBox="0 0 768 768">
            <g id="icomoon-ignore">
            </g>
            <path fill="green"
              d="M384 672c-25.632 0-49.76-9.984-67.872-28.128s-28.16-42.272-28.128-67.936c0-23.872 8.672-31.936 24.448-63.936h-154.752c-52.928 0-96-43.104-96-96 0-52.928 43.072-96 96-96h154.752c-15.808-32-24.448-40.16-24.448-64.032 0.032-25.664 9.984-49.728 28.16-67.872 36.224-36.224 99.456-36.256 135.712 0.032l227.872 227.872-227.872 227.872c-18.112 18.144-42.24 28.128-67.872 28.128zM157.696 384c-17.664 0-32 14.368-32 32s14.336 32 32 32h309.056l-105.376 105.376c-6.048 6.048-9.376 14.048-9.376 22.592 0 8.608 3.328 16.608 9.376 22.656 12.128 12.096 33.12 12.096 45.248 0l182.624-182.624-182.624-182.624c-12.128-12.096-33.12-12.096-45.248 0-6.048 6.048-9.376 14.048-9.376 22.592 0 8.576 3.328 16.608 9.376 22.656l105.376 105.376h-309.056z">
            </path>
          </svg>`
  const leftArrow = `<svg class="left_arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="30"
            viewBox="0 0 768 768">
            <g id="icomoon-ignore">
            </g>
            <path fill="red"
              d="M349.696 672c-25.632 0-49.76-9.984-67.872-28.128l-227.872-227.872 227.872-227.872c36.256-36.288 99.488-36.288 135.744 0 18.112 18.048 28.128 42.144 28.128 67.808 0 23.872-8.64 46.432-24.448 64.064h154.752c52.928 0 96 43.072 96 96s-43.072 96-96 96h-154.752c15.776 17.568 24.448 40.064 24.448 63.936 0.064 25.664-9.984 49.824-28.128 67.968-18.144 18.112-42.24 28.096-67.872 28.096zM144.448 416l182.624 182.624c12.128 12.096 33.12 12.096 45.248 0 6.048-6.048 9.376-14.112 9.376-22.656s-3.328-16.544-9.312-22.56l-105.44-105.408h309.056c17.664 0 32-14.368 32-32s-14.336-32-32-32h-309.056l105.376-105.376c6.048-6.048 9.376-14.112 9.376-22.656s-3.328-16.544-9.344-22.56c-12.192-12.16-33.152-12.128-45.28-0.032l-182.624 182.624z">
            </path>
          </svg>`

  const generals = document.querySelector('.general_list .members_list')
  const selected = document.querySelector('.selected_list .members_list')
  generals.onclick = function (e) {
    if (e.target.tagName === 'svg') {
      const name = e.target.previousElementSibling
      const cloneName = name.cloneNode(true)
      const div = document.createElement('div')
      div.setAttribute('class', 'member')
      div.innerHTML = `${leftArrow}`
      div.prepend(cloneName)
      selected.append(div)
      const item = e.target.closest('.member')
      item.remove()
    }
  }
  selected.onclick = function (e) {
    if (e.target.tagName === 'svg') {
      const name = e.target.previousElementSibling
      const cloneName = name.cloneNode(true)
      const div = document.createElement('div')
      div.setAttribute('class', 'member')
      div.innerHTML = `${rightArrow}`
      div.prepend(cloneName)
      generals.append(div)
      const item = e.target.closest('.member')
      item.remove()
    }
  }

  // const generals = document.querySelector('.general_list')
  // generals.onclick = function (e) {
  //   if (e.target.tagName === 'svg') {
  //     console.log(e.target.tagName)
  //     const item = e.target.closest('.member')
  //     item.classList.toggle('visually-hidden')
  //   }
}
