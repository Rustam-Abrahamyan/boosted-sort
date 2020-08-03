import { isObject } from "./utils";

// Regular expression to separate the digit string from the non-digit strings
const regParts = /\d+|\D+/g;
// Regular expression to test if the string has a digit
const regDigit = /\d/;

/**
 * This function takes to strings and compares them
 *
 * @param {Array|Object[]} data
 * @param {('asc'|'desc')} orderBy
 * @param {String|Function} sortBy
 * @returns {Array|Object[]}
 * @example
 * StringsWithNumbers(["Test-1", "1", 5])
 * StringsWithNumbers([{name: "Name-1"}, {name: "Name-2"}, {name: "Name-3"}], "asc", "name")
 */
const StringsWithNumbers = (data, orderBy = "asc", sortBy = "") =>
    data.sort((a, b) => {
        a = (typeof sortBy === "function" ? sortBy(a) : (isObject(a) ? a[sortBy] : a)).toUpperCase();
        b = (typeof sortBy === "function" ? sortBy(b) : (isObject(b) ? b[sortBy] : b)).toUpperCase();

        const aParts = a.match(regParts);
        const bParts = b.match(regParts);

        let isDigitPart;

        if (
            aParts &&
            bParts &&
            (isDigitPart = regDigit.test(aParts[0])) == regDigit.test(bParts[0])
        ) {
            const len = Math.min(aParts.length, bParts.length);

            for (let i = 0; i < len; i++) {
                let aPart = aParts[i];
                let bPart = bParts[i];

                if (isDigitPart) {
                    aPart = parseInt(aPart, 10);
                    bPart = parseInt(bPart, 10);
                }

                if (aPart != bPart) {
                    return (
                        (orderBy === "asc" ? 1 : -1) * (aPart < bPart ? -1 : 1)
                    );
                }

                isDigitPart = !isDigitPart;
            }
        }

        return orderBy === "asc" ? (a >= b) - (a <= b) : (a <= b) - (a >= b);
    });

export default StringsWithNumbers;
