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

const wait = (ms = 0) => {
    return new Promise(resolve => setTimeout(resolve,ms))
}

const title = document.querySelector('.title');
const cursor = document.querySelector('.cursor');
const features = document.querySelectorAll(".header-bottom-feature");
const btn = document.querySelector('.btn');
const mobile = document.querySelector('.header-bottom-mobile');
let index = 0;
const content = title.textContent;
const time = 70


async function type(){
    title.textContent = content.slice(0, index)
    index++;
    await wait(time);
    if (index <= content.length){
        type()
    }
}

const cursorFlash = () => {
    cursor.classList.toggle('active');   
   }

async function fadeIn(){
    const features = document.querySelectorAll(".header-bottom-feature");
    const btn = document.querySelector('.btn');
    const mobile = document.querySelector('.header-bottom-mobile');

        for (let i = 0; i < features.length; i++){
            features[i].classList.add('fade');
             await wait(50)
             console.log('1')
           };

        await wait(2500).then(() => {
            btn.classList.add('fade');
            mobile.classList.add('fade');
        })
        
  
}

async function loadHero(){
    type() 
    setInterval(cursorFlash,500)
    await wait(1500).then(fadeIn)
}


window.addEventListener('load', loadHero)