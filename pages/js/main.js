const $ = function (id) {
  return document.getElementById(id);
};

const projDiv = $("projects");
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

const typed = $("header-titles");
const strings = [
  "a developer!",
  "a tetris enthusiast!",
  "an osu! player!",
  "a student!",
];
let currentString = "a developer!";

function backspace() {
  typed.classList.remove("blinking");
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
    if (typed.innerText.length == string.length) {
      typed.classList.add("blinking");
      setTimeout(backspace, 1500);
    } else startTyping(string);
  }, 70);
}
backspace();

const FEE = $("fursuit-easter-egg");

let FEETimeout = null;
function FEEmouseoverListener() {
  if (!FEETimeout)
    FEETimeout = setTimeout(function () {
      FEE.classList.add("typed");
      FEE.removeEventListener("mouseover", FEEmouseoverListener);
      FEE.removeEventListener("mouseout", FEEmouseoutListener);
      deleteFursuit(0)();
    }, 5000);
}
function FEEmouseoutListener() {
  if (FEETimeout) {
    clearTimeout(FEETimeout);
    FEETimeout = null;
  }
}
FEE.addEventListener("mouseover", FEEmouseoverListener);
FEE.addEventListener("mouseout", FEEmouseoutListener);

function deleteFursuit(i) {
  return function () {
    if (i >= 7) {
      setTimeout(typeMurrsuit(0), 70);
    } else {
      FEE.innerText = FEE.innerText.trim().slice(0, -1);
      setTimeout(deleteFursuit(i + 1), 50);
    }
  };
}
function typeMurrsuit(i) {
  return function () {
    if (i >= 8) {
      FEE.classList.add("blinking");
      setTimeout(function () {
        FEE.classList.remove("typed", "blinking");
      }, 1000);
    } else {
      FEE.innerHTML += "murrsuit"[i];
      setTimeout(typeMurrsuit(i + 1), 70);
    }
  };
}

const AAText = $("anthropomorphic-animals");

let AATimeout = null;
AAText.addEventListener("mouseover", function () {
  if (!AATimeout)
    AATimeout = setTimeout(function () {
      $("profile-img").src = "/img/owo.png";
    }, 5000);
});
AAText.addEventListener("mouseout", function () {
  if (AATimeout) {
    clearTimeout(AATimeout);
    AATimeout = null;
  }
});
