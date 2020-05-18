document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'

window.addEventListener('loader', () => {
  FastClick.attach(document.body)
}, false)

document.documentElement.addEventListener('touchmove', e => {
  if (e.touches.length > 1) e.preventDefault()
}, false)