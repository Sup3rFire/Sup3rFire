$(document).ready(() => {
  $.getJSON(
    "https://raw.githubusercontent.com/Sup3rFire/Sup3rFire/main/cert.json",
    (data) => {
      console.log(data);
      data.certs.forEach((e, i) => {
        $("#certs").append(
          "<a href='" +
            e.link +
            "'><img class='img-fluid' src='" +
            e.img +
            "'></a>"
        );
      });
    }
  );
});
