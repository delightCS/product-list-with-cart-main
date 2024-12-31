function totalClick(click) {
  const totalClick = document.querySelector("#totalClicks");
  const sumValue = parseInt(totalClicks.innerText) + click;
  totalClicks.innerText = sumValue;

  if (sumValue === -1) {
    hiddenDiv.style.display = "block";
    totalClicks.innerText = 0;
  }
}

function hideTheDiv() {
  if (hiddenDiv.style.display === "none") {
    hiddenDiv.style.display = "block";
  } else {
    hiddenDiv.style.display = "none";
    image.style = "border: 2px solid hsl(14, 86%, 42%); border-radius: 8px";
  }
}

function showTheBorder() {
  if (hiddenDiv.style.display === "block") {
    image.style.border = "none";
  } else {
    image.style = "border: 2px solid hsl(14, 86%, 42%); border-radius: 8px";
  }
}

let hiddenDiv = document.querySelector(".hiddenDiv");
let image = document.querySelector(".image");
let showBorder = document.querySelector(".showBorder");
