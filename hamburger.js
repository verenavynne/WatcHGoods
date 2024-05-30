// Toggle class active

const navbarMenu= document.querySelector('.Menu');

document.querySelector('#hamburger').onclick = ()=>{
    navbarMenu.classList.toggle('active')
}


// klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target)&& !navbarMenu.contains(e.target)){
        navbarMenu.classList.remove('active');
    }
})