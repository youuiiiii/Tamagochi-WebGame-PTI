//jam dan lvl
var startTime = new Date();
var interval = 1000; // Interval kecepatan waktu, dalam milidetik
var speed = 60; // Kecepatan waktu, dalam detik
var level = 1;
var lastDay = new Date().getDate();

function updateTime() {
  var currentTime = new Date();
  var elapsedSeconds = (currentTime - startTime) / 1000;
  var elapsedGameSeconds = Math.floor(elapsedSeconds * speed);
  var hours = Math.floor(elapsedGameSeconds / 3600) % 24;
  var minutes = Math.floor((elapsedGameSeconds % 3600) / 60);
  var timeString = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
  document.getElementById("clock").innerHTML = timeString;

  var salam = "";
  if (hours >= 6 && hours < 11) {
    salam = "Selamat Pagi";
  } else if (hours >= 11 && hours < 15) {
    salam = "Selamat Siang";
  } else if (hours >= 15 && hours < 18) {
    salam = "Selamat Sore";
  } else if (hours >= 18 && hours < 23) {
    salam = "Selamat Malam";
  } else {
    salam = "Selamat Tidur";
  }
  document.getElementById("greeting").innerHTML = salam;

  var imagePath = "";
  if (hours >= 5 && hours < 10) {
    imagePath = "foto/pagii.jpg";
  } else if (hours >= 11 && hours < 15) {
    imagePath = "foto/siangg.jpg";
  } else if (hours >= 15 && hours < 18) {
    imagePath = "foto/soree.jpg";
  } else {
    imagePath = "foto/malamm.jpg";
  }
  document.getElementById("image-container").style.backgroundImage = "url('" + imagePath + "')";

  if (new Date().getDate() > lastDay) {
    level++;
    lastDay = new Date().getDate();
  }
  document.getElementById("level").innerHTML = level;
}

setInterval(updateTime, 500);


