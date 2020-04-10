const $numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "nine"];
const $dot = document.getElementById("dot");
const $operators = ["add", "sub", "mult", "div"];
const $equal = document.getElementById("eq");
const $clear = document.getElementById("clear");
const $display = document.getElementById("display");
let $buttons_pressed = document.getElementById("keys");

$buttons_pressed.addEventListener("click", ev => {
            let $key = ev.target.textContent;
            if ($key == "AC") {
                $display.innerHTML = "0"
            } else if ($key == "=") {

            } else {
                if ($display.innerHTML == "0") {
                    $display.innerHTML = $key;
                } else {
                    if ($display.innerHTML.length <= 5) {
                        if (!($display.innerHTML.contains("."))) {
                                $display.innerHTML += $key;
                            }
                        }
                    }
                }
            });
