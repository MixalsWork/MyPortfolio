let burger = document.querySelector('.header__burger')
let burgerWrap = document.querySelector('.burger__wrapper')
let logo = document.querySelector('.header__logo')
let span = document.querySelectorAll('.header__burger__span')
let showBurger = function(){
    burgerWrap.classList.toggle('burger__active')
    burger.classList.toggle('header__burger__active') 
    logo.classList.toggle('header__logo__active')
    console.log(span)
    span.forEach(element => {
     console.log(element.classList)  
     element.classList.toggle('header__burger__span__active')
    });
}

burger.addEventListener('click',showBurger)