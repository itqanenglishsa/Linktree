// ================================
// ITQAN Landing Page
// ================================

// Fade Animation
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// ================================
// Button Ripple Effect
// ================================

const buttons = document.querySelectorAll(".main-btn, .link-btn");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        },700);

    });

});

// ================================
// Card 3D Effect
// ================================

const card = document.querySelector(".glass");

document.addEventListener("mousemove",(e)=>{

    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    const rotateY = (e.clientX - x) / 35;
    const rotateX = (y - e.clientY) / 35;

    card.style.transform = `
    perspective(1200px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    `;

});

document.addEventListener("mouseleave",()=>{

    card.style.transform =
    "perspective(1200px) rotateX(0deg) rotateY(0deg)";

});

// ================================
// Floating Circles
// ================================

const circles = document.querySelectorAll(".circle");

document.addEventListener("mousemove",(e)=>{

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    circles.forEach((circle,index)=>{

        const speed = (index+1) * 18;

        circle.style.transform =

        `translate(${x*speed}px,${y*speed}px)`;

    });

});

// ================================
// Button Entrance Animation
// ================================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

buttons.forEach(btn=>{

observer.observe(btn);

});

// ================================
// App Store Detection
// ================================

const appButton=document.querySelector(".main-btn");

const ua=navigator.userAgent.toLowerCase();

if(ua.includes("android")){

appButton.innerHTML=`

<i class="fa-brands fa-google-play"></i>

<span>Android Version Coming Soon</span>

`;

appButton.removeAttribute("href");

appButton.style.cursor="default";

appButton.style.opacity=".85";

}

/* ==========================
Stars Generator
========================== */

const stars=document.getElementById("stars");

for(let i=0;i<220;i++){

const star=document.createElement("div");

star.className="star";

const size=Math.random()*3+1;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDuration=

2+Math.random()*5+"s";

star.style.animationDelay=

Math.random()*5+"s";

stars.appendChild(star);

}

/* ==========================
Shooting Stars
========================== */

const shooting=document.getElementById("shooting-stars");

function createStar(){

const s=document.createElement("div");

s.className="shooting-star";

s.style.left=Math.random()*30+"%";

s.style.top=Math.random()*40+"%";

shooting.appendChild(s);

setTimeout(()=>{

s.remove();

},3000);

}

setInterval(createStar,6000);
