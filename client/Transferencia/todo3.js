export function clearError(errorElement) {
    errorElement.textContent = ""; 
}

export function showError(errorElement, message) {
    errorElement.textContent = message;
}