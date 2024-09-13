import { input, allowedKeys } from "./variables.js";
import { themeSwitch } from "./theme.js";
import { clipboardCopy } from "./clipboard.js";
import { calculate } from "./calculate.js";

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});
//calculate
document.getElementById("equal").addEventListener("click", calculate);

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});

//theme switcher
document.getElementById("themeSwitcher").addEventListener("click", themeSwitch);

//clipboard
document
  .getElementById("copyToClipboard")
  .addEventListener("click", clipboardCopy);
