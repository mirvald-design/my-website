function scrollToAnchor(anchor) {
  const target = document.getElementById(anchor);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

const projectsButton = document.getElementById("projects");
const hiremeButton = document.getElementById("hireme");

projectsButton.addEventListener("click", () => {
  scrollToAnchor("projects-block");
  projectsButton.classList.add("active");
  hiremeButton.classList.remove("active");
});

hiremeButton.addEventListener("click", () => {
  scrollToAnchor("hireme-block");
  hiremeButton.classList.add("active");
  projectsButton.classList.remove("active");
});

window.addEventListener("load", () => {
  projectsButton.click();
});
