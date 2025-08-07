document.addEventListener('DOMContentLoaded', () => {

  // --- Smooth Reveal On Scroll ---
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150; // Distance from the bottom of the screen to trigger the animation

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger once on load

  // --- Automatic Modal Wiring ---
  const allProjectCards = document.querySelectorAll('.project-card');
  allProjectCards.forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.getAttribute('data-modal-target');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('show');
      }
    });
  });

  const allModals = document.querySelectorAll('.modal');
  allModals.forEach(modal => {
    // Close button inside the modal
    const closeButton = modal.querySelector('.modal-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
      });
    }

    // Clicking on the dark background overlay to close
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('show');
      }
    });
  });

  // Close any open modal with the 'Escape' key
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelector('.modal.show')?.classList.remove('show');
    }
  });

});