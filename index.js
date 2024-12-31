class Cryptographer {
  #englishAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  #ukraineAlphabet = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

  #getAlphabet(char) {
    if (this.#englishAlphabet.includes(char.toUpperCase())) {
      return this.#englishAlphabet;
    } else if (this.#ukraineAlphabet.includes(char.toUpperCase())) {
      return this.#ukraineAlphabet;
    }

    return null;
  }

  #processText(text, shift, isDecrypt) {
    if (isDecrypt) shift = -shift;
    let result = "";

    for (const char of text) {
      const alphabet = this.#getAlphabet(char);

      if (alphabet !== null) {
        const isLower = char === char.toLowerCase();
        let index =
          (alphabet.indexOf(char.toUpperCase()) + shift) % alphabet.length;

        if (index < 0) index += alphabet.length;
        
        const newChar = alphabet.charAt(index);
        result += isLower ? newChar.toLowerCase() : newChar;
      } else {
        result += char;
      }
    }

    return result;
  }

  encrypt(text, shift) {
    return this.#processText(text, shift, false);
  }

  decrypt(text, lang, shift) {
    if (shift !== undefined) {
      return this.#processText(text, shift, true);
    } else {
      const alphabet =
        lang === "en" ? this.#englishAlphabet : this.#ukraineAlphabet;

      if (!alphabet) throw new Error("Unsupported language!");

      let possibilities = [];
      for (let i = 0; i < alphabet.length; i++) {
        possibilities.push(this.#processText(text, i, true));
      }

      return possibilities;
    }
  }
}

const cryptographer = new Cryptographer();

// console.log(cryptographer.encrypt("Привіт, як справи?", 14));
// console.log(cryptographer.decrypt("Абфмхг, йш вабкмф?", "uk", 14));
console.log(cryptographer.decrypt("Абфмхг, йш вабкмф?", "uk"));
