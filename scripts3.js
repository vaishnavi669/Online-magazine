document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');  // Get the link href
        if (href.indexOf('#') === 0) {  // If it's an anchor link (same-page navigation)
            e.preventDefault();
            const targetId = href.substring(1);  // Get the section ID
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,  // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});


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
const cards = document.querySelectorAll('.feature-cards .feature-card');
const totalCards = cards.length;
const carouselContainer = document.querySelector('.feature-cards');

// Function to show the next card by sliding horizontally
function showNextCard() {
    currentIndex = (currentIndex + 1) % totalCards;
    const offset = -currentIndex * 100;  // Move container by -100% for each new card
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Function to show the previous card by sliding horizontally
function showPrevCard() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;  // Wrap around
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Set interval to automatically move to the next card every 3 seconds
setInterval(showNextCard, 3000);

// Add event listeners for manual navigation buttons
document.querySelector('.prev').addEventListener('click', showPrevCard);
document.querySelector('.next').addEventListener('click', showNextCard);
