const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navigation");
const menuIcon = document.querySelector(".menu-icon");

function openMenu() {
  menuBtn.classList.add("active");
  nav.classList.add("active");
  menuIcon.src = "SVG/xmark-solid-full.svg";
  menuBtn.setAttribute("aria-label", "close menu");
}

function closeMenu() {
  menuBtn.classList.remove("active");
  nav.classList.remove("active");
  menuIcon.src = "SVG/bars-solid-full.svg";
  menuBtn.setAttribute("aria-label", "open menu");
}

menuBtn.addEventListener("click", (event) => {
  event.stopPropagation();

  if (nav.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

document.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
    closeMenu();
  }
});
