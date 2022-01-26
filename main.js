import { Translator } from "./translator.js";
import { english, morse } from "./data.js";

const englishInput = document.querySelector(".englishInput");
const morseInput = document.querySelector(".morseInput");
const translatorButton = document.querySelector(".translatorButton");
const output = document.querySelector(".display");

translatorButton.addEventListener("click", function () {
    if (englishInput.value.length < 1) {
        return;
    } else {
        const translator1 = new Translator(english, morse, englishInput.value);
        console.log(translator1);
        output.innerText = translator1.englishToMorse();
    }
});

translatorButton.addEventListener("click", function () {
    if (morseInput.value === "") {
        return;
    } else {
        const translator2 = new Translator(english, morse, morseInput.value);
        output.innerText = translator2.morseToEnglish();
    }
});