import { enterBtn } from "./event-handlers.js";

export function handleShiftAlt(renderKeyboard, keys, wrpr, lang, txtArea) {
  let shiftPressed = false;
  let altPressed = false;

  document.addEventListener('click', (e) => {
    txtArea.focus();
    let removeStyleBtn = document.querySelectorAll(".keyboard__btn");
    removeStyleBtn.forEach((e) => {
      e.classList.remove("activeBtn")
    })
    if (e.target.dataset.code === "ShiftLeft") {
      shiftPressed = true;
      e.target.classList.add("activeBtn");
    }
    if (e.target.dataset.code === "AltLeft") {
      altPressed = true;
      e.target.classList.add("activeBtn");
    }

    if (shiftPressed && altPressed) {
      shiftPressed = false;
      altPressed = false;
      lang = localStorage.getItem("Lang") === 'keysEn' ? 'keysRu' : 'keysEn';
      localStorage.setItem('Lang', lang);
      let keyboard = document.querySelector(".keyboard");
      wrpr.removeChild(keyboard);
      renderKeyboard(keys[lang], wrpr);
      enterBtn(txtArea, wrpr, lang);
    }
  });

  document.addEventListener('keydown', (e) => {
    txtArea.focus();
    let removeStyleBtn = document.querySelectorAll(".keyboard__btn");
    removeStyleBtn.forEach((e) => {
    })
    if (e.code === "ShiftLeft") {
      shiftPressed = true;
    }
    if (e.code === "AltLeft") {
      altPressed = true;
    }

    if (shiftPressed && altPressed) {
      shiftPressed = false;
      altPressed = false;
      lang = localStorage.getItem("Lang") === 'keysEn' ? 'keysRu' : 'keysEn';
      localStorage.setItem('Lang', lang);
      let keyboard = document.querySelector(".keyboard");
      wrpr.removeChild(keyboard);
      renderKeyboard(keys[lang], wrpr);
      enterBtn(txtArea, wrpr, lang);
    }
  });

}