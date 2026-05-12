export function createMessageElement(userName, message, initials, timestamp) { // Esta función crea un elemento de mensaje con la estructura HTML y clases CSS necesarias
    const card = document.createElement('div');
    card.className = 'message-card'; // Aplica estilos CSS a la tarjeta
    // Esta es la estructura HTML de cada mensaje, con clases para estilos
    card.innerHTML = ` 
        <div class="message-card__header">
            <div class="message-card__user">
                <div class="message-card__avatar">${initials}</div>
                <span class="message-card__username">${userName}</span>
            </div>
            <span class="message-card__timestamp">${timestamp}</span>
        </div>
        <div class="message-card__content">${message}</div>
    `;
    return card; // Devuelve el elemento de mensaje completo para ser agregado al DOM
}