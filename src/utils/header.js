console.log("JavaScript file loaded");
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav_li");

  // toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    console.log(nav.classList);

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade ease forwards .5s ${
          index / 7 + 0.5
        }s`;
      }
    });

    //   animate burger
    burger.classList.toggle("toggle");
  });
};

export default navSlide();
