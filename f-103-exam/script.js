function z2j() {
    const gameTitle = document.querySelector(".gameTitle");
    const rematchBtn = document.querySelector(".rematch");
    const slots = document.querySelectorAll(".slot");
    const gridArray = Array.from(slots);
    let tracking = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let currentPlayer = "playerOne";

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
            const spliceNr = tracking.indexOf(index + 1);

            tracking.splice(spliceNr, 1);


            if (winCheck("playerOne", slots)) {
                gameTitle.innerHTML = "Wygrałeś!";
                document.body.classList.add("over");
                return;
            }


            if (tracking.length === 0) {
                gameTitle.innerHTML = "Mamy remis!";
                document.body.classList.add("over");
                console.log("Nothing Left");
                return;


            }

            console.log("computer move");
            const random = Math.floor(Math.random() * tracking.length);
            const computerIndex = tracking[random];
            slots[computerIndex - 1].classList.add("computer");


            tracking.splice(random, 1);

            if (winCheck("computer", slots)) {
                gameTitle.innerHTML = "Komputer Wygrał!";
                document.body.classList.add("over");
                return;
            }
        })
    );


    rematchBtn.addEventListener("click", () => {
        location.reload();
    });
}


function winCheck(player, slots) {

    function check(pos1, pos2, pos3) {
        console.log(slots);
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

z2j();
