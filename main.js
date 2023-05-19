"use strict";
const headerBtn = document.querySelector(".main-btn");
const noteBoxBtn = document.querySelector(".add-note-btn");
const noteBox = document.querySelector(".add-note-box");
const closeBtn = document.querySelector(".close-svg");

headerBtn.addEventListener("click", () => {
  noteBox.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  noteBox.classList.add("hidden");
});

const keyFunc = (e) => {
  if (e.key === "Escape" && !noteBox.classList.contains("hidden"))
    noteBox.classList.add("hidden");
};

document.querySelector("body").addEventListener("keydown", keyFunc);
