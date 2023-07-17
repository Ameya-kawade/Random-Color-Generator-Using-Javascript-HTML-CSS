const generateBtn = document.getElementById("generate-btn");
const colorEl = document.getElementById("color");
const bodyEl = document.getElementById("background");
let color_1 = 0;
let color_2 = 0;
let color_3 = 0;
let st = "";

generateBtn.addEventListener("click",function(){
    color_1 = Math.floor((Math.random()*255 + 1));
    color_2 = Math.floor((Math.random()*255 + 1));
    color_3 = Math.floor((Math.random()*255 + 1));
    st = `<p>rgb(${color_1},${color_2},${color_3})</p>`;
    colorEl.innerHTML = st;
    bodyEl.style.backgroundColor = `rgb(${color_1},${color_2},${color_3})`;
});