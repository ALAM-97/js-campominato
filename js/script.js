// 1. Il computer deve generare 16 numeri casuali tra 1 e 100(bombe).
// 1a. I numeri non possono essere duplicati.
// 2. In seguito il giocatore clicca sulle celle numerate(non può cliccare più volte sulla stessa cella).
// 3. La partita termina quando il giocatore clicca su una bomba o clicca su tutte le celle che non sono delle bombe.
// 4 Al termine della partita il software deve comunicare il punteggio.

// FUNCTIONS
// 1.
function bombGenerator(arr) {
    for (var i = 1; i <= 16; i++) {
        var randomNum = Math.round(Math.random() * 100 + 1);
        // 1a.
        if (arr.includes(randomNum)) {
            i += -1;
        } else {
            arr.push(randomNum);
        }
    }   
}
// PROGRAM

var bombs = [];
var clicked = [];
bombGenerator(bombs);

var genBtn = document.getElementById("gen-btn");

genBtn.addEventListener("click",
    function () {
        // 2.
        for (var i = 1; i <= 100; i++) {
            document.getElementById("wrapper").innerHTML += `<div class="square"> ${i} </div>`;
        }

        // 3.
        document.getElementById("wrapper").addEventListener("click",
            function (event) {
                var selectNum = event.target.innerHTML;
                clicked.push(selectNum);
                event.target.classList.add("clicked");

                var selected = document.getElementsByClassName("clicked");
                if (clicked.includes(event.target.innerHTML)) {
                    clicked.!push(selectNum);
                }
            }
        );
    }
);

