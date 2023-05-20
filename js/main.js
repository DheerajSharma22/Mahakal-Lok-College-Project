// Code For Setting Background Color to Active Links.
const windowLoc = window.location.pathname;
const navLinks = document.querySelectorAll("#menu li a");
const navbar = document.querySelector(".navbar");

if (window.location.pathname == "/") {
  navLinks[0].classList.add("active");
} else {
  navLinks.forEach((link) => {
    if (link.href.includes(`${windowLoc}`)) {
      link.classList.add("active");
    }
  });
}

window.onscroll = () => {
  if (window.pageYOffset == 0) {
    navbar.classList.remove("navbarOnScroll");
  }
  if (window.pageYOffset > 0) {
    navbar.classList.add("navbarOnScroll");
  }
};
