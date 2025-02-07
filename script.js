document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const heartCount = 100; // Number of hearts to create

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = 5 + Math.random() * 10 + 's'; // Random duration between 5 and 15 seconds
        heart.style.animationDelay = -Math.random() * 10 + 's'; // Random delay to start animation immediately
        container.appendChild(heart);
    }
});