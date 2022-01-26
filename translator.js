export class Translator {
    constructor(english, morse, inputToConvert, output) {
        this.english = english;
        this.morse = morse;
        this.inputToConvert = inputToConvert;
    }

    englishToMorse() {
        const value = this.inputToConvert.split("");

        let outputArr = [];

        for (var i = 0; i < value.length; i++) {
            const englishTranslation = this.english.indexOf(value[i]);
            const morseOutput = this.morse[englishTranslation];
            outputArr.push(morseOutput);
        }
        return outputArr.join(" ");
    }

    morseToEnglish() {
        const value = this.inputToConvert.split(" ");

        let outputArr = [];

        for (var i = 0; i < value.length; i++) {
            const morseTranslation = this.morse.indexOf(value[i]);
            const englishOutput = this.english[morseTranslation];
            outputArr.push(englishOutput);
        }
        return outputArr.join("");
    }
}