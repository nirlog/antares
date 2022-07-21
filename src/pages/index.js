import 'normalize.css/normalize.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './index.css';
import 'owl.carousel';

// start Top Menu
const buttonOpenTopMenu = document.querySelector('.button-menu');
if(buttonOpenTopMenu){
    const topMenu = document.querySelector('.top-menu');
    if(topMenu){
        buttonOpenTopMenu.addEventListener('click', function(){
            topMenu.classList.add('active');
            if(topMenu.classList.contains('active')){
                topMenu.style.height = `${topMenu.scrollHeight}px`;
            }
        });
        const buttonCloseTopMenu = document.querySelector('.top-menu__close');
        if(buttonCloseTopMenu){
            buttonCloseTopMenu.addEventListener('click', function(){
                topMenu.classList.remove('active');
                window.getComputedStyle(topMenu, null).getPropertyValue("height");
                topMenu.style.height = "0";
            });
        }
    }
}
// end Top Menu

// start Mobile Search
const buttonMobileSearch = document.querySelector('.list-buttons__search');
if(buttonMobileSearch){
    const mobileSearch = document.querySelector('.mobile-search');
    if(mobileSearch){
        buttonMobileSearch.addEventListener('click', function(){
            buttonMobileSearch.classList.toggle('active');
            mobileSearch.classList.toggle('active');
        });
        const buttonCloseMobileSearch= document.querySelector('.mobile-search__button-close');
        buttonCloseMobileSearch.addEventListener('click', function(){
            buttonMobileSearch.classList.remove('active');
            mobileSearch.classList.remove('active');
        });
    }
}
// end Mobile Search


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots: true
    });
});




