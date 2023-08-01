const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  menu.classList.toggle("show-menu");
}

// Branding section
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

// Set first img opacity

imgs[0].style.opacity = opacity;

imgs.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset the opacity
  imgs.forEach((img) => (img.style.opacity = 1));

  current.src = e.target.src;

  // Add fadeIn class
  current.classList.add("fade-in");

  // Remove fade in class after 0.5s
  setTimeout(() => current.classList.remove("fade-in"), 500);

  e.target.style.opacity = opacity;
}
