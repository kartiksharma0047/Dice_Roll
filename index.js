let page2 = document.querySelector(".Loadingbar");
let loadingh1 = document.querySelector(".Bar h1");
let dots = document.querySelectorAll(".Bar h1 i");
let Start = document.querySelector(".Start");
let startbtn = document.querySelector(".fa-dice-d20");
let gameon = document.querySelector(".gameon");
let dice_box = document.querySelector(".box");
let gift_top = document.querySelector(".gift-top");
let gift_bottom = document.querySelector(".gift-bottom");
let choose_num = document.querySelectorAll(".option ul li");
let show_num = document.querySelector(".show");
let image = document.querySelector(".dice-img");
let show_score = document.querySelector(".score");
let random_number;
let hide = false;
let number;
let dice_img_no;
let score = 0;
let d = 0;
let dd = 2;
let dt = 0;



startbtn.onclick=()=>{
    Start.classList.add("hidden");
    page2.classList.remove("hidden");
    loadingggg();
}

function loadingggg(){
let clear_dice_animation=setInterval(() => {
    if(dt>29){
        clearInterval(clear_dice_animation);
        page2.classList.add("hidden");
        gameon.classList.remove("hidden");
        numberSelection();
    }
    if (d > 2) {
        if (dd < 0) {
            dd = 2;
            d = 0;
        }
        dots[dd].classList.add("hidden");
        dd--;
    }
    else {
        dots[d].classList.remove("hidden");
        d++;
    }
    dt++;
}, 500);
}

function numberSelection() {
    choose_num.forEach((n) => {
        n.onclick = () => {
            hide = true;
            if (!n.classList.contains("disabled")) {
                number = n.textContent;
                show_num.innerHTML = number;
                choose_num.forEach((btn) => {
                    btn.classList.add("disabled");
                });
                if (hide) {
                    Dice_Animation();
                }
            }
        };
    });
}

function Dice_Animation() {
    gift_top.classList.add("fall-up");
    gift_bottom.classList.add("fall-down")
    setTimeout(() => {
        dice_box.classList.add("box-shake");
        random_ans();
        animateGiftBoxes();
    }, 2500);
}

function random_ans() {
    image.innerHTML = "";
    random_number = Math.floor(Math.random() * 6) + 1;
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", `images/dice_${random_number}.png`);
    image.appendChild(imgElement);
}

function animateGiftBoxes() {
    setTimeout(() => {
        dice_box.classList.remove("box-shake");
        gift_top.classList.remove("fall-up");
        gift_bottom.classList.remove("fall-down");
        gift_top.classList.add("remove-up");
        gift_bottom.classList.add("remove-down");
        if(number==random_number){
            score += 5;
            show_score.innerHTML=score;
            show_score.classList.add("plus");
        }
        else{
            score -= 5;
            show_score.innerHTML=score;
            show_score.classList.add("minus");
        }
        setTimeout(() => {
            gift_top.classList.remove("remove-up");
            gift_bottom.classList.remove("remove-down");
            choose_num.forEach((btn) => {
                btn.classList.remove("disabled");
            });
            hide = false;
            show_num.innerHTML = "";
            show_score.classList.remove("minus");
            show_score.classList.remove("plus");
            numberSelection();
        }, 2000);
    }, 5000);
}