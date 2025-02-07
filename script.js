document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.circle-rain');
    const circleCount = 100; // Number of circles to create

    for (let i = 0; i < circleCount; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5 and 10 seconds
        circle.style.animationDelay = `${Math.random() * 10}s`; // Random delay to start animation immediately
        container.appendChild(circle);
    }

    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    const centerImage = document.getElementById('centerImage');

    yesButton.addEventListener('click', () => {
        centerImage.src = 'images/final.gif'; // Path to your final.gif
        alert('Thank you! I love you too.');
    });

    noButton.addEventListener('click', () => {
        centerImage.src = 'images/2.jpg'; // Path to your 2.jpg
        alert("Don't you love me now? Choose again.");
    });
});
