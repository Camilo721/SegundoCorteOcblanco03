// Función flecha con nombre 'validarCorreos'
const validateEmail = () => {
    const emailField = document.getElementById('emails');
    const emails = emailField.value.split(/[,;]+/).map(email => email.trim()).filter(email => email !== '');

    
    const emailPattern = /(?:\S+\s+)?<?([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})>?/;

    // Inicializar listas de correos válidos e inválidos
    let validEmails = [];
    let invalidEmails = [];

    // Validar cada correo
    emails.forEach(email => {
        const match = email.match(emailPattern);
        if (match) {
            validEmails.push(match[1]); // Agregar solo el correo válido
        } else {
            invalidEmails.push(email);
        }
    });

    // Actualizar el campo solo si hay correos válidos
    if (validEmails.length > 0) {
        emailField.value = validEmails.join('; '); // Separar con punto y coma
    }

    if (invalidEmails.length === 0) {
        alert("Todos los correos cumplen la condición."); // Mensaje de éxito
    } else {
        // Si hay correos incorrectos, mostrar modal
        showModal(invalidEmails);
    }

};

// Asignar la función 'validarCorreos' al botón de validación
document.getElementById('validateBtn').addEventListener('click', validateEmail);

// Función para mostrar el modal con los correos incorrectos
const showModal = (invalidEmails) => {
    const modal = document.getElementById('modal');
    const invalidEmailsText = document.getElementById('invalidEmails');
    invalidEmailsText.textContent = invalidEmails.join(', '); // Mostrar correos incorrectos
    modal.style.display = 'block';

    document.querySelector('.close').onclick = () => {
        modal.style.display = 'none';
    };
};

// Cerrar modal si se hace clic fuera del contenido
window.onclick = (event) => {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
