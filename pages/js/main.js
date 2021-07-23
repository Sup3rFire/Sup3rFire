$(document).ready(() => {
  $.getJSON(
    "https://raw.githubusercontent.com/Sup3rFire/Sup3rFire/main/projects.json",
    (data) => {
      data.projects.forEach((e, i) => {
        let projects = "";
        if (i != 0) projects += "<hr>";
        projects += `<div class="item"><h2>${e.title || ""}</h2><p>${
          e.desc || ""
        }</p><div class="info">`;
        if (!!e.links) {
          for (const property in e.links) {
            projects += `<a href="${e.links[property]}" class="link">${property}</a>`;
          }
        }
        projects += "</div></div>";
        $("#projDiv").append(projects);
      });
    }
  );
});

$("#owo")
  .on("mouseover", function () {
    $(this).parent().parent().addClass("owo");
  })
  .on("mouseout", function () {
    $(this).parent().parent().removeClass("owo");
  });

$(document).ready(() => {
  updateClock();
  const now = new Date();
  setTimeout(() => {
    setInterval(updateClock, 1000);
  }, 1000 - now.getMilliseconds());
});

function updateClock() {
  const clientNow = new Date();
  const clientTime = clientNow.getTime();
  const clientOffset = clientNow.getTimezoneOffset() * 60 * 1000;
  const utcTime = clientTime + clientOffset;
  const wibOffset = 7;
  const wib = new Date(utcTime + 60 * 60 * 1000 * wibOffset);
  const hour = clientNow.getUTCHours() + wibOffset;
  const day = wib.getDay();
  let icon;
  let status;
  if (hour < 6 || hour >= 21) {
    icon = '<i class="fas fa-bed"></i>';
    status = "Asleep";
  } else if (hour > 17) {
    icon = '<i class="far fa-times-circle"></i>';
    status = "Offline";
  } else if (day < 6 || day > 7) {
    if (hour < 14) {
      icon = '<i class="fas fa-chalkboard-teacher"></i>';
      status = "In School";
    } else {
      icon = '<i class="fas fa-globe"></i>';
      status = "Online";
    }
  } else {
    if (hour < 13) {
      icon = '<i class="fas fa-user-friends"></i>';
      status = "Playing with friends";
    } else {
      icon = '<i class="fas fa-globe"></i>';
      status = "Online";
    }
  }
  document.getElementById(
    "clockVal"
  ).innerHTML = `${icon} ${wib.toLocaleTimeString()}`;
  document.getElementById("clockStatus").innerHTML = status;
}
