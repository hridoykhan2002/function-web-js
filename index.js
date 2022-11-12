

// date start
const date = document.querySelector('.date');

date.innerHTML = new Date().getFullYear();
// date end

// navbar start
const btn = document.querySelector('.BtnB');
const nablink = document.querySelector('.link');

btn.addEventListener('click',() =>{
    if(nablink.classList.contains('show-link')){
        nablink.classList.remove('show-link');
    }else{
        nablink.classList.add('show-link');
    }
});

// fixed navbar 
const navItem = document.querySelector('#nav-item');

const back = document.querySelector('.back');

window.addEventListener('scroll',() =>{
    const scrollheight = window.pageYOffset;
    const navHeight = navItem.getBoundingClientRect().height;
    if(scrollheight>navHeight){
        navItem.classList.add('navbar-item')
    }else{
        navItem.classList.remove('navbar-item')
    }

    if(scrollheight>800){
        back.classList.add('back-btn')
    }else{
        back.classList.remove('back-btn')
    }
})
// nabvar end

// smoth behivior start
const sLink = document.querySelectorAll('.Slink');

sLink.forEach((link) =>{
    link.addEventListener('click',(e) =>{
        e.preventDefault();
        const getValue = e.currentTarget.getAttribute('href').slice(1);
        const PassValue = document.getElementById(getValue);
        let position = PassValue.offsetTop;
        window.scrollTo({
            left:0,
            top:position
        })
    })
})

// smoth behivior end