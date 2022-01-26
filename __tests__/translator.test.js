import { Translator } from "../translator.js";
import { english, morse } from "../data.js";

describe("testing the Translator class", () => {

    it("testing if the class instantiasion returns an object", () => {
        const input = "hello"
        const prototype = new Translator(english, morse, input);
        expect(typeof prototype).toBe("object")
    })

describe("testing the morseToEnglish method", () => {
    it("testing to see if morseToEnglish method returns a string", () => {
        const input = ".- --. -.-"
        const prototype = new Translator(english, morse, input);
        expect(typeof prototype.morseToEnglish()).toBe("string")
    })
    it("testing individual morse character", () => {
        const input = ".--.";
        const prototype = new Translator(english, morse, input);
        expect(prototype.morseToEnglish()).toBe('p');
    })
    it("testing morse word", () => {
        const input = ".--. -..- -. -- ..";
        const prototype = new Translator(english, morse, input);
        expect(prototype.morseToEnglish()).toBe('pxnmi');
    })
})
});

describe("testing the englishToMorse method", () => {

    it("testing to see if englishToMorse method returns a string", () => {
        const input = "bye"
        const prototype = new Translator(english, morse, input);
        expect(typeof prototype.englishToMorse()).toBe("string")
    })
    it("testing individual english character", () => {
        const input = "a";
        const prototype = new Translator(english, morse, input);
        expect(prototype.englishToMorse()).toBe('.-');
    })
    it("testing english word", () => {
        const input = "hello";
        const prototype = new Translator(english, morse, input);
        expect(prototype.englishToMorse()).toBe(".... . .-.. .-.. ---");
    })
})

