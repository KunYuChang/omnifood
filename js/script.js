///////////////////////////////////////////////////////////
// 漢堡選單toggle設定
const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
})

///////////////////////////////////////////////////////////
// 平滑滾動--(JS版本)
const allLinks = document.querySelectorAll('a:link')

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const href = link.getAttribute('href')
    console.log(href)

    // 滾回最上面
    if(href === '#') {
      window.scrollTo({
        top:0,
        behavior: 'smooth',
      })
    }

    // 滾到href
    if (href !=="#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth"
      })
    }

    // 關閉mobile navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open')
    }
  })
})

///////////////////////////////////////////////////////////
// Sticky navigation

// 獵物
const sectionHeroEl = document.querySelector('.section-hero')

// 獵人
const obs = new IntersectionObserver(function(entries) {
  // 找第一個獵物
  const ent = entries[0]
  console.log(ent)

  // 獵物不在視野內
  if (!ent.isIntersecting) {
    document.querySelector('.header').classList.add('sticky')
  }

  // 獵物出現在視野內
  if (ent.isIntersecting) {
    document.querySelector('.header').classList.remove('sticky')
  }
}, {
  // In the viewport
  root: null,
  threshold: 0,
  rootMargin: '-80px'
})

// 獵人觀察獵物
obs.observe(sectionHeroEl)


