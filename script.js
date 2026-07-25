//=============================
// Mobile Menu
//==============================

const menuBtn=document.querySelector(".menu-btn");

const menu=document.querySelector(".menu");

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("show");

});

//==============================
// Sticky Navbar
//==============================

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

navbar.classList.toggle("sticky",window.scrollY>60);

});

//==============================
// Scroll Animation
//==============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


