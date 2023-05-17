const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", (e) => {
    e.preventDefault();
    menu.style.visibility = "hidden";
});
// Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel . 
open.addEventListener("click", (e) => {
    e.preventDefault();
    menu.style.visibility = "visible";
});