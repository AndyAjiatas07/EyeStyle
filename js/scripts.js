    document.querySelectorAll('.nav-link-toggle').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    if (targetSection.classList.contains('show')) {
      targetSection.classList.remove('show');
    } else {
      // Ocultar otros si quieres solo uno abierto a la vez
      document.querySelectorAll('.toggle-section').forEach(section => {
        section.classList.remove('show');
      });
      targetSection.classList.add('show');
    }
  });
});
