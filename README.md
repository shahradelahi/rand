# rand

A collection of utility functions for generating random strings and numbers in various formats. This library provides easy-to-use functions to create random values for different use cases, including Base10, Base36, Base62 strings, UUIDv4, and random numbers within specified ranges or of specified lengths.

## Installation

```bash
npm install @se-oss/rand
```

## API

```typescript
// Generates a random string of a specified length using the provided characters.
declare function random(chars: string, length: number): string;

// Generates a random string of a specified length using Base62 characters (A-Z, a-z, 0-9).
declare function randomBase62(length: number): string;

// Generates a random string of a specified length using Base36 characters (a-z, 0-9).
declare function randomBase36(length: number): string;

// Generates a random string of a specified length using Base10 characters (0-9).
declare function randomBase10(length: number): string;

// Generates a random UUIDv4 string.
declare function randomUuidv4(): string;

// Generates a random number within a specified range or of a specified length.
declare function randomNumber(min: number, max: number): number;
declare function randomNumber(length: number): number;
```

## Examples

Here are some examples of how to use the Random class:

```typescript
import {
  randomBase62,
  randomBase36,
  randomBase10,
  randomUuidv4,
  randomNumber
} from '@se-oss/random';

// Generate a random Base62 string of length 12
console.log(randomBase62(12)); // Example output: 'A1b2C3d4E5f6'

// Generate a random Base36 string of length 8
console.log(randomBase36(8)); // Example output: '1a2b3c4d'

// Generate a random Base10 string of length 4
console.log(randomBase10(4)); // Example output: '5678'

// Generate a random UUIDv4 string
console.log(randomUuidv4()); // Example output: 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6'

// Generate a random number between 1 and 10
console.log(randomNumber(1, 10)); // Example output: 5

// Generate a random number of length 16
console.log(randomNumber(16)); // Example output: 8933580352864351
```

## Contributing

Want to contribute? Awesome! To show your support is to star the project, or to raise issues on [GitHub](https://github.com/shahradelahi/rand).

Thanks again for your support, it is much appreciated!

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi)
