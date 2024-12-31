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

**Note**: If you don't provide the _shift_ as the third argument, the method will return an array with all possible variations of the text.

## Supported Languages

- English
- Ukrainian

_More languages will be supported in the future._