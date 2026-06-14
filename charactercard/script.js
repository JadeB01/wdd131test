let level = 8;
let health = 100;

const levelDisplay = document.getElementById("level");
const healthDisplay = document.getElementById("health");

const attackBtn = document.getElementById("attackBtn");
const levelBtn = document.getElementById("levelBtn");

attackBtn.addEventListener("click", function () {

    if (health > 0) {
        health -= 20;

        if (health <= 0) {
            health = 0;
            alert("Character has died");
        }

        healthDisplay.textContent = health;
    }
});

levelBtn.addEventListener("click", function () {
    level++;
    levelDisplay.textContent = level;
});