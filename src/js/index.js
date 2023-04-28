import { renderKeyboard } from "./components/keyboard.js"
import * as keys from "./components/key.js"
import { enterBtn } from "./helpers/event-handlers.js";


const wrpr = document.createElement("section");
wrpr.classList.add("wrapper");
document.body.append(wrpr);

const txtArea = document.createElement("TEXTAREA");
txtArea.classList.add("text-area");
wrpr.append(txtArea);

renderKeyboard(keys.keysEn, wrpr);
enterBtn(renderKeyboard, keys, wrpr);
