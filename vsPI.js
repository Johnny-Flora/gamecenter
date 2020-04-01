"use strict";

{
  const gameWindow = document.getElementById("gameWindow");
  const modal = document.getElementById("modal");
  const titleContents = document.getElementById("titleContents");
  const fifty = document.getElementById("fifty");
  const oneHundred = document.getElementById("oneHundred");
  const threeHundred = document.getElementById("threeHundred");
  const game = document.getElementById("game");
  const time = document.getElementById("time");
  const clear = document.getElementById("clear");
  const toTitle = document.getElementById("toTitle");
  const target = document.getElementById("target");
  const piBlock = [
    "3.1415926535",
    "8979323846",
    "2643383279",
    "5028841971",
    "6939937510", //50
    "5820974944",
    "5923078164",
    "0628620899",
    "8628034825",
    "3421170679", //100
    "8214808651",
    "3282306647",
    "0938446095",
    "5058223172",
    "5359408128",
    "4811174502",
    "8410270193",
    "8521105559",
    "6446229489",
    "5493038196", //200
    "4428810975",
    "6659334461",
    "2847564823",
    "3786783165",
    "2712019091",
    "4564856692",
    "3460348610",
    "4543266482",
    "1339360726",
    "0249141273", //300
    "Clear!"
  ]
  let n = 0;
  let pi = piBlock[n];

  let loc = 0;

  let startTime;
  let timeoutId;

  function countUp() {
    const d = new Date(Date.now() - startTime);
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    const ms = String(d.getMilliseconds()).padStart(3, "0");
    time.textContent = `Time: ${m}:${s}.${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  };

  function updateTarget() {
    let placeholder = "";
    for (let i = 0; i < loc; i++) {
      placeholder += "-";
    }
    target.textContent = placeholder + pi.substring(loc);
  }

  gameWindow.addEventListener("click", () => {
    if (titleContents.classList.contains("hidden") === false) {
      modal.classList.remove("hidden");
      titleContents.classList.add("hidden");
    }
  });

  fifty.addEventListener("click", () => {
    gameWindow.classList.add("fiftyGame");
    modal.classList.add("hidden");
    game.classList.remove("hidden");

    target.textContent = pi;

    startTime = Date.now();
    countUp();

  });

  window.addEventListener("keydown", (e) => {
    if (e.key === pi[loc]) {
      loc++;
      if (loc === pi.length) {
        n++;
        if (gameWindow.classList.contains("fiftyGame") && n === 5) {
          n = 0;
          clearTimeout(timeoutId);

          setTimeout(() => {
            clear.classList.remove("hidden");
          }, 100);
          gameWindow.classList.remove("fiftyGame");
        }

        else if (gameWindow.classList.contains("oneHundredGame") && n === 10) {
          n = 0;
          clearTimeout(timeoutId);

          setTimeout(() => {
            clear.classList.remove("hidden");
          }, 100);
          gameWindow.classList.remove("oneHundredGame");
        }

        else if (gameWindow.classList.contains("threeHundredGame") && n === 30) {
          n = 0;
          clearTimeout(timeoutId);

          setTimeout(() => {
            clear.classList.remove("hidden");
          }, 100);
          gameWindow.classList.remove("threeHundredGame");
        }
        pi = piBlock[n];
        loc = 0;
      }
      updateTarget();
    }
  });

  oneHundred.addEventListener("click", () => {
    gameWindow.classList.add("oneHundredGame");
    modal.classList.add("hidden");
    game.classList.remove("hidden");

    target.textContent = pi;

    startTime = Date.now();
    countUp();
  });

  threeHundred.addEventListener("click", () => {
    gameWindow.classList.add("threeHundredGame");
    modal.classList.add("hidden");
    game.classList.remove("hidden");

    target.textContent = pi;

    startTime = Date.now();
    countUp();
  });

  toTitle.addEventListener("click", () => {
    clear.classList.add("hidden");
    game.classList.add("hidden");
    titleContents.classList.remove("hidden");
  });

  document.getElementById("toGameList").addEventListener("click", () => {
    location.href = 'gameList.html';
  });
}
