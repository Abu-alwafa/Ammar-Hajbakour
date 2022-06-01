export function autoTyping() {
  let count = 0
  let index = 0
  let currentText = ''
  let letter = ''

  ;(function type() {
    if (count === texts.length) {
      count = 0
    }
    currentText = texts[count]
    letter = currentText.slice(0, ++index)
    const typing = document.querySelector('.typing')
    typing.innerText = letter
    if (letter.length === currentText.length) {
      count++
      index = 0
    }

    setTimeout(type, 125)
  })()
}

export function slider() {
  let index1 = 0
  let index2 = 0
  carousel()
  carousel2()
  function carousel() {
    let i
    let x = document.querySelectorAll('.most-prod .item')
    // for (i = 0; i < x.length; i++) {
    //   x[i].style.visibility = "hidden";
    //   x[i].style.opacity = "0";
    // }
    x.forEach((item) => {
      item.style.visibility = 'hidden'
      item.style.opacity = '0'
    })
    index1++
    if (index1 > x.length) {
      index1 = 1
    }
    x[index1 - 1] ? (x[index1 - 1].style.visibility = 'visible') : null
    x[index1 - 1] ? (x[index1 - 1].style.opacity = '1') : null
    setTimeout(carousel, 5000) // Change image every 2 seconds
  }
  function carousel2() {
    let i
    let x = document.querySelectorAll('.hobbies .item')
    for (i = 0; i < x.length; i++) {
      x[i].style.visibility = 'hidden'
      x[i].style.opacity = '0'
    }
    index2++
    if (index2 > x.length) {
      index2 = 1
    }
    x[index1 - 1].style.visibility = 'visible'
    x[index1 - 1].style.opacity = '1'
    setTimeout(carousel2, 5000) // Change image every 2 seconds
  }
}
