
export function renderKeyboard(keys) {
  const wrpr = document.createElement("section");
  wrpr.classList.add("wrapper");
  document.body.append(wrpr);

  const txtArea = document.createElement("TEXTAREA");
  txtArea.classList.add("text-area");
  wrpr.append(txtArea);

  const keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");
  wrpr.append(keyboard);

  keys.map((key) => {
    let btn = document.createElement("button");
    btn.innerHTML = key.value + `<span class="keyboard__btn-sub-value">${key.subvalue ? key.subvalue : ""}</span>`;
    btn.setAttribute("data-code", key.code);
    btn.classList.add("keyboard__btn");
    keyboard.append(btn);
  });
}

