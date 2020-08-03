import { isObject } from "./utils";

/**
 * @param {Array|Object[]} data
 * @param {('asc'|'desc')} orderBy
 * @param {String|Function} sortBy
 * @returns {Array|Object[]}
 */
const StringSorter = ({ data, orderBy = "asc", sortBy = "" }) =>
    data.sort((a, b) => {
        const a_state = typeof sortBy === "function" ? sortBy(a) : (isObject(a) ? a[sortBy] : a);
        const b_state = typeof sortBy === "function" ? sortBy(b) : (isObject(b) ? b[sortBy] : b);

        if (!a_state) return -1;
        if (!b_state) return +1;

        return orderBy === "asc"
            ? a_state.localeCompare(b_state)
            : b_state.localeCompare(a_state);
    });

export default StringSorter;
