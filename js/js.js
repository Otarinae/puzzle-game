"use strict";

const piecesOfImage = document.querySelectorAll(".img");

const ordersList = [];

while (ordersList.length <= 15) {
  const order = Math.floor(Math.random() * Math.floor(16));

  if (!ordersList.includes(order)) {
    ordersList.push(order);
  }
}

for (let i = 0; i < piecesOfImage.length; i++) {
  piecesOfImage[i].style.order = ordersList[i];
}

let firstOrder;
let secondOrder;

let firstTarget;
let secondTarget;

function getSwap(event) {
  if (firstOrder === undefined) {
    firstTarget = event.target;
    firstOrder = event.target.style.order;
  } else {
    secondTarget = event.target;
    secondOrder = event.target.style.order;

    firstTarget.style.order = secondOrder;
    secondTarget.style.order = firstOrder;

    firstOrder = undefined;
    secondOrder = undefined;
    firstTarget = undefined;
    secondTarget = undefined;
  }
}

for (let i = 0; i < piecesOfImage.length; i++) {
  piecesOfImage[i].addEventListener("click", getSwap);
}
