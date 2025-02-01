# @se-oss/rand

[![CI](https://github.com/shahradelahi/rand/actions/workflows/ci.yml/badge.svg)](https://github.com/shahradelahi/rand/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/@se-oss/rand.svg)](https://www.npmjs.com/package/@se-oss/rand)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](/LICENSE)
[![Install Size](https://packagephobia.com/badge?p=@se-oss/rand)](https://packagephobia.com/result?p=neval)

This library provides functions for generating random strings and numbers in various formats, including Base10, Base36, Base62, UUIDv4, and random numbers within specified ranges or lengths.

---

- [Installation](#-installation)
- [Usage](#-usage)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#license)

## 📦 Installation

```bash
pnpm i @se-oss/rand
```

## 📖 Usage

```typescript
import * as rnd from '@se-oss/rand';

// Generate a random Base62 string of length 12
console.log(rnd.randomBase62(12)); // Example output: 'A1b2C3d4E5f6'

// Generate a random Base36 string of length 8
console.log(rnd.randomBase36(8)); // Example output: '1a2b3c4d'

// Generate a random Base10 string of length 4
console.log(rnd.randomBase10(4)); // Example output: '5678'

// Generate a random UUIDv4 string
console.log(rnd.randomUuidv4()); // Example output: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6'

// Generate a random number between 1 and 10
console.log(rnd.randomNumber(1, 10)); // Example output: 5

// Generate a random number of length 16
console.log(rnd.randomNumber(16)); // Example output: 8933580352864351
```

## 📚 Documentation

For all configuration options, please see [the API docs](https://www.jsdocs.io/package/@se-oss/rand).

##### API

```typescript
// Generates a random string of a specified length using the provided characters.
function random(chars: string, length: number): string;

// Generates a random string of a specified length using Base62 characters (A-Z, a-z, 0-9).
function randomBase62(length: number): string;

// Generates a random string of a specified length using Base36 characters (a-z, 0-9).
function randomBase36(length: number): string;

// Generates a random string of a specified length using Base10 characters (0-9).
function randomBase10(length: number): string;

// Generates a random UUIDv4 string.
function randomUuidv4(): string;

// Generates a random number within a specified range or of a specified length.
function randomNumber(min: number, max: number): number;
function randomNumber(length: number): number;
```

## 🤝 Contributing

Want to contribute? Awesome! To show your support is to star the project, or to raise issues on [GitHub](https://github.com/shahradelahi/rand).

Thanks again for your support, it is much appreciated! 🙏

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi) and [contributors](https://github.com/shahradelahi/rand/graphs/contributors).
