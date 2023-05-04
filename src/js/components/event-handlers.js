import { sysBtnClick } from "./sys-buttons.js";
import { renderKeyboard } from "./keyboard.js";

export function enterBtn(txtArea) {
  const keysBtn = document.querySelectorAll('.keyboard__btn');

  for (let k of keysBtn) {
    k.addEventListener('click', (e) => {
      const dataCode = e.target.dataset.code;
      if (dataCode === "Backspace" ||
        dataCode === "CapsLock" ||
        dataCode === "Enter" ||
        dataCode === "MetaLeft" ||
        dataCode === "Space" ||
        dataCode === "ShiftLeft" ||
        dataCode === "ShiftRight" ||
        dataCode === "ControlLeft" ||
        dataCode === "ControlRight" ||
        dataCode === "AltLeft" ||
        dataCode === "AltRight" ||
        dataCode === "Tab" ||
        dataCode === "Delete") {
        e.preventDefault()
      } else {
        txtArea.value += k.textContent[0];
        txtArea.focus();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    for (let i = 0; i < keysBtn.length; i++) {
      if (e.code === keysBtn[i].dataset.code) {
        keysBtn[i].classList.add('activeBtn');
      }
    }
  });


  document.addEventListener('keyup', (e) => {
    for (let i = 0; i < keysBtn.length; i++) {
      if (e.code === keysBtn[i].dataset.code) {
        keysBtn[i].classList.remove('activeBtn')
      }
    }
  });

}
