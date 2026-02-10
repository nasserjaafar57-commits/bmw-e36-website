// Lightbox Code (falls du es noch hast)
const galleryImgs = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// -----------------------------
// Dark Mode Toggle
// -----------------------------
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);

  if (theme === "light") {
    themeToggle.textContent = "Dark Mode";
  } else {
    themeToggle.textContent = "Light Mode";
  }
}

// Theme beim Laden setzen
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

// Toggle Button
themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.className;
  setTheme(currentTheme === "dark" ? "light" : "dark");
});
// Scroll Animation
const slideElements = document.querySelectorAll(".slide-up");

function checkSlide() {
  slideElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkSlide);
window.addEventListener("load", checkSlide);
