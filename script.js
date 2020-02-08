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
    console.log('dziala');
    $('.modal-img1').addClass('active')
})
$('.img2').on('click', function () {
    console.log('dziala');
    $('.modal-img2').addClass('active')
})
$('.img3').on('click', function () {
    console.log('dziala');
    $('.modal-img3').addClass('active')
})
$('.hide').on('click', function () {
    console.log('dziala');
    $('.modal-img').removeClass('active');
})


//plain JS

//typing effect

  //text
const title = document.querySelector('.title');
const content = "Jaka będzie Twoja strona?";
const cursor = document.querySelector('.cursor');

let indexText = 0;
const duration = 50;

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
        }, 2500)
    };
        setTimeout( () => {
            btn.classList.add('fade');
        }, 4500);

        setTimeout( () => {
            mobile.classList.add('fade');
        },5000)

}

 fadeIn()
