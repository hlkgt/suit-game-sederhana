// Select all the icons in the player's choices and the computer's choice icon
const iconPlayer = document.querySelectorAll(".list-icon .box-icon");
const iconCom = document.querySelector(".com-area .box-icon");

// Select the refresh button and the information area
const refreshButton = document.querySelector(".refresh-button");
const areaInfo = document.querySelector(".info-game");

// Define variables for the game options and information
const batu = "<i class='fa-solid fa-hand-back-fist'></i>";
const gunting = "<i class='fa-solid fa-scissors'></i>";
const kertas = "<i class='fa-solid fa-file'></i>";
let choicePlayer = "";
let choiceCom = "";
let info = "";

// Get the computer's choice
const getChoiceCom = () => {
  const choices = ["batu", "gunting", "kertas"];
  return choices[Math.floor(Math.random() * 3)];
};

// Display the result of the game
const displayResult = (result) => {
  if (result === "Player Menang") {
    document.body.style.backgroundColor = "#00b050"; // Change background color to green
  } else if (result === "Player Kalah") {
    document.body.style.backgroundColor = "#d90429"; // Change background color to red
  } else {
    document.body.style.backgroundColor = "#fee440"; // Change background color to yellow
  }
};

// Determine the winner of the game based on the player's and computer's choices
const rules = (choicePlayer, choiceCom) => {
  if (choicePlayer === choiceCom) {
    info = "Game Seri";
  } else if (
    (choicePlayer === "batu" && choiceCom === "gunting") ||
    (choicePlayer === "gunting" && choiceCom === "kertas") ||
    (choicePlayer === "kertas" && choiceCom === "batu")
  ) {
    info = "Player Menang";
  } else {
    info = "Player Kalah";
  }
};

// Display the computer's choice
const displayChoice = (choice) => {
  if (choice === "batu") {
    iconCom.innerHTML = batu;
  } else if (choice === "gunting") {
    iconCom.innerHTML = gunting;
  } else {
    iconCom.innerHTML = kertas;
  }
};

// Disable the player's choice icons after selecting one
const disablePlayerIcons = () => {
  iconPlayer.forEach((icon) => icon.setAttribute("disabled", true));
};

// Add event listeners to the player's choice icons
iconPlayer.forEach((icon, index) => {
  icon.addEventListener("click", function () {
    choicePlayer = icon.getAttribute("data-icon");
    switch (choicePlayer) {
      case "batu":
        iconPlayer[1].style.display = "none";
        iconPlayer[2].style.display = "none";
        break;
      case "gunting":
        iconPlayer[0].style.display = "none";
        iconPlayer[2].style.display = "none";
        break;
      case "kertas":
        iconPlayer[0].style.display = "none";
        iconPlayer[1].style.display = "none";
        break;
      default:
        break;
    }
    choiceCom = getChoiceCom();
    rules(choicePlayer, choiceCom);
    displayChoice(choiceCom);
    areaInfo.append(info);
    refreshButton.style.display = "block";
    disablePlayerIcons();
    displayResult(info);
  });
});

// Reload the page when the refresh button is clicked
refreshButton.addEventListener("click", function () {
  document.location.reload();
});
