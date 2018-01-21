const logo = document.getElementById('logo')
document.addEventListener('scroll', function () {
  if (Math.max(document.documentElement.scrollTop || 0, document.body.scrollTop || 0) <= 10) {
    logo.classList.remove('tilt')
  } else {
    logo.classList.add('tilt')
  }
})
