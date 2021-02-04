"use strict";

// const close = document.getElementById(".close");

// const video = document.getElementById("#video");
// function stopVideo() {
//   video.pause();
//   video.currentTime = 0;
// }

//Depeche Mode
const dialog = document.getElementById("mydi");
if (!("show" in dialog)) {
  document.getElementById("promptCompat").className = "no_dialog";
}
dialog.addEventListener("close", function () {
  console.log("Fermeture. ", this.returnValue);
});

//Mylène Farmer
const videoM = document.getElementById("#videoM");

const dialogM = document.getElementById("M");
if (!("show" in dialogM)) {
  document.getElementById("promptCompat").className = "no_dialog";
}
dialogM.addEventListener("close", function () {
  console.log("Fermeture. ", this.returnValue);
});

//Feynamn
const dialogF = document.getElementById("F");
if (!("show" in dialogF)) {
  document.getElementById("promptCompat").className = "no_dialog";
}
dialogF.addEventListener("close", function () {
  console.log("Fermeture. ", this.returnValue);
});
//Sebastian
const dialogS = document.getElementById("S");
if (!("show" in dialogS)) {
  document.getElementById("promptCompat").className = "no_dialog";
}
dialogS.addEventListener("close", function () {
  console.log("Fermeture. ", this.returnValue);
});
//Mega Drive
const dialogMG = document.getElementById("MG");
if (!("show" in dialogMG)) {
  document.getElementById("promptCompat").className = "no_dialog";
}
dialogMG.addEventListener("close", function () {
  console.log("Fermeture. ", this.returnValue);
});
//Lady Gaga
const dialogLG = document.getElementById("LG");
if (!("show" in dialogLG)) {
  document.getElementById("promptCompat").className = "no_dialog";
}
dialogLG.addEventListener("close", function () {
  console.log("Fermeture. ", this.returnValue);
});

// let close = document.addEventListener("click", function () {
//   stopVideo();
// });
