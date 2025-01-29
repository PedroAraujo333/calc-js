import { resultInput } from "./calculate.js";

export function clipboardCopy(ev) {
  const button = ev.currentTarget;
  if (button.innerText === "Copy" && resultInput.value !== "ERROR") {
    button.innerText = "Copied!";
    button.classList.add("success");
    navigator.clipboard.writeText(document.getElementById("result").value);
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
}
