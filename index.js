window.onload = function () {
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    document.querySelectorAll("#animation").forEach((move) => {
      const x = -e.clientX / 15;
      const y = -e.clientY / 15;
      move.style.transform =
        "translateX(" + x + "px) translateY(" + y + "px) perspective(43.75rem)";
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".option--text");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

const viewProjects = document.querySelector(".view-computer__container");
const buttonView = document.querySelector(".button--computer");

const openView = () => {
  if (viewProjects.style.width === "75%") {
    viewProjects.style.width = "0%";
    viewProjects.style.height = "0%";
    buttonView.style.top = "0";
  } else {
    viewProjects.style.width = "75%";
    viewProjects.style.height = "51%";
    buttonView.style.top = "-58%";
  }
};

const handleContactMe = () => {
  window.open('https://wa.me/573013061414')
}

const menuOptions = document.querySelectorAll("#nav-option");

const handleMenu = () => {
  menuOptions.forEach((option, index) => {
    if (index !== 0) {
      console.log(option.style.display);
      if (option.style.display === "none") {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    }
  });
};

const information = document.getElementById("information");
const information1 = document.getElementById("information1");
const information2 = document.getElementById("information2");
const information3 = document.getElementById("information3");
const illustration = document.getElementById("illustration");
const illustration1 = document.getElementById("illustration1");
const illustration2 = document.getElementById("illustration2");
const illustration3 = document.getElementById("illustration3");

const loadInformation = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
};

const observer = new IntersectionObserver(loadInformation, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5,
});

observer.observe(information);
observer.observe(information1);
observer.observe(information2);
observer.observe(information3);
observer.observe(illustration);
observer.observe(illustration1);
observer.observe(illustration2);
observer.observe(illustration3);
