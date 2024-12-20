const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show scroll-to-top button after scrolling 200px with animation
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.classList.add('show'); // Add the 'show' class to trigger fade-in
    } else {
        scrollToTopBtn.classList.remove('show'); // Remove the 'show' class to fade out
    }
};

// Click event to scroll to top with smooth animation
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

let currentIndex = 0;
const cards = document.querySelectorAll('.carousel-container .card');
const totalCards = cards.length;
const carouselContainer = document.querySelector('.carousel-container');

// Function to show the next card by sliding horizontally
function showNextCard() {
    currentIndex = (currentIndex + 1) % totalCards;  // Wrap around when we reach the last card
    const offset = -currentIndex * 100;  // Calculate the offset based on current index (move container by -100% for each new card)
    carouselContainer.style.transform = `translateX(${offset}%)`;  // Apply the transform
}

// Function to show the previous card by sliding horizontally
function showPrevCard() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;  // Wrap around when we reach the first card
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Set interval to automatically move to the next card every 3 seconds
setInterval(showNextCard, 3000);

// Add event listeners for manual navigation buttons
document.querySelector('.prev').addEventListener('click', showPrevCard);
document.querySelector('.next').addEventListener('click', showNextCard);
