document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todos los botones
  const buttons = document.querySelectorAll(".btn__read__more");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const container = btn.closest(".about__content"); // Encuentra su sección
      const dots = container.querySelector(".dots");
      const moreTexts = container.querySelectorAll(".more-text");
      const moreParagraphs = container.querySelectorAll(".more-paragraph");
      const arrow = btn.querySelector(".read__more__icon");

      // Detecta si está oculto
      const isHidden = moreTexts.length > 0 
        ? (moreTexts[0].style.display === "none" || moreTexts[0].style.display === "")
        : (moreParagraphs[0].style.display === "none" || moreParagraphs[0].style.display === "");

      if (isHidden) {
        // Mostrar contenido
        moreTexts.forEach(el => el.style.display = "inline");
        moreParagraphs.forEach(el => el.style.display = "block");
        if (dots) dots.style.display = "none";
        btn.firstChild.textContent = "Leer menos"; 
        arrow.classList.add("arrow__rotate");
      } else {
        // Ocultar contenido
        moreTexts.forEach(el => el.style.display = "none");
        moreParagraphs.forEach(el => el.style.display = "none");
        if (dots) dots.style.display = "inline";
        btn.firstChild.textContent = "Leer más"; 
        arrow.classList.remove("arrow__rotate");
      }
    });
  });
});
