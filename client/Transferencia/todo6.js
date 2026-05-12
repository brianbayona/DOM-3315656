export function updateMessageCount(total, element) {
    // Esto rompe con el código estático y lo vuelve dinámico
    element.textContent = `${total} mensaje${total !== 1 ? 's' : ''}`;
}