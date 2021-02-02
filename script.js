"use strict";

let total = 0;
let totalParagraph = document.querySelector(".total");
let cola = document.querySelector(".cola");
let peanuts = document.querySelector(".peanuts");
let chocolate = document.querySelector(".chocolate");
let gummies = document.querySelector(".gummies");

cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `Total: $${total}`;
});

peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total: $${total}`;
});

chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total: $${total}`;
});
gummies.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total: $${total}`;
});

let coinDiv = document.querySelector(".coins");

const showCoins = (howManyCoins, typeOfCoin) => {
  for (let i = 0; i < howManyCoins; i++) {
    let coin = document.createElement("div");
    coin.classList.add("coin");
    if ((typeOfCoin = `penny`)) {
      coin.style.height = "50px";
      coin.style.width = "50px";
      coin.style.backgroundColor = "brown";
      coin.textContent = "Penny";
    } else if ((typeOfCoin = `nickel`)) {
      coin.style.height = "70px";
      coin.style.width = "70px";
      coin.style.backgroundColor = "gray";
      coin.textContent = "Nickel";
    } else if ((typeOfCoin = `Dime`)) {
      coin.style.height = "40px";
      coin.style.width = "40px";
      coin.style.backgroundColor = "gray";
      coin.textContent = "Dime";
    } else typeOfCoin = `quarter`;
    coin.style.height = "85px";
    coin.style.width = "85px";
    coin.style.backgroundColor = "gray";
    coin.textContent = "Quarter";

    coinDiv.append(coin);
  }
};

let formForMoney = document.querySelector(".form-for-money");
formForMoney.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(formForMoney);
  let typeOfCoin = formData.get("which-coin");
  let howManyCoins = formData.get("how-many");
  showCoins(howManyCoins, typeOfCoin);
});

let lightBulb = document.querySelector(".light-bulb");
lightBulb.addEventListener("click", () => {
  lightBulb.classList.toggle("alternate");
});
