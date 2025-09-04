
// Обновление

const logo = document.querySelectorAll('.logo')
const headerLogo = document.querySelector('.header__logo')

logo.forEach((logo) => {
    logo.addEventListener('click', () => {
        window.location.reload()
    })
})



// Меню

const menu = document.querySelector('.header__menu--list--is-active')

window.addEventListener('click', (event) => {
    if (event.target.closest('.header--burger') || event.target.closest('.header__menu--list--is-active')) {
        menu.classList.add('menu-active')
    } else {
        menu.classList.remove('menu-active')
    }
})


// Поиск

const search = document.querySelector('.header-window--search')

window.addEventListener('click', (event) => {
    if (event.target.closest('.header--search') || event.target.closest('.header-window--search')) {
        search.classList.add('header-window--search--is-active')
    } else {
        search.classList.remove('header-window--search--is-active')
    }
})



// Анимации

const listItems = document.querySelectorAll('.header__menu--item')
const headerSearch = document.querySelector('.header--search')
const headerBurger = document.querySelector('.header--burger')
const zogolovok1 = document.querySelector('.content-first--zogolovok')
const button1 = document.querySelector('.content-first--button')
const floor1 = document.querySelector('.content-first--container')

function showItems(index = 0) {
    if (index < listItems.length) {
        listItems[index].classList.add('menu--item-show')
        setTimeout(() => {
            showItems(index + 1)
        }, 100)
    }
}

function show(element) {
    element.style = `
    opacity: 1;
    transform: translateY(0)
    `
}

window.addEventListener('DOMContentLoaded', () => {
    show(headerLogo)
    setTimeout(() => {
        showItems()
    }, 200)
    setTimeout(() => {
        show(headerSearch)
    }, 700)
    setTimeout(() => {
        show(headerBurger)
    }, 800)
    setTimeout(() => {
        show(zogolovok1)
    }, 900)
    setTimeout(() => {
        show(button1)
    }, 1200)
    setTimeout(() => {
        show(floor1)
    }, 1400)
})

function animationScroll(element) {
    if (window.innerWidth > 600) {
        window.addEventListener('scroll', () => {
            const windowCentr = (window.innerHeight / 1.2) + window.scrollY
            const scrollItem = document.querySelector(`${element}`)
            const scrollOfset = scrollItem.getBoundingClientRect().top + window.scrollY;
            if (windowCentr >= scrollOfset) {
                show(scrollItem)
            }
        })
    } else {
        window.addEventListener('scroll', () => {
            const windowCentr = (window.innerHeight / 2) + window.scrollY
            const scrollItem = document.querySelector(`${element}`)
            const scrollOfset = scrollItem.getBoundingClientRect().top + window.scrollY;
            if (windowCentr >= scrollOfset) {
                show(scrollItem)
            }
        })
    }
}

animationScroll('.content-second__shelf-first--img')
animationScroll('.content-second__shelf-first__column')
animationScroll('.content-third__shelf-second__column')
animationScroll('.content-third__shelf-second--img')
animationScroll('.content-fifth--zogolovok')
animationScroll('.content-fifth--text')
animationScroll('.content-fifth__shelf')
animationScroll('.content-sixth--zogolovok')
animationScroll('.content-sixth--text')
animationScroll('.content-sixth--button')
animationScroll('.content-seventh--zogolovok')
animationScroll('.content-seventh__video')
animationScroll('.content-seventh__shelf')
animationScroll('.content-eghth--zogolovok')
animationScroll('.content-eghth--text')
animationScroll('.content-eghth__images')
animationScroll('.content-nineght--zogolovok')
animationScroll('.zogolovok1')
animationScroll('.zogolovok2')
animationScroll('.zogolovok3')
animationScroll('.content-nineght__content__video')
animationScroll('.video--text')



// Слайдер

const tochki = document.querySelectorAll('.tochka')
const slider = document.querySelector('.content-fourth__slider')
const slides = document.querySelectorAll('.slider')
const arrows = document.querySelectorAll('.arrow')
const fon = document.querySelector('.content-fourth-fon')

let current = 0
let slideInterval
const clientWidth = document.documentElement.clientWidth
let slideWidth

if (clientWidth > 500) {
    slideWidth = 400 + 20
}else {
    slideWidth = 314 + 20
}


function showSlider(index) {
    const offset = (index) * slideWidth
    slider.style.transform = `translateX(-${offset}px)`

    // точки
    tochki.forEach(t => t.classList.remove('red'))
    tochki[index].classList.add('red')

    switch (index) {
        case 0:
            fon.style.backgroundImage = "url('./img/denissa-devy-fU2Mus9qmN8-unsplash.jpg')"
            break
        case 1:
            fon.style.backgroundImage = "url('./img/geio-tischler-7hww7t6NLcg-unsplash.jpg')"
            break
        case 2:
            fon.style.backgroundImage = "url('./img/rashel-o-m7eb02LR9eA-unsplash.jpg')"
            break
        case 3:
            fon.style.backgroundImage = "url('./img/killian-pham-Sq8rpq2KB7U-unsplash.jpg')"
            break
        case 4:
            fon.style.backgroundImage = "url('./img/pukpik-aB46yUmsMp0-unsplash.jpg')"
            break
    }

    current = index
}

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        clearInterval(slideInterval)

        if (arrow.classList.contains('content-fourth__arrows--left')) {
            let index = current - 1
            if (index < 0) index = slides.length - 1
            showSlider(index)
        } else {
            let index = current + 1
            if (index >= slides.length) index = 0
            showSlider(index)
        }

        startInterval()
    })
})

function startInterval() {
    slideInterval = setInterval(() => {
        let index = current + 1
        if (index >= slides.length) index = 0
        showSlider(index)
    }, 3000)
}

startInterval()

showSlider(current)



// Прокрутка

const toTop = document.querySelector('.footer--arrol-top')

toTop.addEventListener('click', () => {
    window.scroll({
    top: 0,
    behavior: 'smooth'
});
})



// Прогресс-бар

const progressBar = document.querySelector('.progress-bar')
const documentHeight = document.documentElement.scrollHeight
const windowHeight = window.innerHeight
const content1 = document.querySelector('#content1')
const content2 = document.querySelector('#content2')
const content3 = document.querySelector('#content3')
const content4 = document.querySelector('#content4')
const content5 = document.querySelector('#content5')
const content6 = document.querySelector('#content6')
const content7 = document.querySelector('#content7')
const content8 = document.querySelector('#content8')
const content9 = document.querySelector('#content9')
const contentNumber = document.querySelector('.progress-container--number')

function getProgress() {
    const scrollTop = window.scrollY
    const progress = (scrollTop / (documentHeight - windowHeight)) * 100
    progressBar.style.height = `${Math.min(progress, 100)}%`
}

window.addEventListener('scroll', () => {
    getProgress()

    const elementPosition1 = content1.getBoundingClientRect().top
    const elementPosition2 = content2.getBoundingClientRect().top
    const elementPosition3 = content3.getBoundingClientRect().top
    const elementPosition4 = content4.getBoundingClientRect().top
    const elementPosition5 = content5.getBoundingClientRect().top
    const elementPosition6 = content6.getBoundingClientRect().top
    const elementPosition7 = content7.getBoundingClientRect().top
    const elementPosition8 = content8.getBoundingClientRect().top
    const elementPosition9 = content9.getBoundingClientRect().top
    if (elementPosition1 <= 0) {
        contentNumber.textContent = '01'
    }
    if (elementPosition2 < window.innerHeight) {
        contentNumber.textContent = '02'
    }
    if (elementPosition3 < window.innerHeight) {
        contentNumber.textContent = '03'
    }
    if (elementPosition4 < window.innerHeight) {
        contentNumber.textContent = '04'
    }
    if (elementPosition5 < window.innerHeight) {
        contentNumber.textContent = '05'
    }
    if (elementPosition6 < window.innerHeight) {
        contentNumber.textContent = '06'
    }
    if (elementPosition7 < window.innerHeight) {
        contentNumber.textContent = '07'
    }
    if (elementPosition8 < window.innerHeight) {
        contentNumber.textContent = '08'
    }
    if (elementPosition9 < window.innerHeight) {
        contentNumber.textContent = '09'
    }
})







