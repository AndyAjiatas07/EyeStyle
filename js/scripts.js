document.querySelectorAll('.nav-link-toggle').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('data-target');

    if (targetId === 'section-nosotros') {
      // Solo hacer scroll suave, no prevenir el comportamiento ni cambiar visibilidad
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault(); // Evita salto brusco
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return; // Salir para no ejecutar el resto
    }

    // Para otros links:
    e.preventDefault();

    const targetSection = document.getElementById(targetId);

    // Ocultar todos los paneles
    document.querySelectorAll('.toggle-section').forEach(section => {
      section.classList.remove('show');
    });

    // Mostrar el seleccionado
    if (targetSection) {
      targetSection.classList.add('show');
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in-section');

  const options = {
    threshold: 0.1, // 10% visible
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Deja de observar una vez visible
      }
    });
  }, options);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});


// Filtros de productos
const filtros = document.querySelectorAll('.btn-filter');
const productos = document.querySelectorAll('.producto');

filtros.forEach(btn => {
  btn.addEventListener('click', () => {
    // Activar botón
    filtros.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const categoria = btn.getAttribute('data-filtro');

    productos.forEach(prod => {
      if (categoria === 'todos' || prod.dataset.categoria.includes(categoria)) {
        prod.style.display = 'block';
      } else {
        prod.style.display = 'none';
      }
    });
  });
});
// Mostrar modal con detalles del producto
document.querySelectorAll('.producto .btn-outline-primary').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = btn.closest('.producto-card');
    const producto = btn.closest('.producto');

    const nombre = card.querySelector('.card-title').innerText;
const precioElemento = card.querySelector('.precio');
const precioHTML = precioElemento.innerHTML;
const precioClass = precioElemento.className;   
const imgSrc = card.querySelector('img').getAttribute('src');
    const descripcion = producto.getAttribute('data-descripcion') || "Sin descripción disponible";

    // Asignar contenido al modal
    document.getElementById('modalNombre').innerText = nombre;
const precioModal = document.getElementById('modalPrecio');
precioModal.innerHTML = precioHTML;
precioModal.className = precioClass;
    document.getElementById('modalImagen').setAttribute('src', imgSrc);
    document.getElementById('modalDescripcion').innerText = descripcion;

    // Mostrar modal
    const modal = new bootstrap.Modal(document.getElementById('modalDetalle'));
    modal.show();
  });
});
