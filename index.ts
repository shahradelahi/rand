/**
 * A utility class for generating random strings based on different character sets.
 */
class Random {
  /**
   * Generates a random string of a specified length using the provided characters.
   *
   * @param {number} length - The length of the random string to generate.
   * @param {string} chars - The characters to use for generating the random string.
   * @returns {string} A random string of the specified length using the provided characters.
   *
   * @example
   * // Generates a random string of length 5 using the characters 'ABCDEF'.
   * const randomString = Random.create(5, 'ABCDEF');
   * console.log(randomString); // Example output: 'BCDAE'
   */
  static create(length: number, chars: string): string {
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  /**
   * Generates a random string of a specified length using Base62 characters (A-Z, a-z, 0-9).
   *
   * @param {number} length - The length of the random string to generate.
   * @returns {string} A random string of the specified length using Base62 characters.
   *
   * @example
   * // Generates a random Base62 string of length 8.
   * const randomBase62 = Random.base62(8);
   * console.log(randomBase62); // Example output: 'A1b2C3d4'
   */
  static base62(length: number): string {
    return this.create(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
  }

  /**
   * Generates a random string of a specified length using Base36 characters (a-z, 0-9).
   *
   * @param {number} length - The length of the random string to generate.
   * @returns {string} A random string of the specified length using Base36 characters.
   *
   * @example
   * // Generates a random Base36 string of length 10.
   * const randomBase36 = Random.base36(10);
   * console.log(randomBase36); // Example output: '3a4b5c6d7e'
   */
  static base36(length: number): string {
    return this.create(length, 'abcdefghijklmnopqrstuvwxyz0123456789');
  }

  /**
   * Generates a random string of a specified length using Base10 characters (0-9).
   *
   * @param {number} length - The length of the random string to generate.
   * @returns {string} A random string of the specified length using Base10 characters.
   *
   * @example
   * // Generates a random Base10 string of length 6.
   * const randomBase10 = Random.base10(6);
   * console.log(randomBase10); // Example output: '123456'
   */
  static base10(length: number): string {
    return this.create(length, '0123456789');
  }

  /**
   * Generates a random UUIDv4 string.
   *
   * @returns {string} A random UUIDv4 string.
   *
   * @example
   * // Generates a random UUIDv4 string.
   * const uuid = Random.uuidv4();
   * console.log(uuid); // Example output: '123e4567-e89b-12d3-a456-426614174000'
   */
  static uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /**
   * Generates a random number within a specified range
   *
   * @param {number} min - The minimum value of the random number.
   * @param {number} max - The maximum value of the random number.
   * @returns {number} A random number between min and max.
   *
   * @example
   * // Generates a random number between 10 and 20.
   * const randomNumberInRange = Random.number(10, 20);
   * console.log(randomNumberInRange); // Example output: 15
   */
  static number(min: number, max: number): number;

  /**
   * Generates a random number within a specified length.
   *
   * @param {number} length - The number of digits in the random number.
   * @returns {number} A random number with the specified number of digits.
   *
   * @example
   * // Generates a random number with 5 digits.
   * const randomLengthNumber = Random.number(5);
   * console.log(randomLengthNumber); // Example output: 12345
   */
  static number(length: number): number;

  static number(minOrLength: number, max?: number): number {
    if (max === undefined) {
      return Number(`${this.number(1, 9)}${this.base10(minOrLength - 1)}`);
    }
    return Math.floor(Math.random() * (max - minOrLength + 1)) + minOrLength;
  }
}

export { Random };
