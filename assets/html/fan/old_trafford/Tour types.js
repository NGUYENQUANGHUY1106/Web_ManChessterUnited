document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const items = document.querySelectorAll('.carousel-item');

    const itemsToShow = 4; // Number of items to show per click
    let currentIndex = 0;

    const updateCarousel = () => {
        const itemWidth = items[0].clientWidth + 20; // 20 for margin
        const newTransform = -currentIndex * itemWidth;
        carousel.style.transform = `translateX(${newTransform}px)`;
    };

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= itemsToShow;
            if (currentIndex < 0) currentIndex = 0;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - itemsToShow) {
            currentIndex += itemsToShow;
            if (currentIndex > items.length - itemsToShow) currentIndex = items.length - itemsToShow;
            updateCarousel();
        }
    });

    updateCarousel(); // Initialize carousel position
});