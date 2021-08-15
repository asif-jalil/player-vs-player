const p1scoreDisplay = document.getElementById("p1score");
const p2scoreDisplay = document.getElementById("p2score");
const targetPoint = document.getElementById("targetPoint");
const pointInput = document.getElementById("pointInput");
const p1Btn = document.getElementById("p1Btn");
const p2Btn = document.getElementById("p2Btn");
const resetBtn = document.getElementById("resetBtn");
const winnerContainer = document.getElementById("winnerContainer");
const winner = document.getElementById("winner");
const looser = document.getElementById("looser");

let game = {
    p1score: 0,
    p2score: 0,
    winningScore: 15,
    p1active: true,
    p2active: true,
    reset() {
        this.p1score = 0;
        this.p2score = 0;
        this.winningScore = 15;
        this.p1active = true;
        this.p2active = true;
        pointInput.value = "";
        targetPoint.innerText = this.winningScore;
        p1Btn.removeAttribute("disabled");
        p2Btn.removeAttribute("disabled");
        p1scoreDisplay.innerText = this.p1score;
        p2scoreDisplay.innerText = this.p2score;
        winnerContainer.classList.add("d-none");
        winner.innerText = "";
    },
    winning(userScore) {
        if (userScore >= this.winningScore) {
            p1Btn.setAttribute("disabled", "disabled");
            p2Btn.setAttribute("disabled", "disabled");
            winnerContainer.classList.remove("d-none");
            if (this.p1score >= this.winningScore) {
                winner.innerText = "Asif";
                looser.innerText = "Saif";
            } else if (this.p2score >= this.winningScore) {
                winner.innerText = "Saif";
                looser.innerText = "Asif";
            }
        }
    }
};

p1Btn.addEventListener("click", function () {
    if (
        game.p1score < game.winningScore &&
        game.p2score < game.winningScore &&
        game.p1active
    ) {
        game.p1score = game.p1score + Math.floor(Math.random() * 6 + 1);
        if (game.p1score > 0) {
            game.p1active = !game.p1active;
        }

        if (game.p2score > 0) {
            game.p2active = !game.p2active;
        }
    }

    if (!game.p1active) {
        p1Btn.setAttribute("disabled", "disabled");
        p2Btn.removeAttribute("disabled");
    }

    game.winning(game.p1score);
    p1scoreDisplay.innerText = game.p1score;
});

p2Btn.addEventListener("click", function () {
    if (
        game.p1score < game.winningScore &&
        game.p2score < game.winningScore &&
        game.p2active
    ) {
        game.p2score = game.p2score + Math.floor(Math.random() * 6 + 1);
        if (game.p1score > 0) {
            game.p1active = !game.p1active;
        }

        if (game.p2score > 0) {
            game.p2active = !game.p2active;
        }
    }

    if (!game.p2active) {
        p2Btn.setAttribute("disabled", "disabled");
        p1Btn.removeAttribute("disabled");
    }

    game.winning(game.p2score);
    p2scoreDisplay.innerText = game.p2score;
});

resetBtn.addEventListener("click", game.reset.bind(game));

pointInput.addEventListener("keyup", function (e) {
    let getNumber = Number(e.target.value);
    game.winningScore = getNumber;
    targetPoint.innerText = getNumber;
    game.p1score = 0;
    game.p2score = 0;
    game.p1active = true;
    game.p2active = true;
    p1scoreDisplay.innerText = game.p1score;
    p2scoreDisplay.innerText = game.p2score;
    p1Btn.removeAttribute("disabled");
    p2Btn.removeAttribute("disabled");
    winnerContainer.classList.add("d-none");
    winner.innerText = "";
});
