//spinner
const spinner = document.querySelector('.spinner');


const hideSpinner = () =>{
    spinner.style.height = 0;
    spinner.style.width = 0;

};

window.addEventListener('load', () => hideSpinner());




//hamburger menu
document.querySelector('.header-top-nav-mobile').addEventListener('click', function(){
    document.querySelector('aside').classList.toggle('show');
})

document.querySelector('.header-top-burger').addEventListener('click', function () {
    document.querySelector('aside').classList.toggle('show');
    document.querySelector('.fas').classList.toggle('show');
})

document.querySelector('.header-top-nav_item a').addEventListener('click', function(){
    document.querySelector('aside').classList.remove('show');
})

//gallery modal

const modals = [...document.querySelectorAll('.modal-img')]
const watchBtns = document.querySelectorAll('.watch');
const hideBtns = document.querySelectorAll('.hide');



watchBtns.forEach((btn,index) => btn.addEventListener('click', () => {
    modals[index].classList.add('active');
}))

hideBtns.forEach((btn,index) => btn.addEventListener('click', () => {
    modals[index].classList.remove('active');
}))

//JS

//typing effect

const title = document.querySelector('.title');
const content = "Jaka będzie Twoja strona?";
const cursor = document.querySelector('.cursor');

let indexText = 0;
const duration = 100;
let index = function(){}

const loadHero = () => {
        index = setInterval(addLetter, duration);
    }
   


const addLetter = () => {
    title.textContent += content[indexText];
    indexText++; 
    if(indexText == content.length) {
        clearInterval(index)
    };     
}




const cursorFlash = () => {
 cursor.classList.toggle('active');

}
setInterval(cursorFlash,500)

//fadein

async function fadeIn() {
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
        }, 4000);

        setTimeout( () => {
            mobile.classList.add('fade');
        },4000)

}
 
window.addEventListener('load', loadHero);
window.addEventListener('load', fadeIn)

