export function renderKeyboard(keys, wrapper) {
  const keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");
  wrapper.append(keyboard);

  keys.map((key) => {
    let btn = document.createElement("button");
    btn.innerHTML = key.value + `<span class="keyboard__btn-sub-value">${key.subvalue ? key.subvalue : ""}</span>`;
    btn.setAttribute("data-code", key.code);
    btn.classList.add("keyboard__btn");
    keyboard.append(btn);
  });
}


