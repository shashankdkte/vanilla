const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(direction1, direction2) {
  navItems.forEach((item, idx) => {
    item.classList.replace(
      `slide-${direction1}-${idx + 1}`,
      `slide-${direction2}-${idx + 1}`
    );
  });
}
// function navAnimation(direction1, direction2) {
//   navItems.forEach((item, index) => {
//     item.classList.replace(
//       `slide-${direction1}-${index + 1}`,
//       `slide-${direction2}-${index + 1}`
//     );
//   });
// }

function toggleNav() {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // Animated In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // Animated Out - Nav Items
    navAnimation("in", "out");
  }
}

menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
