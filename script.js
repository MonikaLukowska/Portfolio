//spinner
const spinner = document.querySelector('.spinner');


const hideSpinner = () =>{
    spinner.style.height = 0;
    spinner.style.width = 0;
    console.log(spinner);

};

window.addEventListener('load', () => hideSpinner());

//jquery//

//hamburger menu
$(".header-top-nav-mobile").click( function(){
    $("aside").toggleClass("show");
})

$(".header-top-burger").on("click", function () {
    $(".fas, aside").toggleClass("show");
})

$(".header-top-nav_item li a").on("click", function(){
    $("aside").removeClass("show");
})

//gallery modal

$('.img1').on('click', function () {
   
    $('.modal-img1').addClass('active')
})
$('.img2').on('click', function () {
    
    $('.modal-img2').addClass('active')
})
$('.img3').on('click', function () {
  
    $('.modal-img3').addClass('active')
})
$('.img4').on('click', function () {
 
    $('.modal-img4').addClass('active')
})
$('.img5').on('click', function () {
 
    $('.modal-img5').addClass('active')
})
$('.hide').on('click', function () {
   
    $('.modal-img').removeClass('active');
})


//JS

//typing effect

const title = document.querySelector('.title');
const content = "Jaka będzie Twoja strona?";
const cursor = document.querySelector('.cursor');

let indexText = 0;
const duration = 120;

const addLetter = () => {
    title.textContent += content[indexText];
    indexText++;
    if(indexText == content.length) clearInterval(index); 
}
console.log(cursor);
const cursorFlash = () => {
 cursor.classList.toggle('active');
}

const index = setInterval(addLetter, duration);
setInterval(cursorFlash,500);

//fadein

const fadeIn = () => {
    const features = document.querySelectorAll(".header-bottom-feature");
    const btn = document.querySelector('.header-bottom-btn');
    const mobile = document.querySelector('.header-bottom-mobile');
  
    
   
    for (let i = 0; i < features.length; i++){
        setTimeout( () => {
            features[i].classList.add('fade');
        }, 3000)
    };
        setTimeout( () => {
            btn.classList.add('fade');
        }, 5000);

        setTimeout( () => {
            mobile.classList.add('fade');
        },6000)

}

 fadeIn()
