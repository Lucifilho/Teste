const imgs = document.getElementById("primeiro_carrossel");
const img = document.querySelectorAll("#primeiro_carrossel img")

let idx = 0;

function carrossel(){
idx++;

if(idx > img.length - 1){
    idx = 0;
}
    imgs.style.transform = `translateX(${-idx * 500}px)`;

}

setInterval(carrossel, 1800)

const imgs2 = document.getElementById("ultimo_slide");
const img2 = document.querySelectorAll("#ultimo_slide ul")

let y = 0;

function carrossel2(){
idy++;

if(idy > img.length - 1){
    idy = 0;
}
    imgs.style.transform = `translateY(${-idx * 500}px)`;

}

setInterval(carrossel2, 1800)

