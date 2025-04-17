function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();

    // element is partly in view?
    if (rect.top < window.innerHeight - 150 && rect.bottom > 150) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('DOMContentLoaded', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);


// grab elements
const karokaCard = document.getElementById('karoka-card');
const karokaModal = document.getElementById('karoka-modal');
const closeBtn   = karokaModal.querySelector('.modal-close');
const overlay    = karokaModal.querySelector('.modal-overlay');


karokaCard.addEventListener('click', () => {
  karokaModal.classList.add('show');
  // trigger reveal animation 
  const toReveal = karokaModal.querySelectorAll('.reveal');
  toReveal.forEach(el => el.classList.add('visible'));
});


closeBtn.addEventListener('click', () => karokaModal.classList.remove('show'));
overlay .addEventListener('click', () => karokaModal.classList.remove('show'));
// utility to wire up one modal
function wireModal(cardId, modalId) {
  const card   = document.getElementById(cardId);
  const modal  = document.getElementById(modalId);
  const close  = modal.querySelector('.modal-close');
  const overlay = modal.querySelector('.modal-overlay');
  const toReveal = modal.querySelectorAll('.reveal');

  card.addEventListener('click', () => {
    modal.classList.add('show');
    toReveal.forEach(el => el.classList.add('visible'));
  });
  close.addEventListener('click', () => modal.classList.remove('show'));
  overlay.addEventListener('click', () => modal.classList.remove('show'));
}

// wire Karoka (already done), plus the three new ones:
wireModal('karoka-card', 'karoka-modal');
wireModal('miningai-card', 'miningai-modal');
wireModal('ffmada-card',   'ffmada-modal');
wireModal('datanz-card',   'datanz-modal');

