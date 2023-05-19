"use strict";
const headerBtn = document.querySelector(".main-btn");
const noteBoxBtn = document.querySelector(".add-note-btn");
const noteBox = document.querySelector(".add-note-box");
const closeBtn = document.querySelector(".close-svg");
const overlay_element = document.querySelector(".overlay");

//showBox function
const showNoteBox = () => {
  noteBox.classList.remove("hidden");
  overlay_element.classList.remove("hidden");
};
// Exit Box function
const closeNoteBox = () => {
  noteBox.classList.add("hidden");
  overlay_element.classList.add("hidden");
};

//Keydown function

const keyFunc = (e) => {
  if (e.key === "Escape" && !noteBox.classList.contains("hidden")) {
    noteBox.classList.add("hidden");
    overlay_element.classList.add("hidden");
  } else {
    console.log(e.key);
  }
};

overlay_element.addEventListener("click", closeNoteBox);

headerBtn.addEventListener("click", showNoteBox);

closeBtn.addEventListener("click", closeNoteBox);

document.querySelector("body").addEventListener("keydown", keyFunc);

// function to create the note box into the main-note-section class using note class
const mainNoteSection = document.querySelector(".main-note-section");
const myNotes = document.querySelector(".notes");
