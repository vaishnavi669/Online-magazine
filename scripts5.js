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

// Form validation
document.querySelector("form").addEventListener("submit", function(event) {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    // Simple email validation (basic format check)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
    } else {
        alert("Thank you for subscribing!"); // You can replace this with actual form submission logic
    }
});
