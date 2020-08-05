import { isObject } from "./utils";

/**
 * @param {any} a
 * @param {any} b
 * @param {Boolean} direction
 * @param {String} field
 * @returns {Boolean}
 */
const NumberSorter = ({ a, b, field, direction }) => {
    a = isObject(a) ? a[field] : a;
    b = isObject(b) ? b[field] : b;

    if (a === b) return 0;
    if (a < b) return -direction;
    if (a == null) return 1;
    if (b == null) return -1;

    return direction;
};

export default NumberSorter;