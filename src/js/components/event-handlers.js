import { renderKeyboard } from "./keyboard.js";
import * as keys from "./key.js"

export function enterBtn(txtArea, wrapper, lang) {
  const keysBtn = document.querySelectorAll('.keyboard__btn');
  let shiftdown = true;

  for (let k of keysBtn) {
    k.addEventListener('click', function clickKey(e) {
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
        dataCode === "Delete" ) {
        e.preventDefault()
      } else {
        txtArea.value += k.textContent[0];
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (e.target.dataset.code === 'Backspace' && txtArea.value.length > 0){
      txtArea.value = txtArea.value.slice(0, -1);
    } else if (e.target.dataset.code === 'Enter'){
      txtArea.value += "\n";
    } else if (e.target.dataset.code === 'CapsLock'){
      if (shiftdown) {
        shiftdown = false;
        let shiftLang = lang+`Shift`;
        wrapper.removeChild(document.querySelector(".keyboard"));
        renderKeyboard(keys[shiftLang], wrapper);
      } else {
        shiftdown = true;
        wrapper.removeChild(document.querySelector(".keyboard"));
        renderKeyboard(keys[lang], wrapper);
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    for (let i = 0; i < keysBtn.length; i++) {
      if (e.code === keysBtn[i].dataset.code) {
        keysBtn[i].classList.add('activeBtn');
        if (keysBtn[i].dataset.code === "Backspace" ||
        keysBtn[i].dataset.code === "CapsLock" ||
        keysBtn[i].dataset.code === "Enter" ||
        keysBtn[i].dataset.code === "MetaLeft" ||
        keysBtn[i].dataset.code === "Space" ||
        keysBtn[i].dataset.code === "ShiftLeft" ||
        keysBtn[i].dataset.code === "ShiftRight" ||
        keysBtn[i].dataset.code === "ControlLeft" ||
        keysBtn[i].dataset.code === "ControlRight" ||
        keysBtn[i].dataset.code === "AltLeft" ||
        keysBtn[i].dataset.code === "AltRight"||
        keysBtn[i].dataset.code === "Tab" ||
        keysBtn[i].dataset.code === "Delete") {
          e.preventDefault()
        } else {
          txtArea.value += keysBtn[i].textContent[0];
        }
      }
    }
  });

  
  document.addEventListener('keydown', (e) => {
    if (keysBtn[i].dataset.code === "Backspace") {

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
