import { isObject } from "./utils";

/**
 * @param {any} a
 * @param {any} b
 * @param {Boolean} direction
 * @param {String} field
 * @returns {Boolean}
 */
const DateTimeSorter = ({ a, b, direction, field }) => {
    const a_state = isObject(a) ? a[field] : a;
    const b_state = isObject(b) ? b[field] : b;

    if (!a_state) return -1;
    if (!b_state) return +1;

    return direction
        ? new Date(b_state) - new Date(a_state)
        : new Date(a_state) - new Date(b_state);
};

export default DateTimeSorter;