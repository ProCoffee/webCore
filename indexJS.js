new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    clickable: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination1',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    clickable: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination2',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    clickable: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination3',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const burger = document.querySelector('.redButton')
const burgerMenu = document.querySelector('.header-1120')
const burgerClose = document.querySelector('.header__btn')
const closeModalBtn = document.querySelector('.closeModalForm')
const showModalMail = document.getElementById('mail')
const showModalPhone = document.getElementById('phone')
const orderCall = document.getElementById('orderCall')
const callBack = document.getElementById('callBack')
const closeOrderCall = document.getElementById('closeOrderCall')
const closeCallBack = document.getElementById('closeCallBack')

burger.addEventListener('click',() => burgerMenu.classList.add('header-1120--active'))
burgerClose.addEventListener('click',() => burgerMenu.classList.remove('header-1120--active'))

function toggle(elem){
    const cont = document.querySelector('.brand__wrapper')
    cont.classList.toggle('wrapper--active')
    elem.children[1].innerText =  cont.classList.contains('wrapper--active') ? 'Скрыть' : 'Показать все';
    elem.children[0].classList.toggle('btn_icon--active')
}

function toggle2(elem){
    const hid = document.querySelector('.advice__text')
    hid.classList.toggle('maxHeight')
    elem.children[0].classList.toggle('btn_icon--active')
}


showModalMail.addEventListener('click', () => {
    orderCall.classList.add('closeRigth')
    callBack.classList.remove('closeRigth')
})
showModalPhone.addEventListener('click', () => {
    callBack.classList.add('closeRigth')
    orderCall.classList.remove('closeRigth')
})

closeCallBack.addEventListener('click', () =>  callBack.classList.add('closeRigth'))
closeOrderCall.addEventListener('click', () =>  orderCall.classList.add('closeRigth'))
