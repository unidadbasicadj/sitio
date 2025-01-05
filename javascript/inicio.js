// Calcula la distancia de la imagen desde el costado indicado ("left" o "right")
function marginDistance(side, imgElement) {
  const rect = imgElement.getBoundingClientRect();

  // Chequea que margen está calculando ("left" o "right")
  if (side === 'left') {
    return rect.left; // Distancia del costado izquierdo
  } else if (side === 'right') {
    return window.innerWidth - rect.right; // Distancia del costado derecho
  }
  return 0;
}

// Actualiza la opacidad de cada imagen en base a la distancia de la foto con cada costado de la pantalla
function updateOpacity() {
  // Selecciona todas las imágenes con los IDs fotito-1, fotito-2, fotito-3, fotito-4
  const images = document.querySelectorAll('[id^="fotito-"]'); // Selecciona todos los elementos que empiecen con "fotito-"

  // Itera sobre cada imagen para actualizar su opacidad
  images.forEach(imgElement => {
    // Verifica la distancia de cada imagen desde el costado izquierdo y derecho
    const distanceLeft = marginDistance('left', imgElement);
    const distanceRight = marginDistance('right', imgElement);

    // Calcula la unidad de opacidad basado en el ancho de la pantalla
    const maxDistance = window.innerWidth; // Máxima distancia posible (ancho de la vista)

    let opacityValue;

    // Decide la opacidad en base a la distancia más corta (izquierda o derecha)
    if (distanceLeft < distanceRight) {
      // Imagen más cercana a la izquierda
      opacityValue = Math.max(0, Math.min(1, distanceLeft / maxDistance * 6));
    } else {
      // Imagen más cercana a la derecha
      opacityValue = Math.max(0, Math.min(1, distanceRight / maxDistance * 6));
    }

    // Aplica la opacidad calculada a la imagen
    imgElement.style.opacity = opacityValue;
  });

  // Llama a la función en cada frame
  requestAnimationFrame(updateOpacity);
}

// Comienza el bucle
requestAnimationFrame(updateOpacity);

