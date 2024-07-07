document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    const bodyElement = document.body;

    darkModeToggle.addEventListener('click', () => {
        bodyElement.classList.toggle('dark-mode');
    });
});