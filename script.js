const sections = document.querySelectorAll("section");
const menuBtn = document.getElementById("menuBtn");
const hijoPoli = document.getElementById("hijo-poli");
    const showSections = () => {
      const trigger = window.innerHeight * 0.85;
      sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < trigger) sec.classList.add("visible");
      });
    };
    window.addEventListener("scroll", showSections);
    showSections();

