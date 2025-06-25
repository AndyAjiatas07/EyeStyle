document.querySelectorAll('.nav-link-toggle').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    const isVisible = targetSection.classList.contains('show');

    // Cerrar todos los paneles
    document.querySelectorAll('.toggle-section').forEach(section => {
      section.classList.remove('show');
    });

    if (!isVisible) {
      targetSection.classList.add('show');

      // Dar un pequeño delay para que el DOM aplique el "display: block" antes de hacer scroll
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  });
});
