const numberIncrease = document.querySelector("main");
const resetButton = document.querySelector("button");
const numberPlus = document.querySelector(".counter-number");

let count = 0;
const backgroundChange = document.querySelector(".change--color");
let counter = 0;
//console.log(count);
numberIncrease.addEventListener("click", function () {
  //hochzählen und anzeigen
  count++;
  numberPlus.innerText = count;
  counter++;
  backgroundChange.style.setProperty("--zero", counter + "%");
});
console.log(count);

resetButton.addEventListener("click", function () {
  //reset
  count = 0;
  numberPlus.innerText = count;
  counter = 0;
  backgroundChange.style.setProperty("--zero", counter + "%");
});

/* 
Start: Header mit Text und Reset Button, Main mit Counter Zahl
Was: 
-Main wird geklickt und Counter Zahl soll ansteigen + Hintergrund soll Farbe mit jedem Click sich verändern (bis max. 100)
- Reset Button geklickt alles soll zurückgesetzt werden
Wie: addEventListener, click und function für Zähler, function für Hintergrund (toggle?) und function für Reset Button
*/
