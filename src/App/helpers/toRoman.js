import RomanNumerals from '../../RomanNumerals';
import { MAX_ROMAN_NUMERAL, MAX_TO_ROMAN_NUMERAL } from '../constants';

/**
 * A helper function that can "safely" generate Roman Numerals.
 *
 * @param {number} value - The number which should be converted to a Roman Numeral
 * @param {() => void} onOutOfBounds - A function to fire when out of bounds.
 * @returns {string[] | undefined} An array of Roman Numerals
 */
const toRoman = (
    value,
    { max = MAX_TO_ROMAN_NUMERAL, onOutOfBounds = () => alert('Really going out of bounds there...') } = {},
) => {
    const values = [];
    let next = value;

    if (value > max) {
        onOutOfBounds();
        return undefined;
    }

    while (MAX_ROMAN_NUMERAL < next) {
        values.push(RomanNumerals.toRoman(MAX_ROMAN_NUMERAL));
        next = Math.abs(next - MAX_ROMAN_NUMERAL);
    }

    values.push(RomanNumerals.toRoman(next));
    return [value, values];
};

export default toRoman;
