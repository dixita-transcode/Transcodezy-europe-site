// mobile menu
const menuIcon = document.getElementById("menu-icon");
const mobMenu = document.querySelector(".mob-menu");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  mobMenu.classList.toggle("active");
});



// menuitem click 
const menuLinks = document.querySelectorAll('.menu .menu-items li > a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuLinks.forEach(li => li.classList.remove('active'));
    link.classList.add('active');
  });
});


// Toggle submenu in mobile screen
document.querySelectorAll(".mob-menu_item_link").forEach(btn => {
  btn.addEventListener("click", () => {
    const submenu = btn.closest(".mob-menu_item").querySelector(".mob-submenu");
    submenu.classList.toggle("hidden");

    btn.querySelector("i").classList.toggle("rotate-180");
  });
});







