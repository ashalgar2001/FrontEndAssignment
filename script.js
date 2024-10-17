// Add animation class on hover
const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('animate__animated', 'animate__rotateIn');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('animate__animated', 'animate__rotateIn');
    });
});
