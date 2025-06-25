document.querySelectorAll('.nav-link-toggle').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    const isVisible = targetSection.classList.contains('show');

    // Ocultar otros paneles
    document.querySelectorAll('.toggle-section').forEach(section => {
      section.classList.remove('show');
    });

    if (!isVisible) {
      targetSection.classList.add('show');

      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
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
