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

function isEqual(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }

  return true;
}

function getSwap(event) {
  if (firstOrder === undefined) {
    firstTarget = event.target;
    firstTarget.classList.add("img--select");
    firstOrder = event.target.style.order;
  } else {
    secondTarget = event.target;
    secondOrder = event.target.style.order;

    firstTarget.style.order = secondOrder;
    secondTarget.style.order = firstOrder;

    firstTarget.classList.remove("img--select");

    firstOrder = undefined;
    secondOrder = undefined;
    firstTarget = undefined;
    secondTarget = undefined;

    const sortedOrders = ordersList;

    sortedOrders.sort((a, b) => a - b);

    const imgArray = [];

    for (let i = 0; i < piecesOfImage.length; i++) {
      imgArray.push(Number(piecesOfImage[i].style.order));
    }

    if (isEqual(imgArray, sortedOrders)) {
      setTimeout(() => {
        alert("Вы молодец");
      }, 1);
    }
  }
}

for (let i = 0; i < piecesOfImage.length; i++) {
  piecesOfImage[i].addEventListener("click", getSwap);
}
