// Función flecha con nombre 'validarCorreos'
const validarCorreos = () => {
    const emailField = document.getElementById('emails');
    const emails = emailField.value.split(/[,;]+/).map(email => email.trim()).filter(email => email !== '');

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Inicializar listas de correos válidos e inválidos
    let validEmails = [];
    let invalidEmails = [];

    // Validar cada correo
    emails.forEach(email => {
        if (emailPattern.test(email)) {
            validEmails.push(email);
        } else {
            invalidEmails.push(email);
        }
    });

    // Actualizar el campo de correos válidos con los correctos separados por ";"
    emailField.value = validEmails.join('; ');

    // Si hay correos incorrectos, mostrar modal
    if (invalidEmails.length > 0) {
        showModal(invalidEmails);
    }
};

// Asignar la función 'validarCorreos' al botón de validación
document.getElementById('validateBtn').addEventListener('click', validarCorreos);

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
