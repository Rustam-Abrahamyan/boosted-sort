// Regular expression to separate the digit string from the non-digit strings
const regParts = /\d+|\D+/g;
// Regular expression to test if the string has a digit
const regDigit = /\d/;

/**
 * This function takes to strings and compares them
 *
 * @param {Array|Object[]} data
 * @param {('asc'|'desc')} orderBy
 * @param {String} prop
 * @returns {Array|Object[]}
 * @example
 * StringsWithNumbers(["Test-1", "1", 5])
 * StringsWithNumbers([{name: "Name-1"}, {name: "Name-2"}, {name: "Name-3"}], "asc", "name")
 */
const StringsWithNumbers = (data, orderBy = "asc", prop = "") => {
    let isArrayOfObjects = typeof data[0] === "object";

    return data.sort((a, b) => {
        a = (isArrayOfObjects ? a[prop] : a).toUpperCase();
        b = (isArrayOfObjects ? b[prop] : b).toUpperCase();

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
};    

export default StringsWithNumbers;
