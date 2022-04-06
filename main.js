window.addEventListener("load", main);

function main() {
  addEventListeners();

  function addEventListeners() {
    let hem = document.getElementsByClassName("hem");
    for (let i = 0; i < hem.length; i++) {
      hem[i].onclick = () => scrollToSection("hidden-scroll-div-page-one");
    }

    let bokaTid = document.getElementsByClassName("knapp-ett");
    for (let i = 0; i < bokaTid.length; i++) {
      bokaTid[i].onclick = () => scrollToSection("hidden-scroll-div-page-two");
    }

    let omMig = document.getElementsByClassName("knapp-två");
    for (let i = 0; i < omMig.length; i++) {
      omMig[i].onclick = () => scrollToSection("hidden-scroll-div-page-three");
    }

    let kontakt = document.getElementsByClassName("knapp-tre");
    for (let i = 0; i < kontakt.length; i++) {
      kontakt[i].onclick = () => scrollToSection("hidden-scroll-div-page-four");
    }

    let logo = document.getElementsByClassName("logoscroll");
    for (let i = 0; i < logo.length; i++) {
      logo[i].onclick = () => scrollToSection("hidden-scroll-div-page-one");
    }
  }

  function scrollToSection(nextSection) {
    document.getElementById(nextSection).scrollIntoView({ behavior: "smooth" });
    if ((nextSection.style.color = "#dadada")) {
      nextSection.style.color = "red";
    }
  }
}
