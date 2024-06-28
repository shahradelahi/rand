# Random Utility Class

The `Random` class is a utility for generating random strings based on different character sets. It provides methods to create random strings using Base62, Base36, and Base10 characters.

## Installation

```bash
npm install @se-oss/rand
```

## API

### `Random`

```typescript
// Generates a random string of a specified length using the provided characters.
function create(length: number, chars: string): string;

// Generates a random string of a specified length using Base62 characters (A-Z, a-z, 0-9).
function base62(length: number): string;

// Generates a random string of a specified length using Base36 characters (a-z, 0-9).
function base36(length: number): string;

// Generates a random string of a specified length using Base10 characters (0-9).
function base10(length: number): string;

// Generates a random UUIDv4 string.
function uuidv4(): string;

// Generates a random number within a specified range or of a specified length.
function number(min: number, max: number): number;
function number(length: number): string;
```

## Examples

Here are some examples of how to use the Random class:

```typescript
import { Random } from '@se-oss/random';

// Generate a random Base62 string of length 12
const randomBase62 = Random.base62(12);
console.log(randomBase62); // Example output: 'A1b2C3d4E5f6'

// Generate a random Base36 string of length 8
const randomBase36 = Random.base36(8);
console.log(randomBase36); // Example output: '1a2b3c4d'

// Generate a random Base10 string of length 4
const randomBase10 = Random.base10(4);
console.log(randomBase10); // Example output: '5678'

// Generate a random UUIDv4 string
const randomUUID = Random.uuidv4();
console.log(randomUUID); // Example output: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6'

// Generate a random number between 1 and 10
const randomNumber = Random.number(1, 10);
console.log(randomNumber); // Example output: 5

// Generate a random number of length 5
const randomNumber2 = Random.number(5);
console.log(randomNumber2); // Example output: 69690
```

## Contributing

Want to contribute? Awesome! To show your support is to star the project, or to raise issues on [GitHub](https://github.com/shahradelahi/rand).

Thanks again for your support, it is much appreciated!

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi)
