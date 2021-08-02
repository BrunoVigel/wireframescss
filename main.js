var swiper = new Swiper('.mySwiper', {
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: '.swiper-pagination'
  },
  autoHeight: true
})

const btn = document.querySelector('.scroll-down')
const section = document.querySelector('#products')
btn.addEventListener('click', function () {
  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  })
})
