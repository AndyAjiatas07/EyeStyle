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
