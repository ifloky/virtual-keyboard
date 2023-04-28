export function enterBtn(renderKeyboard, keys, wrpr) {
  const keysBtn = document.querySelectorAll('.keyboard__btn');
  const txtArea = document.querySelector('.text-area');
  const subBtn = document.querySelectorAll('.keyboard__btn-sub-value');

  for (let k of keysBtn) {
    k.onclick = function clickKey(e) {
      const dataCode = k.getAttribute("data-code");


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
        dataCode === "AltRight") {
        e.preventDefault()
      } else if (dataCode === "ShiftLeft" || dataCode === "ShiftRight") {
        //renderKeyboard(keys.keysEnShift, wrpr)
      } else {
        txtArea.textContent += k.textContent[0];
      }


    }
  }

  document.addEventListener('keydown', (e) => {
    for (let i = 0; i < keysBtn.length; i++) {
      if (e.code === keysBtn[i].dataset.code) {
        keysBtn[i].classList.add('activeBtn')
        txtArea.textContent += keysBtn[i].textContent[0];
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
