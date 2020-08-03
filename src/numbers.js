import { isObject } from "./utils";

/**
 * @param {Array|Object[]} data
 * @param {('asc'|'desc')} orderBy
 * @param {String|Function} sortBy
 * @returns {Array|Object[]}
 */
const NumberSorter = ({ data, orderBy = "asc", sortBy = "" }) => {
    const direction = orderBy === "asc";
    
    data.sort((a, b) => {
        a = typeof sortBy === "function" ? sortBy(a) : (isObject(a) ? a[sortBy] : a);
        b = typeof sortBy === "function" ? sortBy(b) : (isObject(b) ? b[sortBy] : b);

        if (a === b) return 0;
        if (a < b) return -direction;
        if (a == null) return 1;
        if (b == null) return -1;

        return direction;
    });
};

export default NumberSorter;