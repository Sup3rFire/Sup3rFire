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

const startTime = new Date();

const typed = document.getElementById("typed");
const strings = [
  "a developer!",
  "a tetris enthusiast!",
  "an osu! player!",
  "a student!",
];
let currentString = "a developer!";

function backspace() {
  setTimeout(function () {
    typed.innerText = typed.innerText.slice(0, -1);
    if (typed.innerText.length == 0) {
      let currentStringIndex = strings.indexOf(currentString) + 1;
      if (currentStringIndex >= strings.length) currentStringIndex = 0;
      currentString = strings[currentStringIndex];
      if (new Date() - startTime > 60000 && Math.random() < 0.05)
        startTyping("a furry!");
      else startTyping();
    } else backspace();
  }, 50);
}
function startTyping(string = currentString) {
  setTimeout(function () {
    typed.innerHTML += string[typed.innerHTML.length];
    if (typed.innerText.length == string.length) setTimeout(backspace, 1500);
    else startTyping(string);
  }, 70);
}
backspace();
