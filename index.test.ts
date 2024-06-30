import { expect } from 'chai';
import { randomNumber } from './index';

describe('Random', () => {
  describe('Number', () => {
    it('should generate bigass number', () => {
      for (let i = 0; i < 1_000; i++) {
        const n = randomNumber(16);
        expect(n).to.be.a('number');
        expect(/^[0-9]{16}$/.test(n.toString())).to.be.true;
      }
    });
  });
});
