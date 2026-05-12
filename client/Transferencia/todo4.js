import { isValidInput } from "./todo1.js";

/**
 * Valida todos los campos del formulario
 * @returns {boolean}
 */
export function validateForm(
    userNameInput,
    userMessageInput,
    showError,
    clearError,
    userNameError,
    userMessageError
) {

    const userName = userNameInput.value;
    const userMessage = userMessageInput.value;

    let isValid = true;

    // Validar nombre
    if (!isValidInput(userName)) {
        showError(userNameError, "El nombre es obligatorio");
        userNameInput.classList.add("error");
        isValid = false;
    } else {
        clearError(userNameError);
        userNameInput.classList.remove("error");
    }

    // Validar mensaje
    if (!isValidInput(userMessage)) {
        showError(userMessageError, "El mensaje es obligatorio");
        userMessageInput.classList.add("error");
        isValid = false;
    } else {
        clearError(userMessageError);
        userMessageInput.classList.remove("error");
    }

    return isValid;
}