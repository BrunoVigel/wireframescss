var swiper = new Swiper('.main-swiper', {
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: '.swiper-pagination1'
  },
  paginationClickable: true,
  autoHeight: true
})

var swiper2 = new Swiper('.product-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

const btn = document.querySelector('.scroll-down')
const section = document.querySelector('#products')
btn.addEventListener('click', function () {
  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  })
})

// Abre e fecha o menu quando clicar no icone: hamburguer e x
const nav = document.querySelector('nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

window.onscroll = function () {
  myFunction()
}

let header = document.querySelector('header')
let sticky = header.offsetTop

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
}
