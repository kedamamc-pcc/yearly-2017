const logo = document.getElementById('logo')
document.addEventListener('scroll', function () {
  if (this.documentElement.scrollTop <= 10) {
    logo.classList.remove('tilt')
  } else {
    logo.classList.add('tilt')
  }
})