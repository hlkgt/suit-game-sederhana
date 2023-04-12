// Pick up the icon that the player will choose
const iconPlayer = document.querySelectorAll(".list-icon .box-icon");

// Randomize computer options
let com = Math.ceil(Math.random() * 9);

// Determine Player Options
let choicePlayer = "";

// Determining Computer Options
let choiceCom = "";

//get box-area Com
let iconCom = document.querySelector(".com-area .box-icon");

// icon Com
const batu = "<i class='fa-solid fa-hand-back-fist'></i>";
const gunting = "<i class='fa-solid fa-scissors'></i>";
const kertas = "<i class='fa-solid fa-file'></i>";

// get area info
let areaInfo = document.querySelector(".info-game");

// info game win or lose
let info = "";

// get refresh button
const refreshButton = document.querySelector(".refresh-button");

// Validate Computer Options
if (com < 4) {
  choiceCom = "";
  choiceCom += "batu";
} else if (com >= 4 && com < 7) {
  choiceCom = "";
  choiceCom += "gunting";
} else {
  choiceCom = "";
  choiceCom += "kertas";
}

// rules game
const rules = (choicePlayer, choiceCom) => {
  if (choicePlayer === choiceCom) {
    info += "Game Seri";
  } else if (choicePlayer === "batu") {
    choiceCom === "gunting"
      ? (info += "Player Menang")
      : (info += "Player Kalah");
  } else if (choicePlayer === "gunting") {
    choiceCom === "kertas"
      ? (info += "Player Menang")
      : (info += "Player Kalah");
  } else if (choicePlayer === "kertas") {
    choiceCom === "batu" ? (info += "Player Menang") : (info += "Player Kalah");
  }
};

//Validate Player Choice and take 1 of 3 Player Choice
iconPlayer[0].addEventListener("click", function () {
  iconPlayer[1].remove();
  iconPlayer[2].remove();
  choicePlayer = "";
  choicePlayer += "batu";
  rules(choicePlayer, choiceCom);
  if (choiceCom === "batu") {
    iconCom.innerHTML = batu;
  } else if (choiceCom === "gunting") {
    iconCom.innerHTML = gunting;
  } else {
    iconCom.innerHTML = kertas;
  }
  areaInfo.append(info);
  refreshButton.style.display = "block";
  iconPlayer[0].setAttribute("disabled", true);
  if (info === "Player Menang") {
    document.body.style.backgroundColor = "#00b050";
  } else if (info === "Player Kalah") {
    document.body.style.backgroundColor = "#d90429";
  } else {
    document.body.style.backgroundColor = "#fee440";
  }
});
iconPlayer[1].addEventListener("click", function () {
  iconPlayer[0].remove();
  iconPlayer[2].remove();
  choicePlayer = "";
  choicePlayer += "gunting";
  rules(choicePlayer, choiceCom);
  if (choiceCom === "batu") {
    iconCom.innerHTML = batu;
  } else if (choiceCom === "gunting") {
    iconCom.innerHTML = gunting;
  } else {
    iconCom.innerHTML = kertas;
  }
  areaInfo.append(info);
  refreshButton.style.display = "block";
  iconPlayer[1].setAttribute("disabled", true);
  if (info === "Player Menang") {
    document.body.style.backgroundColor = "#00b050";
  } else if (info === "Player Kalah") {
    document.body.style.backgroundColor = "#d90429";
  } else {
    document.body.style.backgroundColor = "#fee440";
  }
});
iconPlayer[2].addEventListener("click", function () {
  iconPlayer[0].remove();
  iconPlayer[1].remove();
  choicePlayer = "";
  choicePlayer += "kertas";
  rules(choicePlayer, choiceCom);
  if (choiceCom === "batu") {
    iconCom.innerHTML = batu;
  } else if (choiceCom === "gunting") {
    iconCom.innerHTML = gunting;
  } else {
    iconCom.innerHTML = kertas;
  }
  areaInfo.append(info);
  refreshButton.style.display = "block";
  iconPlayer[2].setAttribute("disabled", true);
  if (info === "Player Menang") {
    document.body.style.backgroundColor = "#00b050";
  } else if (info === "Player Kalah") {
    document.body.style.backgroundColor = "#d90429";
  } else {
    document.body.style.backgroundColor = "#fee440";
  }
});

// reload page
refreshButton.addEventListener("click", function () {
  document.location.reload();
});
