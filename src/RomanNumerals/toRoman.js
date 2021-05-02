/**
 * A function that can be used to construct Roman Numerals between 0 and 10.
 *
 * @param {number} number - A number between 0 and 10
 * @param {{ one: string; five: string; ten: string }} mapper - A "mapper" object
 * @returns {string} A string representation of the number using the provided mapper
 */
const toRN = (number, { one = 'I', five = 'V', ten = 'X' } = {}) => {
    if (number < 1) return '';
    if (number <= 3) return Array.from({ length: number }, () => one).join('');
    if (number === 4) return `${one}${five}`;
    if (number === 5) return five;
    if (number <= 8) return `${five}${Array.from({ length: number - 5 }, () => one).join('')}`;
    if (number === 9) return `${one}${ten}`;
    return ten;
};

/**
 * A function that can convert Hindu-Arabic numbers to Roman numerals
 *
 * @param {number} number - The number which should be converted
 * @returns {string | undefined} The `Roman numeral` equivalent
 */
const toRoman = (number) => {
    if (typeof number !== 'number') return undefined;
    if (number < 0 || number > 3999) throw new Error(`"${number}" is out of bounds! Roman numerals go up to 3999!`);

    const thousands = toRN(Math.floor(number / 1000), { one: 'M' });

    const hundreds = toRN(Math.floor((number % 1000) / 100), {
        one: 'C',
        five: 'D',
        ten: 'M',
    });

    const tens = toRN(Math.floor((number % 100) / 10), {
        one: 'X',
        five: 'L',
        ten: 'C',
    });

    const singles = toRN(Math.floor(number % 10));

    return `${thousands}${hundreds}${tens}${singles}`;
};

export default toRoman;
