const gameTitle = document.querySelector(".gameTitle");
const slots = document.querySelectorAll(".slot");
const gridArray = Array.from(slots);
const rematchBtn = document.querySelector(".rematch-btn");
let tracking = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentPlayer = "playerOne";


function z2j() {
    slots.forEach((slot) =>
        slot.addEventListener("click", (e) => {
            const index = gridArray.indexOf(e.target);
            console.log("slots", slots);
            console.log("gridArray", gridArray);
            if (
                slots[index].classList.contains("playerOne") ||
                slots[index].classList.contains("computer")
            ) {
                return;
            }

            slots[index].classList.add("playerOne");
            const spliceNr = tracking.indexOf(index + 1);
            console.log(
                "spliceNr ",
                spliceNr,
                "tracking[spliceNr] ",
                tracking[spliceNr]
            );

            tracking.splice(spliceNr, 1);
            console.log("tracking splice", tracking.splice(spliceNr, 1));
            console.log("tracking ", tracking);

            if (winCheck("playerOne", slots)) {
                gameTitle.innerHTML = "Wygrałeś!";
                playAgain();
            }

            if (tracking.length === 0) {
                gameTitle.innerHTML = "Mamy remis!";
                playAgain();
            }

            if (winCheck("computer", slots)) {
                gameTitle.innerHTML = "Komputer Wygrał!";
                playAgain();
            }


            const random = Math.floor(Math.random() * tracking.length);
            console.log("random ", random, "tracking ", tracking);
            if (tracking.length != 0) {
                const computerIndex = tracking[random];
                slots[computerIndex - 1].classList.add("computer");
                tracking.splice(random, 1);
            }
        })
    );


    function winCheck(player, slots) {
        function check(pos1, pos2, pos3) {
            // console.log(slots)
            if (
                slots[pos1].classList.contains(player) &&
                slots[pos2].classList.contains(player) &&
                slots[pos3].classList.contains(player)
            ) {
                return true;
            } else {
                return false;
            }
        }

        if (check(0, 3, 6)) return true;
        else if (check(1, 4, 7)) return true;
        else if (check(2, 5, 8)) return true;
        else if (check(0, 1, 2)) return true;
        else if (check(3, 4, 5)) return true;
        else if (check(6, 7, 8)) return true;
        else if (check(0, 4, 8)) return true;
        else if (check(2, 4, 6)) return true;
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
        console.log(tracking);
        tracking = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        alert("Czas na kolejną rundę!");

        document.querySelectorAll(".slot").forEach(function (slot) {
            slot.classList.remove("playerOne", "computer");
        });
        gameTitle.innerHTML = "KÓŁKO I KRZYŻYK";
        document.getElementById("resetBtn").remove();
        if (document.getElementById("resetBtn") != null) {
            document.getElementById("resetBtn").remove();
        }
    }
}

z2j();
