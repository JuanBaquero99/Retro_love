// Botón "Volver atrás"
document.querySelector('.back').addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirige al archivo index.html
});

// Botón "Escribir mensaje"
const messageButton = document.querySelector('.message');
const modal = document.createElement('div');

// Crear la ventana emergente
modal.classList.add('modal');
modal.innerHTML = `
    <div class="modal-header">Nota Personal</div>
    <div class="modal-content">
        <textarea placeholder="Escribe tu nota aquí..."></textarea>
        <button class="btn-close">Cerrar</button>
    </div>
`;
document.body.appendChild(modal);

// Mostrar la ventana emergente
messageButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Cerrar la ventana emergente
modal.querySelector('.btn-close').addEventListener('click', () => {
    modal.style.display = 'none';
});