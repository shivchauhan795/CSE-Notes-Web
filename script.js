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
  let card7 = document.querySelector(".card7");

  card1.addEventListener('click', () => {
    let pageUrl = "./cards/Sem1.html";
    window.location.href = pageUrl;
  });
  card2.addEventListener('click', () => {
    let pageUrl = "./cards/Sem2.html";
    window.location.href = pageUrl;
  });
  card3.addEventListener('click', () => {
    let pageUrl = "./cards/Sem3.html";
    window.location.href = pageUrl;
  });
  card4.addEventListener('click', () => {
    let pageUrl = "./cards/Sem4.html";
    window.location.href = pageUrl;
  });
  card5.addEventListener('click', () => {
    let pageUrl = "./cards/Sem5.html";
    window.location.href = pageUrl;
  });
  card6.addEventListener('click', () => {
    let pageUrl = "./cards/Sem6.html";
    window.location.href = pageUrl;
  });
  card7.addEventListener('click', () => {
    let pageUrl = "./cards/Sem7.html";
    window.location.href = pageUrl;
  });
});