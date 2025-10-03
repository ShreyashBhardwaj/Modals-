"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalButton = document.querySelector(".close-modal");
const allModalButton = document.querySelectorAll(".show-modal");

allModalButton.forEach((element) => {
  element.addEventListener("click", showModal);
});

closeModalButton.addEventListener("click", hideModal);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    hideModal();
  }
});

function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
