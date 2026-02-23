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
const btnPoli = document.getElementById("btn-poligraficas");
const btnPre = document.getElementById("btnPreempleo");
const btnRut = document.getElementById("btnRutina");
const btnEspe = document.getElementById("btnEspeficos");
const contPoli = document.querySelector(".cont-Pre-rut");
const contServ = document.querySelector(".cont-serv");
const EstudiosVeri= document.getElementById("estudios-veri");
const contEstuVeri = document.querySelector(".cont-Pre-estu");
const btnEstudiosVeri = document.getElementById("btn-estudios-veri");
const btnVisitasLink = document.getElementById("linkVisitas");
const conocenos = document.getElementById("conocenos");
const quieneSomos = document.getElementById("quienes-somos");
const queEsPorque = document.getElementById("que-porque");
const NuestrosServicios = document.getElementById("nuestros-serv");
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

      /* Tooltip para WhatsApp: en desktop aparece con :hover (CSS), en móvil primer toque muestra mensaje */
      (() => {
        const waBtn = document.getElementById('whatsappBtn');
        const waTooltip = document.getElementById('whatsappTooltip');
        if (!waBtn || !waTooltip) return;

        let waVisible = false;

        waBtn.addEventListener('click', (e) => {
          // En dispositivos táctiles o pantallas pequeñas, el primer toque muestra el tooltip
          const isTouch = navigator.maxTouchPoints > 0 || ('ontouchstart' in window);
          if ((window.innerWidth <= 768 || isTouch) && !waTooltip.classList.contains('visible')) {
            e.preventDefault();
            waTooltip.classList.add('visible');
            waBtn.setAttribute('aria-expanded', 'true');
            waVisible = true;
            // ocultar automáticamente pasados 4 segundos
            setTimeout(() => {
              waTooltip.classList.remove('visible');
              waBtn.setAttribute('aria-expanded', 'false');
              waVisible = false;
            }, 4000);
          }
          // Si ya está visible, se permite el comportamiento por defecto (abrir WhatsApp)
        });

        // Cerrar al hacer click fuera
        document.addEventListener('click', (e) => {
          if (waVisible && !waBtn.contains(e.target)) {
            waTooltip.classList.remove('visible');
            waBtn.setAttribute('aria-expanded', 'false');
            waVisible = false;
          }
        });
      })();
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
/*Hacer que dos botones abran el bloque de preubas de poligrafo */
function ocultarTodo(){
  quieneSomos.style.display="none";
  servicios.style.display = "none";
  slider.style.display = "none";
  queEsPorque.style.display = "none";
}
NuestrosServicios.addEventListener("click", ()=>{
  ocultarTodo();
  servicios.style.display = "block";
});
function ServPoligrafia(){
  servicios.style.display = "block";
  contPoli.style.display = "block";
  contServ.style.display ="none";
}
function ServEstudiosVeri(){
  servicios.style.display = "block";
  contEstuVeri.style.display ="block";
  contPoli.style.display = "none";
  contServ.style.display ="none";
}
btnPoli.addEventListener("click",  ()=>{
  ocultarTodo();
  ServPoligrafia();
});
btnEspe.addEventListener("click",  ()=>{
  ocultarTodo();
  ServPoligrafia();
});
btnPre.addEventListener("click",  ()=>{
  ocultarTodo();
  ServPoligrafia();
});
btnRut.addEventListener("click",  ()=>{
  ocultarTodo();
  ServPoligrafia();
});
btnEstudiosVeri.addEventListener("click", ()=>{
  ocultarTodo();
  ServEstudiosVeri();
});
btnVisitasLink.addEventListener("click", ()=>{
  ocultarTodo();
  ServEstudiosVeri();
});
/*HACER QUE SE ENCONDA Y APARESCA LA SECCION CONOCENOS */
conocenos.addEventListener("click",()=>{
  ocultarTodo();
  quieneSomos.style.display="block";
});


