/**
 * Maneja el envío del formulario
 */
export function handleFormSubmit(
    event,
    validateForm,
    createMessageElement,
    messageForm,
    userNameInput,
    userMessageInput,
    clearError,
    userNameError,
    userMessageError
) {

    event.preventDefault();

    const isFormValid = validateForm();

    if (!isFormValid) {
        return;
    }

    const userName = userNameInput.value;
    const userMessage = userMessageInput.value;

    createMessageElement(userName, userMessage);

    messageForm.reset();

    clearError(userNameError);
    clearError(userMessageError);

    userNameInput.focus();
}