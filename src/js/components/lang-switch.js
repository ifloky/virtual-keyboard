import { enterBtn } from "./event-handlers.js";

export function handleShiftAlt(renderKeyboard, keys, wrpr, lang, txtArea) {
    let shiftPressed = false;
    let altPressed = false;
  
    document.addEventListener('click', (e) => {
      if (e.target.dataset.code === "ShiftLeft") {
        shiftPressed = true;
      }
      if (e.target.dataset.code === "AltLeft") {
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