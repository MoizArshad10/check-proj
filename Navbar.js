$(document).ready(function(){

    $('.toggle').slideUp(3000)
    $('#tog').click(function(){
        $('.toggle').slideToggle(3000)
    })
})

const spinnerWrapperEl= document.querySelector('.spinner-wrapper');

window.addEventListener('load', () =>{
    spinnerWrapperEl.style.opacity= '0';

    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 200)
})
