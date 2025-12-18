menuBurger = document.querySelector('.menu-burger')

menuCache = document.querySelector('.menu-cache')

menuBurger.addEventListener('click', function() {
    menuBurger.classList.toggle('visible')
    menuCache.classList.toggle('visible')

})