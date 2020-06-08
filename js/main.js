const menuBtn = document.querySelector(".header-block__m-menu");
const menuSidebar = document.querySelector(".main__menu-sidebar");
menuBtn.addEventListener("click",function(){
    menuSidebar.classList.toggle("main__menu-sidebar--active");
});