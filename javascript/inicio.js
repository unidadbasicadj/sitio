// **** Función que calcula la distancia de la imagen desde el costado indicado ("left" o "right") ****
function marginDistance(side, imgElement) {

  const rect = imgElement.getBoundingClientRect();
  if (side === 'left') {
    return rect.left; // Distancia del costado izquierdo ("left")
  } else if (side === 'right') {
    return window.innerWidth - rect.right; // Distancia del costado derecho ("right")
  }

  return 0;

}

// **** Función que actualiza la opacidad de cada imagen en base a la distancia de la foto con cada costado de la pantalla ****
function updateOpacity() {

  const images = document.querySelectorAll('[id^="fotito-"]');

  images.forEach(imgElement => {

    const distanceLeft = marginDistance('left', imgElement);
    const distanceRight = marginDistance('right', imgElement);
    const maxDistance = window.innerWidth;
    let opacityValue;

    if (distanceLeft < distanceRight) {
      opacityValue = Math.max(0, Math.min(1, distanceLeft / maxDistance * 6));
    } else {
      opacityValue = Math.max(0, Math.min(1, distanceRight / maxDistance * 6));
    }

    imgElement.style.opacity = opacityValue;

  });

  requestAnimationFrame(updateOpacity);
}

requestAnimationFrame(updateOpacity);

// **** Función para verificar si abre la aplicación en el celu de facebook ****
function openFacebook(event) {

  event.preventDefault();
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    window.location.href = "fb://page/342721982596286";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = "fb://profile/342721982596286";
  } else {
    window.open("https://www.facebook.com/342721982596286", "_blank");
  }

}

// **** Función para verificar si abre la aplicación en el celu de Instagram ****
function openInstagram(event) {

  event.preventDefault();
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    window.location.href = "instagram://user?username=unidadbasicadj";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = "instagram://user?username=unidadbasicadj";
  } else {
    window.open("https://www.instagram.com/unidadbasicadj", "_blank");
  }

}

// **** Función para verificar si abre la aplicación en el celu de Twitter ****
function openX(event) {

  event.preventDefault();
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    window.location.href = "twitter://user?screen_name=unidadbasicadj";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = "twitter://user?screen_name=unidadbasicadj";
  } else {
    window.open("https://www.x.com/unidadbasicadj", "_blank");
  }

}

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

// Obtiene el elemento modal y le asigna la imagen y lo mismo con el rótulo de texto
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalContent = document.querySelector('.modal-content');
const captionText = document.getElementById('caption');
const closeModal = document.getElementById('close-modal');

// Obtiene las imágenes que debe mostrar en modal en caso de clickear sobre una de ellas
const images = document.querySelectorAll('#banderas img, .carousel-item img, .banner img, .encabezado-general .logo-escudo');

// Agrega el listener para detectar cuando clickea cada imagen
images.forEach(image => {

  image.addEventListener('click', () => {

    modal.style.display = 'flex';
    modalImage.src = image.src;
    captionText.innerHTML = image.alt;

    // Aplica estilos al texto debajo de cada imagen
    captionText.style.maxWidth = '99vivw';
    captionText.style.textAlign = 'center';

    if (image.alt.includes("Evita") || image.alt.includes("Perón")) {
      modalContent.style.borderColor = 'rgba(0, 103, 146, 1)';
      modalContent.style.border = 'solid 0.5rem';
      modalContent.style.borderRadius = '2rem';
      modalContent.style.padding = '3rem';
      modalContent.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    } else {
      modalContent.style.border = 'none';
      modalContent.style.borderRadius = '0';
      modalContent.style.padding = '0';
      modalContent.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }

    modal.style.backgroundColor = 'rgba(0, 0, 0, .7)';
    captionText.style.color = 'rgba(255, 255, 255, 1)';
    captionText.style.textShadow = '0px 0px 1.5rem rgba(0, 0, 0, 1)';
    closeModal.style.color = 'rgba(255, 255, 255, 1)';
    closeModal.style.textShadow = '0px 0px 1.5rem rgba(0, 0, 0, 1)';

  });

});

// Cierra la ventana modal cuando el botón es clickeado 
closeModal.addEventListener('click', () => {

  modal.style.display = 'none';

});

// Cierra la ventana modal si se clickea fuera de la imagen
window.addEventListener('click', (event) => {

  if (event.target === modal) {
    modal.style.display = 'none';
  }

});
