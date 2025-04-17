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
