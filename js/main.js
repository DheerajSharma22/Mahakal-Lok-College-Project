// Code For Setting Background Color to Active Links.
const windowLoc = window.location.pathname;
const navLinks = document.querySelectorAll("#menu li a");

if (window.location.pathname == "/") {
  navLinks[0].classList.add("active");
} else {
  navLinks.forEach((link) => {
    if (link.href.includes(`${windowLoc}`)) {
      link.classList.add("active");
    }
  });
}

