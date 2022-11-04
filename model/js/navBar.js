window.addEventListener("scroll", () => {
  var nav = document.querySelector(".navBar");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
