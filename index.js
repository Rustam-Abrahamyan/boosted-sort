import StringWithNumberSorter from "./src/string-with-number";
import StringSorter from "./src/string";
import NumberSorter from "./src/number";
import DateTimeSorter from "./src/data-time";

/**
 * @param {Array|Object[]} data
 * @param {('stringWithNumber'|'string'|'number'|'dateTime')} type
 * @param {String} orderBy
 * @param {Object} fields
 * @returns {Array|Object[]}
 */
const BoostedSort = ({ data = [], type = "stringWithNumber", orderBy = "asc", fields = {} }) => {
    direction = orderBy === "asc";

    return data.sort((a, b) => {
        for (let field of fields) {
            if (a[field] != b[field]) {
                if (type === "stringWithNumber") return StringWithNumberSorter({ a, b, field, direction });
                if (type === "string") return StringSorter({ a, b, field, direction });
                if (type === "number") return NumberSorter({ a, b, field, direction });
                if (type === "dateTime") return DateTimeSorter({ a, b, field, direction });
            }
        }
    });
};

export default BoostedSort;
