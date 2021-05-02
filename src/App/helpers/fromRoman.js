import RomanNumerals from '../../RomanNumerals';

/**
 * A helper function that can generate Hindu-Arabic.
 *
 * @param {string} value - The number which should be converted
 * @returns {[string, number | undefined]} An array of Roman Numerals
 */
const fromRoman = (value) => [value, RomanNumerals.fromRoman(value)];

export default fromRoman;
