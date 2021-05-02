const VALID_ROMAN_NUMERALS = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const ROMAN_NUMERALS_TO_ARABIC = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

/**
 * A function that can convert Roman numerals to Hindu-Arabic numbers
 *
 * @param {string} romanNumeral - The Roman numeral which should be converted
 * @returns {number | undefined} The `Hindu-Arabic` number equivalent
 */
const fromRoman = (romanNumeral) => {
    if (typeof romanNumeral !== 'string' || !romanNumeral) return undefined;

    const { result } = romanNumeral
        .split('')
        .reverse()
        .reduce(
            (acc, singleNumeral) => {
                if (!VALID_ROMAN_NUMERALS.includes(singleNumeral)) return acc;
                let value = ROMAN_NUMERALS_TO_ARABIC[singleNumeral];

                if (acc.prev > value) {
                    value *= -1;
                }

                acc.result += value;
                acc.prev = value;

                return acc;
            },
            { result: 0, prev: undefined },
        );

    return result;
};

export default fromRoman;
