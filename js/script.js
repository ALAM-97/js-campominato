// 1. Il computer deve generare 16 numeri casuali tra 1 e 100(bombe).
// 1a. I numeri non possono essere duplicati.
// 2. In seguito il giocatore clicca sulle celle numerate(non può cliccare più volte sulla stessa cella).
// 3. La partita termina quando il giocatore clicca su una bomba o clicca su tutte le celle che non sono delle bombe.
// 4. Al termine della partita il software deve comunicare il punteggio.

// FUNCTIONS

// 1.
// (funzione utilizzata per generare le 16 bombe)
function bombGenerator(arr) {
    for (var i = 1; i <= 16; i++) {
        var randomNum = Math.round(Math.random() * 100);
        // 1a.
        if (arr.includes(randomNum)) {
            i += -1;
        } else {
            arr.push(randomNum);
        }
    }   
}
// (funzione utilizzata per cambiare lo sfondo in base al livello)
function changeBgImage(url) {
    document.body.style.backgroundImage = url;
}

// PROGRAM

var bombs = [];
var clicked = [];
bombGenerator(bombs);

var genBtn = document.getElementById("gen-btn");
var refreshBtn = document.getElementById("refresh");


genBtn.addEventListener("click",
    function () {

        var diffSelect = document.getElementById("dif").value;

        if (diffSelect == 1) {
            for (var i = 1; i <= 100; i++) {
                document.getElementById("wrapper").innerHTML += `<div class="square">${i}</div>`;
            }

            // 2.
            document.getElementById("wrapper").addEventListener("click",
                function(event) {
                    var selectNum = event.target.innerHTML;
                    
                    if (clicked.includes(selectNum)) {
                        alert("Hai già selezionato questa casella");
                    } else {
                        event.target.classList.add("clicked");
                        clicked.push(selectNum);
                        if (clicked.length == 84) {
                            document.getElementById("alert").innerHTML += "HAI VINTO!";
                        }
                    }

                    // 3.
                    for (var i = 0; i < bombs.length; i++) {
                        if (bombs[i] == selectNum) {
                            event.target.classList.add("bomb");
                            document.getElementById("alert").innerHTML += "IL TUO PUNTEGGIO E': " + (clicked.length);
                            if (clicked.includes(selectNum)) {
                                clicked.pop();
                            }
                        }
                    }

                }
            );
        } else if (diffSelect == 2) {
            changeBgImage("url(./img/bg-2.1.jpg)");

            document.getElementById("wrapper").classList.add("dif-field");

            for (var i = 1; i <= 81; i++) {
                document.getElementById("wrapper").innerHTML += `<div class="square water">${i}</div>`;
            }

            // 2.
            document.getElementById("wrapper").addEventListener("click",
                function (event) {
                    var selectNum = event.target.innerHTML;

                    event.target.classList.add("clicked");
                    if (clicked.includes(selectNum)) {
                        alert("Hai già selezionato questa casella");
                    } else {
                        clicked.push(selectNum);
                    }

                    // 3.
                    for (var i = 0; i < bombs.length; i++) {
                        if (bombs[i] == selectNum) {
                            event.target.classList.add("bomb");
                            document.getElementById("alert").innerHTML += "IL TUO PUNTEGGIO E': " + (clicked.length);
                            if (clicked.includes(selectNum)) {
                                clicked.pop();
                            }
                        }
                    }

                }
            );
        } else {
            changeBgImage("url(./img/bg-imp-2.jpg)");

            document.getElementById("wrapper").classList.add("imp-field");

            for (var i = 1; i <= 49; i++) {
                document.getElementById("wrapper").innerHTML += `<div class="square cave">${i}</div>`;
            }

            // 2.
            document.getElementById("wrapper").addEventListener("click",
                function (event) {
                    var selectNum = event.target.innerHTML;

                    event.target.classList.add("clicked");
                    if (clicked.includes(selectNum)) {
                        alert("Hai già selezionato questa casella");
                    } else {
                        clicked.push(selectNum);
                    }

                    // 3.
                    for (var i = 0; i < bombs.length; i++) {
                        if (bombs[i] == selectNum) {
                            event.target.classList.add("bomb");
                            document.getElementById("alert").innerHTML += "IL TUO PUNTEGGIO E': " + (clicked.length);
                            if (clicked.includes(selectNum)) {
                                clicked.pop();
                            }
                        }
                    }
                }
            );
        }
    
    }
);

refreshBtn.addEventListener("click" ,
    function() {
        location.reload();
    }
)