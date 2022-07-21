import './index.css';

document.addEventListener("load", ready);
function ready(){
 
}

// start TOP MENU
const buttonOpenTopMenu = document.querySelector('.button-menu');
if(buttonOpenTopMenu){
    const topMenu = document.querySelector('.top-menu');
    console.log(topMenu.scrollHeight);
    if(topMenu){
        buttonOpenTopMenu.addEventListener('click', function(){
            topMenu.classList.add('active');
            console.log(topMenu.scrollHeight);
            if(topMenu.classList.contains('active')){
                topMenu.style.height = `${topMenu.scrollHeight}px`;
            }
        });
        const buttonCloseTopMenu = document.querySelector('.top-menu__close');
        if(buttonCloseTopMenu){
            buttonCloseTopMenu.addEventListener('click', function(){
                topMenu.classList.remove('active');
                console.log(topMenu.scrollHeight);

                window.getComputedStyle(topMenu, null).getPropertyValue("height");
                topMenu.style.height = "0";
            });
        }
    }
}

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


// end TOP MENU
