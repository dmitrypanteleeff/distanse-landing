const menuBtn = document.querySelector(".header-block__m-menu");
const menuSidebar = document.querySelector(".main__menu-sidebar");
const darkFon = document.querySelector(".main__feed-fon");
const line1 = document.querySelector(".line__line-1");
const line2 = document.querySelector(".line__line-2");
const line3 = document.querySelector(".line__line-3");
menuBtn.addEventListener("click",function(){
    menuSidebar.classList.toggle("main__menu-sidebar--active");
    darkFon.classList.toggle("main__feed-fon--active");
    line1.classList.toggle("line__line-1--active");
    line2.classList.toggle("line__line-2--active");
    line3.classList.toggle("line__line-3--active");
    console.log("проверка");
});