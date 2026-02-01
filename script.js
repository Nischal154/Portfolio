document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const greetings = ['Hello', 'Namaste', 'Bonjour', 'Holla', 'Ciao'];
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
        }, 250); // Wait for fade out to complete (0.25s match CSS)
    }

    // Initialize opacity for transition
    greetingElement.style.opacity = '1';

    // Change greeting every 1.5 seconds
    setInterval(changeGreeting, 1500);
});
