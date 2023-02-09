const gameTitle = document.querySelector(".gameTitle");
const slots = document.querySelectorAll(".slot");
const gridArray = Array.from(slots);
const rematchBtn = document.querySelector(".rematch-btn");
let tracking = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let currentPlayer = "playerOne";

function z2j() {
    slots.forEach((slot) =>
        slot.addEventListener("click", (e) => {
            const index = gridArray.indexOf(e.target);
            if (
                slots[index].classList.contains("playerOne") ||
                slots[index].classList.contains("computer")
            ) {
                return;
            }

            slots[index].classList.add("playerOne");
            tracking = tracking.filter((item) => item !== index);

            if (checkWin("playerOne", slots)) {
                gameTitle.innerHTML = "Wygrałeś!";
                playAgain();
                return;
            }

            const random = Math.floor(Math.random() * tracking.length);
            const computerIndex = tracking[random];
            slots[computerIndex].classList.add("computer");
            tracking = tracking.filter((item) => item !== computerIndex);

            if (checkWin("computer", slots)) {
                gameTitle.innerHTML = "Komputer Wygrał!";
                playAgain();
                return;
            }
        })
    );
}

function checkWin(player, slots) {
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winCombinations.some((combination) =>
        combination.every((index) => slots[index].classList.contains(player))
    );
}

function playAgain() {
    let btn = document.createElement("button");
    btn.innerHTML = "Zagraj ponownie!";
    btn.id = "resetBtn";
    document.body.appendChild(btn);

    btn.addEventListener("click", function () {
        clearAll();
    });
}

function clearAll() {
    tracking = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    alert("Czas na kolejną rundę!");
    document.querySelectorAll(".slot").forEach(function (slot) {
        slot.classList.remove("playerOne", "computer");
    });
    gameTitle.innerHTML = "KÓŁKO I KRZYŻYK";
    document.getElementById("resetBtn").remove();
}

z2j();
