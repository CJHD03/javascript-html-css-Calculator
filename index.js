//CALCULATOR PRG

const display = document.getElementById("display");

function appendToDisplay(inputx) {
  display.value += inputx;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value); // dont ever use eval in real code
  } catch (error) {
    display.value = "error";
    clearDisplay();
  }
}
