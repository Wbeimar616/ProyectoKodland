// ===== FUNCIONES REUTILIZABLES =====
function botonesAnimacion (selector, pressColor, releaseColor, scale = 0.95) {
  const buttons = document.querySelectorAll(selector);
  
  buttons.forEach(button => {
    // Estilo base para todos los botones
    button.style.cursor = 'pointer';
    button.style.transition = 'all 0.2s ease';
    
    // Efecto de presionar
    button.addEventListener('mousedown', () => {
      button.style.transform = `scale(${scale})`;
      if (pressColor) button.style.backgroundColor = pressColor;
    });
    
    // Efecto de soltar/restaurar
    const restoreButton = () => {
      button.style.transform = 'scale(1)';
      if (releaseColor) button.style.backgroundColor = releaseColor;
    };
    
    button.addEventListener('mouseup', restoreButton);
    button.addEventListener('mouseleave', restoreButton);
  });
}

// ===== BOTONES DE NAVEGACIÓN =====
setupButtonEffects('.options', '#d68f3a', '#fcc57e');

// ===== TARJETAS DE PRODUCTOS =====
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.style.transition = 'transform 0.2s, box-shadow 0.2s';
  
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.07)';
    card.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 2px 4px rgb(156, 214, 216)';
  });
});

// ===== BOTONES DE COMPRA =====
const buyButtons = document.querySelectorAll('.button');

buyButtons.forEach(button => {
  button.style.cursor = 'pointer';
  button.style.transition = 'all 0.2s ease';
  
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.95)';
    button.style.backgroundColor = '#d4a574';
  });
  
  const restoreButton = () => {
    button.style.transform = 'scale(1)';
    button.style.backgroundColor = '#f7d897';
  };
  
  button.addEventListener('mouseup', restoreButton);
  button.addEventListener('mouseleave', restoreButton);
  
  // Evento click específico para botones de compra
  button.addEventListener('click', () => {
    const cardText = button.parentElement.querySelector('.card-text')?.textContent || 'Producto';
    console.log(`Compra iniciada: ${cardText}`);
    alert(`¡Producto añadido al carrito!\n\n${cardText}`);
  });
});

// ===== BOTÓN PRINCIPAL DE SELECCIÓN  =====
setupButtonEffects('.seletion', '#a8c5c2', '#d6f8f4');