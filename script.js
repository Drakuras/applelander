document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        question.addEventListener('click', () => {
            const isOpen = !answer.classList.contains('max-h-0');

            // Close all items
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIcon = otherItem.querySelector('.faq-icon');
                otherAnswer.classList.add('max-h-0');
                otherIcon.classList.remove('rotate-180');
            });

            // If it wasn't open, open it
            if (!isOpen) {
                answer.classList.remove('max-h-0');
                answer.classList.add('max-h-[200px]');
                icon.classList.add('rotate-180');
            }
        });
    });

    // Animate progress bar slightly on load
    setTimeout(() => {
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            progressBar.style.width = '20%';
        }
    }, 100);
});
