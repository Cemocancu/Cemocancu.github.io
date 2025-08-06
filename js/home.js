document.addEventListener('DOMContentLoaded', () => {
    const heroTextContainer = document.getElementById('hero-text-container');

    if (heroTextContainer) {
        setTimeout(() => {
            heroTextContainer.classList.add('opacity-0', 'pointer-events-none');
        }, 3000);
    }
});