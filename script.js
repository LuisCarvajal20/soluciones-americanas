const sections = document.querySelectorAll("section");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById('navMenu');
const subMenu =document.getElementById('subMenu');
const servicios =document.getElementById('servicios');
const title = document.querySelector('.titulo-logo');
const header = document.querySelector('.header');
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
  }
});

/* Cerrar al hacer scroll */
let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
  if (navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('active');
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
  } else {
    header.classList.remove('compact');
  }
});