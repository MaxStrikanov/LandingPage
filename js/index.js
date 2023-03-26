import checkingСertificate  from '../components/xlsx.js';

checkingСertificate()

const menuToggle = document.querySelector('.menu-toggle input ');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', () => {
  menuItems.classList.toggle('open');
});


var sliderSelector = '.swiper-container',
options = {
    init: false,
    loop: true,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides : true,
    effect: 'coverflow',
            coverflowEffect: {
                //угол
            rotate: 4,
            //тень
            slideShadows: false,
            //наложение
            stretch: 0,
            modifier: 2,
            //удаление
            depth: 400,  
			scale: 1,
    },
    grabCursor: true,
    parallax: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        767: {
            slidesPerView: 2,
            spaceBetween: -20
        }        
        }
};
var mySwiper = new Swiper(sliderSelector, options);
mySwiper.init();

