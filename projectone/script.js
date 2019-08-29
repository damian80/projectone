// plan is after click the BUTTON the BODY background will change

// select button from html (variable)
const colorBtn = document.querySelector('.colorBtn');
// select body from html (variable)
const bodyBcg = document.querySelector('body');
// choose the colors (array)
const colors = ['yellow','red','green','purple'];
// i selected the button now telling what needs to happen after click on button (eventlistener)
colorBtn.addEventListener('click',changeColor);
// creating the "CHANGECOLOR" function
// creating variable with Math.random to choose random colors
function changeColor (){
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}


