"use strict";
let age = 40;
window.addEventListener("load", start);

function start() {
  console.log("Den er startet");
  adultChildOrSenior();
}

function isAdult() {
  console.log("Du er voksen");
  document.querySelector("#message").textContent = "Du er voksen";
}

function isChild() {
  console.log("Du er et barn");
  document.querySelector("#message").textContent = "Du er et barn";
}

function isSenior() {
  console.log("Du er senior");
  document.querySelector("#message").textContent = "Du er senior";
}
function adultChildOrSenior() {
  if (age > 65) {
    isSenior();
  } else if (age >= 18) {
    isAdult();
  } else {
    isChild();
  }
}
