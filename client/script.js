import { isValidInput } from "./Transferencia/todo1.js";
import { validateForm } from "./Transferencia/todo4.js";
import { hideEmptyState } from "./Transferencia/todo7.js";
import { handleFormSubmit } from "./Transferencia/todo10.js";

/**
 * ============================================
 * EJERCICIO DE MANIPULACIÓN DEL DOM
 * ============================================
 * 
 * Objetivo: Aplicar conceptos del DOM para seleccionar elementos,
 * responder a eventos y crear nuevos elementos dinámicamente.
 * 
 * Autor 1: [Brian Bayona]
 * Fecha: [08/05/2026]
 * ============================================
 */

// ============================================
// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// ============================================

/**
 * Seleccionamos los elementos del DOM que necesitamos manipular.
 * Usamos getElementById para obtener referencias a los elementos únicos.
 */

// Formulario
const messageForm = document.getElementById('messageForm');

// Campos de entrada
const userNameInput = document.getElementById('userName');
const userMessageInput = document.getElementById('userMessage');

// Botón de envío
const submitBtn = document.getElementById('submitBtn');

// Elementos para mostrar errores
const userNameError = document.getElementById('userNameError');
const userMessageError = document.getElementById('userMessageError');

// Contenedor donde se mostrarán los mensajes
const messagesContainer = document.getElementById('messagesContainer');

// Estado vacío (mensaje que se muestra cuando no hay mensajes)
const emptyState = document.getElementById('emptyState');

// Contador de mensajes
const messageCount = document.getElementById('messageCount');

// Variable para llevar el conteo de mensajes
let totalMessages = 0;


// ============================================
// 2. FUNCIONES AUXILIARES
// ============================================
/**
     * Valida que un campo no esté vacío ni contenga solo espacios en blanco
     * @param {string} value - El valor a validar
     * @returns {boolean} - true si es válido, false si no lo es
     */
function isNotEmpty(value) {
  // .trim() elimina los espacios en blanco al inicio y al final
  return value.trim().length > 0;
}

/**
 * Muestra un mensaje de error en un elemento específico
 * @param {HTMLElement} errorElement - Elemento donde mostrar el error
 * @param {string} message - Mensaje de error a mostrar
 */
function showError(errorElement, message) {
  errorElement.textContent = message;
}

/**
 * Limpia el mensaje de error de un elemento específico
 * @param {HTMLElement} errorElement - Elemento del que limpiar el error
 */
function clearError(errorElement) {
  errorElement.textContent = "";
}

/**
 * Valida todos los campos del formulario
 * @returns {boolean} - true si todos los campos son válidos, false si alguno no lo es
 * Nota: Esta función asume que tienes acceso a los inputs y elementos de error.
 */
function validateForm(nameValue, messageValue, nameErrorEl, messageErrorEl) {
  let isValid = true;

  if (!isNotEmpty(nameValue)) {
    showError(nameErrorEl, "El nombre es obligatorio");
    isValid = false;
  } else {
    clearError(nameErrorEl);
  }

  if (!isNotEmpty(messageValue)) {
    showError(messageErrorEl, "El mensaje no puede estar vacío");
    isValid = false;
  } else {
    clearError(messageErrorEl);
  }

  return isValid;
}

/**
 * Obtiene la fecha y hora actual formateada
 * @returns {string} - Fecha y hora en formato legible
 */
function getCurrentTimestamp() {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return now.toLocaleDateString('es-ES', options);
}

/**
 * Obtiene las iniciales de un nombre
 * @param {string} name - Nombre completo
 * @returns {string} - Iniciales en mayúsculas
 */
function getInitials(name) {
  const names = name.trim().split(/\s+/); // split por uno o más espacios

  if (names.length === 1) {
    return names[0].slice(0, 2).toUpperCase();
  }

  return names
    .map(word => word[0])
    .join("")
    .toUpperCase();
}

/**
 * Actualiza el contador de mensajes
 * @param {number} totalMessages - Cantidad de mensajes actuales
 * @param {HTMLElement} messageCount - Elemento del DOM a actualizar
 */
function updateMessageCount(totalMessages, messageCountElement) {
  const text = totalMessages === 1 ? "1 mensaje" : `${totalMessages} mensajes`;
  messageCountElement.textContent = text;
}

/**
 * Muestra el estado vacío (mensaje cuando no hay mensajes)
 * @param {HTMLElement} emptyState - Elemento que contiene el mensaje de "no hay mensajes"
 */
function showEmptyState(emptyStateElement) {
  emptyStateElement.classList.remove('hidden');
}

/**
 * Oculta el estado vacío
 * @param {HTMLElement} emptyState - Elemento que contiene el mensaje de "no hay mensajes"
 */
function hideEmptyState(emptyStateElement) {
  emptyStateElement.classList.add('hidden');
}


// ============================================
// 3. CREACIÓN DE ELEMENTOS
// ============================================

/**
 * Crea un nuevo elemento de mensaje en el DOM
 * @param {string} userName - Nombre del usuario
 * @param {string} message - Contenido del mensaje
 */
function createMessageElement(userName, message) {

  const newMessage = document.createElement("div");

  newMessage.classList.add("message-card");

  newMessage.innerHTML = `
            <div class="message-card__header">
                <div class="message-card__user">
                    <div class="message-card__avatar">
                        ${getInitials(userName)}
                    </div>
                    <span class="message-card__username">
                        ${userName}
                    </span>
                </div>

                <span class="message-card__timestamp">
                    ${getCurrentTimestamp()}
                </span>
            </div>

            <div class="message-card__content">
                ${message}
            </div>
        `;

  messagesContainer.appendChild(newMessage);

  totalMessages++;

  updateMessageCount();

  hideEmptyState(emptyState);
  // TODO: Implementar la creación de un nuevo mensaje

  // PASO 1: Crear el contenedor principal del mensaje
  // Pista: document.createElement('div')
  // Asignar la clase 'message-card'

  // PASO 2: Crear la estructura HTML del mensaje
  // Puedes usar innerHTML con la siguiente estructura:
  /*
  <div class="message-card__header">
      <div class="message-card__user">
          <div class="message-card__avatar">[INICIALES]</div>
          <span class="message-card__username">[NOMBRE]</span>
      </div>
      <span class="message-card__timestamp">[FECHA]</span>
  </div>
  <div class="message-card__content">[MENSAJE]</div>
  */

  // PASO 3: Insertar el nuevo elemento en el contenedor de mensajes
  // Pista: messagesContainer.appendChild(nuevoElemento)
  // O usar insertBefore para agregarlo al principio

  // PASO 4: Incrementar el contador de mensajes

  // PASO 5: Actualizar el contador visual

  // PASO 6: Ocultar el estado vacío si está visible
}

// ============================================
// 4. MANEJO DE EVENTOS
// ============================================

/**
 * Maneja el evento de envío del formulario
 * @param {Event} event - Evento del formulario
 */

/**
 * Limpia los errores cuando el usuario empieza a escribir
 */
function handleInputChange() {
  // TODO: Implementar limpieza de errores al escribir
  // Esta función se ejecuta cuando el usuario escribe en un campo
  // Debe limpiar el error de ese campo específico
}


// ============================================
// 5. REGISTRO DE EVENTOS
// ============================================

messageForm.addEventListener("submit", (event) => {
  handleFormSubmit(
    event,
    () => validateForm(
      userNameInput,
      userMessageInput,
      showError,
      clearError,
      userNameError,
      userMessageError
    ),
    createMessageElement,
    messageForm,
    userNameInput,
    userMessageInput,
    clearError,
    userNameError,
    userMessageError
  );
});

/**
 * Aquí registramos todos los event listeners
 */

// TODO: Registrar el evento 'submit' en el formulario
// Pista: messageForm.addEventListener('submit', handleFormSubmit);

// TODO: Registrar eventos 'input' en los campos para limpiar errores al escribir
// Pista: userNameInput.addEventListener('input', handleInputChange);
// Pista: userMessageInput.addEventListener('input', handleInputChange);


// ============================================
// 6. REFLEXIÓN Y DOCUMENTACIÓN
// ============================================

/**
 * PREGUNTAS DE REFLEXIÓN:
 * 
 * 1. ¿Qué elemento del DOM estás seleccionando?
 *    R: 
 * 
 * 2. ¿Qué evento provoca el cambio en la página?
 *    R: 
 * 
 * 3. ¿Qué nuevo elemento se crea?
 *    R: 
 * 
 * 4. ¿Dónde se inserta ese elemento dentro del DOM?
 *    R: 
 * 
 * 5. ¿Qué ocurre en la página cada vez que repites la acción?
 *    R: 
 */


// ============================================
// 7. INICIALIZACIÓN (OPCIONAL)
// ============================================

/**
 * Esta función se ejecuta cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', function () {
  console.log('✅ DOM completamente cargado');
  console.log('📝 Aplicación de registro de mensajes iniciada');

  // Aquí puedes agregar cualquier inicialización adicional
  // Por ejemplo, cargar mensajes guardados del localStorage
});


// ============================================
// 8. FUNCIONALIDADES ADICIONALES (BONUS)
// ============================================

/**
 * RETOS ADICIONALES OPCIONALES:
 * 
 * 1. Agregar un botón para eliminar mensajes individuales
 * 2. Implementar localStorage para persistir los mensajes
 * 3. Agregar un contador de caracteres en el textarea
 * 4. Implementar un botón para limpiar todos los mensajes
 * 5. Agregar diferentes colores de avatar según el nombre del usuario
 * 6. Permitir editar mensajes existentes
 * 7. Agregar emojis o reacciones a los mensajes
 * 8. Implementar búsqueda/filtrado de mensajes
 */
