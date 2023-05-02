import * as keys from "./key.js"
import { enterBtn } from "./event-handlers.js";

let shiftdown = false

export function sysBtnClick(renderKeyboard, wrapper, lang, txtArea) {

  document.addEventListener('click', (e) => {
    const cursorPosition = txtArea.selectionStart;
    if (e.target.dataset.code === 'Backspace' && txtArea.value.length > 0) {
      if (cursorPosition > 0) {
        const textBeforeCursor = txtArea.value.slice(0, cursorPosition - 1);
        const textAfterCursor = txtArea.value.slice(cursorPosition);
        txtArea.value = textBeforeCursor + textAfterCursor;
        txtArea.selectionStart = cursorPosition - 1;
        txtArea.selectionEnd = cursorPosition - 1;
      }
    } else if (e.target.dataset.code === 'Enter') {
      txtArea.value += "\n";
    } else if (e.target.dataset.code === 'CapsLock') {
      if (!shiftdown) {
        let shiftLang = lang + `Shift`;
        wrapper.removeChild(document.querySelector(".keyboard"));
        shiftdown = true;
        renderKeyboard(keys[shiftLang], wrapper);
        enterBtn(txtArea, wrapper, lang);
      } else {
        shiftdown = false;
        wrapper.removeChild(document.querySelector(".keyboard"));
        renderKeyboard(keys[lang], wrapper);
        enterBtn(txtArea, wrapper, lang);
      }
    } else if (e.target.dataset.code === 'Delete') {
      if (cursorPosition < txtArea.value.length) {
        const textBeforeCursor = txtArea.value.slice(0, cursorPosition);
        const textAfterCursor = txtArea.value.slice(cursorPosition + 1);
        txtArea.value = textBeforeCursor + textAfterCursor;
        txtArea.selectionStart = cursorPosition;
        txtArea.selectionEnd = cursorPosition;
      }

    } else if (e.target.dataset.code === 'Space' || e.target.dataset.code === 'Tab') {
      txtArea.value = txtArea.value.slice(0, cursorPosition) + " " + txtArea.value.slice(cursorPosition);
      txtArea.selectionStart = cursorPosition + 1;
      txtArea.selectionEnd = cursorPosition + 1;
    }
  });

  document.addEventListener('keydown', (e) => {
    const cursorPosition = txtArea.selectionStart;
    if (e.code === 'Backspace' && txtArea.value.length > 0) {
      if (cursorPosition > 0) {
        const textBeforeCursor = txtArea.value.slice(0, cursorPosition - 1);
        const textAfterCursor = txtArea.value.slice(cursorPosition);
        txtArea.value = textBeforeCursor + textAfterCursor;
        txtArea.selectionStart = cursorPosition - 1;
        txtArea.selectionEnd = cursorPosition - 1;
      }
    } else if (e.code === 'Enter') {
      txtArea.value += "\n";
    } else if (e.code === 'CapsLock') {
      if (!shiftdown) {
        let shiftLang = lang + `Shift`;
        wrapper.removeChild(document.querySelector(".keyboard"));
        shiftdown = true;
        renderKeyboard(keys[shiftLang], wrapper);
        enterBtn(txtArea, wrapper, lang);
      } else {
        shiftdown = false;
        wrapper.removeChild(document.querySelector(".keyboard"));
        renderKeyboard(keys[lang], wrapper);
        enterBtn(txtArea, wrapper, lang);
      }
    } else if (e.code === 'Delete') {
      if (cursorPosition < txtArea.value.length) {
        const textBeforeCursor = txtArea.value.slice(0, cursorPosition);
        const textAfterCursor = txtArea.value.slice(cursorPosition + 1);
        txtArea.value = textBeforeCursor + textAfterCursor;
        txtArea.selectionStart = cursorPosition;
        txtArea.selectionEnd = cursorPosition;
      }

    } else if (e.code === 'Space' || e.target.dataset.code === 'Tab') {
      txtArea.value = txtArea.value.slice(0, cursorPosition) + " " + txtArea.value.slice(cursorPosition);
      txtArea.selectionStart = cursorPosition + 1;
      txtArea.selectionEnd = cursorPosition + 1;
    }
  });


}