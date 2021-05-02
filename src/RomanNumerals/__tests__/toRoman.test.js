import toRoman from '../toRoman';
import testCases from '../test-cases.json';

describe('RomanNumerals (toRoman)', () => {
    it('should return undefined when provided with invalid input', () => {
        expect(toRoman()).toBeUndefined();
        expect(toRoman(true)).toBeUndefined();
        expect(toRoman(false)).toBeUndefined();
        expect(toRoman({})).toBeUndefined();
        expect(toRoman([])).toBeUndefined();
        expect(toRoman('')).toBeUndefined();
        expect(toRoman('{}')).toBeUndefined();
    });

    it('should throw an exception when out of bounds', () => {
        expect(() => toRoman(4000)).toThrowError('"4000" is out of bounds! Roman numerals go up to 3999!');
        expect(() => toRoman(10000)).toThrowError('"10000" is out of bounds! Roman numerals go up to 3999!');
    });

    it('should return expected values for pre-defined test cases', () => {
        Object.keys(testCases).forEach((number, index) => {
            expect(toRoman(Number(number))).toStrictEqual(testCases[number]);
        });
    });
});
