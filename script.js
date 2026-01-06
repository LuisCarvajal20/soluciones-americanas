const sections = document.querySelectorAll("section");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById('navMenu');
const subMenu =document.getElementById('subMenu');
const servicios =document.getElementById('servicios');
    const showSections = () => {
      const trigger = window.innerHeight * 0.85;
      sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < trigger) sec.classList.add("visible");
      });
    };
    window.addEventListener("scroll", showSections);
    showSections();
menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
});
/* Submenús en móvil */
servicios.addEventListener("click", function (e) {
  e.preventDefault(); // evita que el link recargue

  subMenu.style.display = "block";
});