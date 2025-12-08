// JavaScript - Control de efectos e interacciones

// ===== BOTONES DE NAVEGACIÓN =====
// Seleccionar todos los botones de navegación del header
const optionsButtons = document.querySelectorAll('.options');

// Efectos de presión en botones de opciones
optionsButtons.forEach(button => {
  // Efecto mousedown (cuando se presiona el botón)
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.95)';
    button.style.backgroundColor = '#d68f3a';
  });

  // Efecto mouseup (cuando se suelta el botón)
  button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
    button.style.backgroundColor = '#fcc57e';
  });

  // Efecto mouseleave (cuando el ratón sale del botón)
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
    button.style.backgroundColor = '#fcc57e';
  });
});

// ===== TARJETAS DE PRODUCTOS =====
// Seleccionar todas las tarjetas
const cards = document.querySelectorAll('.card');

// Animación hover en tarjetas
cards.forEach(card => {
  // Mouse enter - aumentar tamaño y cambiar sombra
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.07)';
    card.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
    card.style.transition = 'transform 0.2s, box-shadow 0.2s';
  });

  // Mouse leave - volver a estado normal
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 2px 4px rgb(156, 214, 216)';
  });
});

// ===== BOTONES DE COMPRA =====
// Seleccionar todos los botones de compra
const buttons = document.querySelectorAll('.button');

// Efectos de presión en botones de compra (igual a botones de opciones)
buttons.forEach((button, index) => {
  // Cursor pointer
  button.style.cursor = 'pointer';

  // Efecto mousedown (cuando se presiona el botón)
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.95)';
    button.style.backgroundColor = '#d4a574';
  });

  // Efecto mouseup (cuando se suelta el botón)
  button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
    button.style.backgroundColor = '#f7d897';
  });

  // Efecto mouseleave (cuando el ratón sale del botón)
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1)';
    button.style.backgroundColor = '#f7d897';
  });

  // Evento click
  button.addEventListener('click', () => {
    const cardText = button.parentElement.querySelector('.card-text').textContent;
    console.log(`Compra iniciada: ${cardText}`);
    alert(`¡Producto añadido al carrito!\n\n${cardText}`);
  });
});

// ===== BOTÓN PRINCIPAL DE SELECCIÓN (HERO) =====
// Seleccionar el botón principal (COMPRAR en el hero)
const seletionButton = document.querySelector('.seletion');

if (seletionButton) {
  // Efecto mousedown (cuando se presiona el botón)
  seletionButton.addEventListener('mousedown', () => {
    seletionButton.style.transform = 'scale(0.95)';
    seletionButton.style.backgroundColor = '#a8c5c2';
  });

  // Efecto mouseup (cuando se suelta el botón)
  seletionButton.addEventListener('mouseup', () => {
    seletionButton.style.transform = 'scale(1)';
    seletionButton.style.backgroundColor = '#d6f8f4';
  });

  // Efecto mouseleave (cuando el ratón sale del botón)
  seletionButton.addEventListener('mouseleave', () => {
    seletionButton.style.transform = 'scale(1)';
    seletionButton.style.backgroundColor = '#d6f8f4';
  });

  // Agregar transición suave
  seletionButton.style.transition = 'all 0.2s ease';
}
