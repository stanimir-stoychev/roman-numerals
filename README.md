# Roman Numerals

> This app is built using [Create React App](https://github.com/facebook/create-react-app)

An app that will demonstrate the difference between Roman Numerals Hindu-Arabic numbers. The app uses a converter (`src/RomanNumerals`) to allow developers to quickly convert between either value.

## From Roman (function)

`src/RomanNumerals/fromRoman.js`

-   Validates the input - should be a non empty string
-   Then breaks the string into an array and reverses it
-   Then iterates over the array and reduces it to a "stack" of values that once added will yield the result

> **NOTE:** The function will ignore any invalid characters within the string

> **NOTE:** The logic is quite simple, if the `current` number is `less` than the `previous` one, then `negate` it; Since the array is reversed this is equivalent to `IV => 5 - 1`

## To Roman (function)

`src/RomanNumerals/toRoman.js`

-   Validates the input - should be a non negative number but not over 3999
-   Then breaks the number into its building blocks - `thousands`, `hundreds`, `tens`, and `singles`. Each one is then (individually) converted to a **Roman Numeral** but with a changed base - e.g. 1, 5, and 10 a different based on the building block that's being converted.
-   Concatinates the results into a single string to represent the final result

> **NOTE:** Will throw an exception when out of bounds!
