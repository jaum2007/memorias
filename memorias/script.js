document.querySelectorAll('.memory img').forEach(img => {
    img.addEventListener('click', () => {
        alert('Você clicou em uma memória!');
    });
});