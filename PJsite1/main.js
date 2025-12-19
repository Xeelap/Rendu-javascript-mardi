const menuBurger = document.querySelector('.menu-burger') // selectionne le menu burger

const menuCache = document.querySelector('.menu-cache')// selectionne le menu caché 

menuBurger.addEventListener('click', function() {
    menuBurger.classList.toggle('visible')
    menuCache.classList.toggle('visible')
}) // active les elements en visible 