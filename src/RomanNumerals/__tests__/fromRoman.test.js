import fromRoman from '../fromRoman';
import testCases from '../test-cases.json';

describe('RomanNumerals (fromRoman)', () => {
    it('should return undefined when provided with invalid input', () => {
        expect(fromRoman()).toBeUndefined();
        expect(fromRoman(1000)).toBeUndefined();
        expect(fromRoman(true)).toBeUndefined();
        expect(fromRoman(false)).toBeUndefined();
        expect(fromRoman({})).toBeUndefined();
        expect(fromRoman([])).toBeUndefined();
        expect(fromRoman('')).toBeUndefined();
    });

    it('should return expected values for pre-defined test cases', () => {
        Object.keys(testCases).forEach((number, index) => {
            expect(fromRoman(testCases[number])).toStrictEqual(index ? Number(number) : undefined);
        });
    });
});
