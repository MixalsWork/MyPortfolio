let tabs = document.querySelectorAll('.choose__tab');
let choose = document.querySelectorAll('.choose__column__wrapper');
tabs.forEach(element => {
    element.addEventListener("click", myFunction)
});


function myFunction (){
    tabs.forEach(element => {
        element.classList.remove('choose__tab__active')
    });
    choose.forEach(element => {
        element.classList.add('hidden')
    });
    this.classList.add('choose__tab__active') 
    // for(i=0; i<choose.length ; i++){
    //     if(this.dataset.item == choose[i].dataset.item){
    //         choose[i].classList.remove('hidden')
    //     }
    // }
    choose.forEach(element => {
        if(this.dataset.item == element.dataset.item){
            element.classList.remove('hidden')
            
        }
    });
    
}