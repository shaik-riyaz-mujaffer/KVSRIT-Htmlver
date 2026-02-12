/**
 * ============================================
 * FUTURISTIC LOADING SCREEN - Controller
 * ============================================
 * Relocated to: assets/components/loader/loader.js
 * Manages loading progress, hide timer, and quote rotation.
 * ============================================
 */

(function () {
    'use strict';

    // Quotes Configuration
    const quotes = [
        "Education is the most powerful weapon which you can use to change the world.",
        "Learning never exhausts the mind.",
        "The roots of education are bitter, but the fruit is sweet.",
        "Education is the passport to the future.",
        "An investment in knowledge pays the best interest."
    ];

    // Duration Configuration (ms)
    const DURATION = 3000;
    const QUOTE_INTERVAL = 1000;

    // DOM Elements
    const overlay = document.getElementById('loader-overlay');
    const progressFill = document.getElementById('loader-progress-fill');
    const percentageText = document.getElementById('loader-percentage');
    const quoteElement = document.getElementById('quote');

    let quoteIndex = 0;
    let quoteTimer;

    /**
     * Updates the quote with a fade transition
     */
    function rotateQuote() {
        if (!quoteElement) return;

        quoteElement.classList.add('fade');

        setTimeout(() => {
            quoteIndex = (quoteIndex + 1) % quotes.length;
            quoteElement.textContent = quotes[quoteIndex];
            quoteElement.classList.remove('fade');
        }, 500);
    }

    /**
     * Progress Animation Logic
     */
    function animateProgress() {
        const startTime = Date.now();

        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / DURATION, 1);

            if (progressFill) progressFill.style.width = (progress * 100) + '%';
            if (percentageText) percentageText.textContent = Math.round(progress * 100) + '%';

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                hideLoader();
            }
        }

        requestAnimationFrame(update);
    }

    /**
     * Hides the loader smoothly
     */
    function hideLoader() {
        clearInterval(quoteTimer);
        if (overlay) {
            overlay.classList.add('hidden');
            setTimeout(() => {
                overlay.style.display = 'none';
                document.body.style.overflow = '';
            }, 800);
        }
    }

    /**
     * Main Initialization
     */
    function init() {
        document.body.style.overflow = 'hidden';

        // Initial quote
        if (quoteElement) quoteElement.textContent = quotes[0];

        // Start timers
        quoteTimer = setInterval(rotateQuote, QUOTE_INTERVAL);
        animateProgress();
    }

    // Initialize when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
