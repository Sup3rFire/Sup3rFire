new Typed("#typed", {
  strings: [
    "a developer!",
    "a tetris enthusiast!",
    "an osu! player!",
    "a student!",
  ],
  loop: true,
  backDelay: 1500,
  backSpeed: 50,
  typeSpeed: 70,
});

window.addEventListener("DOMContentLoaded", () => {
  const projDiv = document.getElementById("projects");
  fetch(
    "https://raw.githubusercontent.com/Sup3rFire/Sup3rFire/main/projects.json"
  )
    .then((data) => data.json())
    .then((data) =>
      data.projects.forEach((project, i) => {
        if (i != 0) projDiv.innerHTML += "<hr>";
        let addDiv = ``;
        addDiv += `<div><h3>${project.title || ""}</h3><p>${
          project.desc || ""
        }</p><div id="links">`;
        if (!!project.links) {
          for (const key in project.links) {
            addDiv += `<a href="${project.links[key]}">${key}</a>`;
          }
        }
        addDiv += "</div></div>";
        projDiv.innerHTML += addDiv;
      })
    );
});
