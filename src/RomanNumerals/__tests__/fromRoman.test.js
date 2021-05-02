import fromRoman from '../fromRoman';
import testCases from '../test-cases.json';

describe('RomanNumerals (fromRoman)', () => {
    it('should return expected values for pre-defined test cases', () => {
        Object.keys(testCases).forEach((number, index) => {
            expect(fromRoman(testCases[number])).toStrictEqual(index ? Number(number) : undefined);
        });
    });
});
