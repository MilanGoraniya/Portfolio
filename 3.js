// Scroll reveal animation
ScrollReveal().reveal('.section h1, .section p, .project, .hh, .pp, .project-card, .project-cardd, .icons', {
  delay: 200,
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  reset: true
});

const text = "Milan Goraniya";
const typedText = document.getElementById("typed-text");

let index = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting) {
    typedText.innerHTML = text.substring(0, index + 1);
    index++;
    if (index === text.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1500); // Pause before deleting
      return;
    }
  } else {
    typedText.innerHTML = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeLoop, isDeleting ? 100 : 150); // Speed: faster delete, slower type
}

window.addEventListener("DOMContentLoaded", () => {
  typeLoop();
});
