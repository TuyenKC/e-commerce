const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
// Detail Product
let mainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("small-img");

for(let i = 0 ; i < smallImg.length; i++){
    smallImg[i].addEventListener('click', function(){
        mainImg.src = smallImg[i].src;
    })  
}