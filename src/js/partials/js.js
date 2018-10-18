var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav__items--nojs');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav__items--closed')) {
        navMain.classList.remove('main-nav__items--closed');
        navMain.classList.add('main-nav__items--opened');
    } else {
        navMain.classList.add('main-nav__items--closed');
        navMain.classList.remove('main-nav__items--opened');
    }
});


// $('.feedback__slider-wrapper').slick({
//     settings: 'unslick',
//     responsive: [
//         {
//             breakpoint: 5000,
//             settings: {
//                 dots: true,
//                 arrows: true,
//                 autoplay: false
//             }
//         }
//     ]
// });