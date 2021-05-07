import { MAX_ROMAN_NUMERAL } from './constants';
import toRoman from './toRoman';

/**
 * A function that can convert Hindu-Arabic numbers to Roman numerals.
 * NOTE: The function will return an "expression" when the result is out of bounds
 *
 * @param {number} number - The number which should be converted
 * @returns {[string, { value: string, power: number }] | undefined} The `Roman numeral` equivalent
 */
const boundlessToRoman = (number) => {
    if (typeof number !== 'number' || number < 0) return undefined;
    if (number > MAX_ROMAN_NUMERAL) {
        return [
            toRoman(number % MAX_ROMAN_NUMERAL),
            {
                value: toRoman(MAX_ROMAN_NUMERAL),
                power: Math.floor(number / MAX_ROMAN_NUMERAL),
            },
        ];
    }

    return [toRoman(number), { value: '', power: 0 }];
};

export default boundlessToRoman;
