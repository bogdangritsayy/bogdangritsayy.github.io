document.addEventListener('DOMContentLoaded' , () =>{
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(el =>{
el.addEventListener('click' , (e) => {

const self = e.currentTarget;
const control = self.querySelectorAll('.according-control');
const content = self.querySelectorAll('.according_content');

self.classList.toggle('open');


});
});
});
const iconMenu = document.querySelector('.menu-icon');

let menuBody = document.querySelector('.nav-header');

iconMenu.addEventListener('click' ,function (e) {
    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
})
