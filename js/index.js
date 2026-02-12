document.addEventListener("DOMContentLoaded", function () {

  // MOBILE MENU TOGGLE
  const headerMobile = document.querySelector(".header_mobile");
  const openIcon = document.querySelector(".icon-container");
  const closeIcon = document.querySelector(".icon-container1");

  if (headerMobile && openIcon) {
    openIcon.addEventListener("click", function () {
      headerMobile.classList.toggle("menu-open");
    });
  }

  if (headerMobile && closeIcon) {
    closeIcon.addEventListener("click", function () {
      headerMobile.classList.toggle("menu-open");
    });
  }

  // WHATSAPP SCROLL VISIBILITY
  const whatsapp = document.getElementById("whatsapp");

  if (whatsapp) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 800) {
        whatsapp.style.display = "block";
        whatsapp.style.position = "fixed";
        whatsapp.style.top = "23vh";
      } else {
        whatsapp.style.display = "none";
        whatsapp.style.position = "absolute";
      }
    });
  }

});
