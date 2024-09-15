if (confirm('Почати тестування?')) {
  const arr = [1, 2, 3]

  function getSubsets(arr, start, resArr) {
    document.write(`[${resArr}]<br>`)
    for (let i = start; i < arr.length; i++) {
      resArr.push(arr[i])
      getSubsets(arr, i + 1, resArr)
      resArr.pop()
    }
    // if (arr.length === 0) document.write(`[${resArr}]<br>`)
    // else {
    //   getSubsets(arr.slice(1), [...resArr])
    //   getSubsets(arr.slice(1), [...resArr, arr[0]])
    // }
  }

  getSubsets(arr, 0, [])
}