
document.getElementById('menu-btn').addEventListener('click', function() {
  document.getElementById('nav').classList.toggle('show');
});





document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  let nombre = document.getElementById('nombre').value;
  let correo = document.getElementById('correo').value;
  let mensaje = document.getElementById('mensaje').value;


  document.getElementById('mensaje-confirmacion').innerText = '¡Gracias, ' + nombre + '! Tu mensaje ha sido enviado.';
  document.getElementById('mensaje-confirmacion').style.display = 'block';

  
  document.getElementById('contact-form').reset();
});

// Animación de productos al hacer scroll
window.addEventListener('scroll', function() {
  let productos = document.querySelectorAll('.producto-item');
  productos.forEach(function(producto) {
    let productoPos = producto.getBoundingClientRect().top;
    let pantallaPos = window.innerHeight / 1.5;
    if (productoPos < pantallaPos) {
      producto.classList.add('mostrar');
    }
  });
});
