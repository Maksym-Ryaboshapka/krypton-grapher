<img src="./src/assets/images/logo.png" alt="Krypton Element" width="250" style="display: block; margin: 0 auto 40px auto;" />


# Krypton Grapher

## Installation

To install the package, run:

```bash
npm install krypton-grapher
```

## Integration

To use the package, import it in your project:

```js
import { Cryptographer } from "krypton-grapher";

const cryptographer = new Cryptographer();
```

## Usage

### Encryption:

To encrypt text, use the following method:
```js
cryptographer.encrypt(text, shift);
```

### Decryption:

To decrypt text, use this method:

```js
cryptographer.decrypt(text, lang, shift);
```

**Note**: If you don't provide the `shift` as the third argument, the method will return an array with all possible variations of the text.

## Supported Languages

In parentheses, you can see the abbreviation that should be passed as the `lang` parameter.

- English (en)
- Ukrainian (uk)

_More languages will be supported in the future._