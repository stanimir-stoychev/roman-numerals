import toRoman from '../toRoman';
import testCases from '../test-cases.json';

describe('RomanNumerals (toRoman)', () => {
    it('should return expected values for pre-defined test cases', () => {
        Object.keys(testCases).forEach((number, index) => {
            expect(toRoman(Number(number))).toStrictEqual(testCases[number]);
        });
    });
});
