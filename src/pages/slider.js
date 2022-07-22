import 'owl.carousel/dist/assets/owl.carousel.css';
import './slider.css';
import 'owl.carousel';

$(document).ready(function(){
    $(".home-slider").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots: true
    });
});