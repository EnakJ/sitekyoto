const btnMenu = document.querySelector('.menu-logo');

const menu = document.querySelector('.liste-item');


btnMenu.addEventListener('click', () => {

    menu.classList.toggle('active')
})

const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(item => {

    item.addEventListener('click', () => {

        menu.classList.toggle('active')
    })
})