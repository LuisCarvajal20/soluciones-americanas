const sections = document.querySelectorAll("section");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById('navMenu');
const subMenu =document.getElementById('subMenu');
const servicios =document.getElementById('servicios');
const title = document.querySelector('.titulo-logo');
const header = document.querySelector('.header');
const slider = document.getElementById("inicio");
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
    const showSections = () => {
      const trigger = window.innerHeight * 0.85;
      sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < trigger) sec.classList.add("visible");
      });
    };
    window.addEventListener("scroll", showSections);
    showSections();
menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      header.style.position = "fixed";
      header.classList.remove('compact');  
});
/* Submenús en móvil */
servicios.addEventListener("click", function (e) {
  e.preventDefault(); // evita que el link recargue

  subMenu.style.display = "block";
});
/* Cerrar al hacer click fuera */
document.addEventListener('click', (e) => {
  if (
    navMenu.classList.contains('open') &&
    !navMenu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('active');
    header.style.position = "sticky";
  }
});

/* Cerrar al hacer scroll */
let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
  if (navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('active');
    header.style.position = "sticky";
  }
});
/*Hacer qye el titulo se anime al subir y bajar haciendo scroll movil */
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    title.classList.add('hide');
  } else {
    title.classList.remove('hide');
  }
});
/*hacer que se compacte con scrol en litulo y el menu */
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('compact');
    header.style.position = "sticky";
  } else {
    header.classList.remove('compact');
  }
});
/*EMPIEZA LO DE LAS IMAGENES DE PRESENTACION */

const dotsContainer = document.getElementById('dots');
let index = 0;

// Create dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function goToSlide(i) {
  index = i;
  updateSlider();
}
document.getElementById('next').onclick = () => {
  index = (index + 1) % totalSlides;
  updateSlider();
};

document.getElementById('prev').onclick = () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
};
// Auto play
setInterval(() => {
  index = (index + 1) % totalSlides;
  updateSlider();
}, 6000);
 /*PARA HACER QUE SE ANIME DESLIZANDO LAS IMAGENES EN MOVIL */
let currentIndex = 0;
let startX = 0;
let endX = 0;

// FUNCION PARA MOVER SLIDE
function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// TOUCH START
slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

// TOUCH MOVE
slider.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

// TOUCH END
slider.addEventListener("touchend", () => {
  const diff = startX - endX;

  if (diff > 50) {
    // swipe izquierda
    currentIndex = (currentIndex + 1) % totalSlides;
  } else if (diff < -50) {
    // swipe derecha
    currentIndex =
      (currentIndex - 1 + totalSlides) % totalSlides;
  }

  updateSlide();
});
/*TERMINA CODIGO PARA HACER QUE SE ANIME LAS DESLIZADAS EN MOVIL */