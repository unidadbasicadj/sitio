// **** Función que calcula la distancia de la imagen desde el costado indicado ("left" o "right") ****
function marginDistance(side, imgElement) {
  const rect = imgElement.getBoundingClientRect();

  // Chequea qué margen está calculando ("left" o "right")
  if (side === 'left') {
    return rect.left; // Distancia del costado izquierdo ("left")
  } else if (side === 'right') {
    return window.innerWidth - rect.right; // Distancia del costado derecho ("right")
  }
  return 0;
}

// **** Función que actualiza la opacidad de cada imagen en base a la distancia de la foto con cada costado de la pantalla ****
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

// Comienza el bucle para actualizar la opacidad de las imágenes del slide
requestAnimationFrame(updateOpacity);

/*
// **** Función para recargar la página una sola vez por sesión para evitar el error de carga del widget de Instagram en el host ****
// Chequea si ya fue recargada
if (!sessionStorage.getItem('reloaded')) {
  // Esteblece el temporizador de la recarga
  setTimeout(function () {
    // Establece el valor bandera en el almacenamiento de sesión para evitar que recargue otra vez en la misma sesión
    sessionStorage.setItem('reloaded', 'true');
    // Recarga la página
    location.reload();
  }, 2000);
}
*/

// **** Función para verificar si abre la aplicación en el celu de facebook ****
function openFacebook() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    window.location.href = "fb://page/unidadbasicadj"; // Aplicación de facebook
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = "fb://profile/unidadbasicadj"; // Aplicación de facebook
  } else {
    window.open("https://www.facebook.com/unidadbasicadj", "_blank"); // Navegador
  }
}

// **** Función para verificar si abre la aplicación en el celu de Instagram ****
function openInstagram() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    window.location.href = "instagram://user?username=unidadbasicadj"; // Aplicación de Instagram
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = "instagram://user?username=unidadbasicadj"; // Aplicación de Instagram
  } else {
    window.open("https://www.instagram.com/unidadbasicadj", "_blank"); // Navegador
  }
}

// **** Función para verificar si abre la aplicación en el celu de Twitter ****
function openX() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    window.location.href = "twitter://user?screen_name=unidadbasicadj"; // Aplicación de X
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = "twitter://user?screen_name=unidadbasicadj"; // Aplicación de X
  } else {
    window.open("https://www.x.com/unidadbasicadj", "_blank"); // Navegador
  }
}

/*
// Detecta si clickea en el widget de Facebook
document.querySelectorAll('.fb-post').forEach(function (post) {
  post.addEventListener('click', openFacebook);
});

// Detecta si clickea en el widget de Instagram
document.querySelectorAll('.instagram-media').forEach(function (post) {
  post.addEventListener('click', openInstagram);
});

// Detecta si clickea en el widget de X/Twitter
document.querySelectorAll('.twitter-tweet').forEach(function (post) {
  post.addEventListener('click', openX);
});
*/
/*
// Attempt to fetch from a bad Instagram endpoint (incorrect URL)
function triggerError() {
  fetch('https://graph.instagram.com/logging_client_events_invalid', { method: 'POST' })
    .then(response => {
      console.log('Request was successful:', response);
    })
    .catch(error => {
      console.error('Error occurred:', error); // This will log the connection refusal error
    });
}

// Call the function when the page loads
window.onload = triggerError;
*/