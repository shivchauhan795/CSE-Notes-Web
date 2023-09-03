function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  let card1 = document.querySelector(".card1");
  let card2 = document.querySelector(".card2");
  let card3 = document.querySelector(".card3");
  let card4 = document.querySelector(".card4");
  let card5 = document.querySelector(".card5");
  let card6 = document.querySelector(".card6");

  card1.addEventListener('click', () => {
    let pageUrl = "./HTML Files/Sem1.html";
    window.location.href = pageUrl;
  });
  card2.addEventListener('click', () => {
    let pageUrl = "./HTML Files/Sem2.html";
    window.location.href = pageUrl;
  });
  card3.addEventListener('click', () => {
    let pageUrl = "./HTML Files/Sem3.html";
    window.location.href = pageUrl;
  });
  card4.addEventListener('click', () => {
    let pageUrl = "./HTML Files/Sem4.html";
    window.location.href = pageUrl;
  });
  card5.addEventListener('click', () => {
    let pageUrl = "./HTML Files/Sem5.html";
    window.location.href = pageUrl;
  });
  card6.addEventListener('click', () => {
    let pageUrl = "./HTML Files/Sem6.html";
    window.location.href = pageUrl;
  });
});