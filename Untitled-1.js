// variabel hunger
var hungerBar = document.getElementById("hunger-bar");
var hungerValue = 100;
var hungerInterval = setInterval(reduceHunger, 1000);

// variabel health
var healthBar = document.getElementById("health-bar");
var healthValue = 100;
var healthInterval = setInterval(reduceHealth, 2000);

// variabel sleep
var sleepBar = document.getElementById("sleep-bar");
var sleepValue = 100;
var sleepInterval = setInterval(reduceSleep, 3000);

// fungsi untuk mengurangi nilai hunger
function reduceHunger() {
  hungerValue--;
  hungerBar.style.width = hungerValue + "%";
  if (hungerValue <= 0) {
    clearInterval(hungerInterval);
    alert("Game Over! Your character has starved to death.");
  }
}

// fungsi untuk mengurangi nilai health
function reduceHealth() {
  healthValue--;
  healthBar.style.width = healthValue + "%";
  if (healthValue <= 0) {
    clearInterval(healthInterval);
    alert("Game Over! Your character has died of illness.");
  }
}

// fungsi untuk mengurangi nilai sleep
function reduceSleep() {
  sleepValue--;
  sleepBar.style.width = sleepValue + "%";
  if (sleepValue <= 0) {
    clearInterval(sleepInterval);
    alert("Game Over! Your character has died of exhaustion.");
  }
}

// fungsi untuk menambah nilai hunger
function increaseHunger() {
  hungerValue += 10;
  if (hungerValue > 100) {
    hungerValue = 100;
  }
  hungerBar.style.width = hungerValue + "%";
}

// fungsi untuk menambah nilai health
function increaseHealth() {
  healthValue += 10;
  if (healthValue > 100) {
    healthValue = 100;
  }
  healthBar.style.width = healthValue + "%";
}

// fungsi untuk menambah nilai sleep
function increaseSleep() {
  sleepValue += 10;
  if (sleepValue > 100) {
    sleepValue = 100;
  }
  sleepBar.style.width = sleepValue + "%";
}
