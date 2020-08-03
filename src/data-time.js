import { isObject } from "./utils";

/**
 * @param {Array|Object[]} data
 * @param {('asc'|'desc')} orderBy
 * @param {String|Function} sortBy
 * @returns {Array|Object[]}
 */
const DateTimeSorter = ({ data, orderBy = "asc", sortBy = "" }) =>
    data.sort((a, b) => {
        const a_state = typeof sortBy === "function" ? sortBy(a) : (isObject(a) ? a[sortBy] : a);
        const b_state = typeof sortBy === "function" ? sortBy(b) : (isObject(b) ? b[sortBy] : b);

        if (!a_state) return -1;
        if (!b_state) return +1;

        return orderBy === "asc"
            ? new Date(b_state) - new Date(a_state)
            : new Date(a_state) - new Date(b_state);
    });

export default DateTimeSorter;