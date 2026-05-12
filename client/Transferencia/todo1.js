/**
 * Valida que un campo no esté vacío ni contenga solo espacios en blanco
 * @param {string} value
 * @returns {boolean}
 */
export function isValidInput(value) {
    return value.trim().length > 0;
}