import { renderKeyboard } from "./components/keyboard.js"
import * as keys from "./components/key.js"
import { enterBtn } from "./components/event-handlers.js";
import { handleShiftAlt } from "./components/lang-switch.js"


const wrapper = document.createElement("section");
wrapper.classList.add("wrapper");
document.body.append(wrapper);

const txtArea = document.createElement("TEXTAREA");
txtArea.classList.add("text-area");
wrapper.append(txtArea);


let lang = localStorage.getItem("Lang") ? localStorage.getItem("Lang") : "keysEn";
renderKeyboard(keys[lang], wrapper, txtArea);
handleShiftAlt(renderKeyboard, keys, wrapper, lang, txtArea);
enterBtn(txtArea, wrapper, lang);