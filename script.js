document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const greetings = ['Hello', 'Holla', 'Bonjour', 'Namaste', 'Ciao'];
    let currentIndex = 0;

    function changeGreeting() {
        // Fade out
        greetingElement.style.opacity = '0';

        setTimeout(() => {
            // Change text
            currentIndex = (currentIndex + 1) % greetings.length;
            greetingElement.textContent = greetings[currentIndex];

            // Fade in
            greetingElement.style.opacity = '1';
        }, 500); // Wait for fade out to complete (0.5s match CSS)
    }

    // Initialize opacity for transition
    greetingElement.style.opacity = '1';

    // Change greeting every 3 seconds
    setInterval(changeGreeting, 3000);
});
