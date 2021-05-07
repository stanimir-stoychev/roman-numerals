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
    if (number > 3999) {
        return [
            toRoman(number % 3999),
            {
                value: toRoman(3999),
                power: Math.floor(number / 3999),
            },
        ];
    }

    return [toRoman(number), { value: '', power: 0 }];
};

export default boundlessToRoman;
