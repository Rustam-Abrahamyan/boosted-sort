import { isObject } from "./utils";

/**
 * @param {any} a
 * @param {any} b
 * @param {Boolean} direction
 * @param {String} field
 * @returns {Boolean}
 */
const StringSorter = ({ a, b, direction, field }) => {
    const a_state = isObject(a) ? a[field] : a;
    const b_state = isObject(b) ? b[field] : b;

    if (!a_state) return -1;
    if (!b_state) return +1;

    return direction
        ? a_state.localeCompare(b_state)
        : b_state.localeCompare(a_state);
};

export default StringSorter;
