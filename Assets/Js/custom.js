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
    const currentItem = btn.closest(".mob-menu_item");
    const currentSubmenu = currentItem.querySelector(".mob-submenu");
    const currentIcon = btn.querySelector("i");

    // Close all other submenus
    document.querySelectorAll(".mob-submenu").forEach(sub => {
      if (sub !== currentSubmenu) {
        sub.classList.add("hidden");
      }
    });

    // Reset all icons
    document.querySelectorAll(".mob-menu_item_link i").forEach(icon => {
      if (icon !== currentIcon) {
        icon.classList.remove("rotate-180");
      }
    });

    // Toggle the current submenu
    currentSubmenu.classList.toggle("hidden");
    currentIcon.classList.toggle("rotate-180");
  });
});







