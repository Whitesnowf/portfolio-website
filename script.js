// greeting

document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 6) {
        greeting = "Hello";
    } else if (hour > 5 && hour < 12) {
        greeting = "Good morning";
    } else if (hour > 11 && hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    // Select the element by ID and update its content
    const greetingElement = document.querySelector('#greeting');
    if (greetingElement) {
        greetingElement.textContent = `${greeting}, thank you for visiting my website! This is an archive of some of my current and past coursework, personal projects and courses.`;
    }
});


// scroll

document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    function checkScrollPosition() {
        // Calculate how much the user has scrolled and the total height of the document
        const scrollPosition = window.innerHeight + window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;

        // Show the button only when the user is at or near the bottom of the page
        if (scrollPosition + 10 >= documentHeight) {
            backToTopButton.style.display = 'block'; // Show the button
        } else {
            backToTopButton.style.display = 'none'; // Hide the button
        }
    }

    // Check the scroll position on scroll and resize events
    window.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);

    // Initial check to ensure button state is correct on page load
    checkScrollPosition();

    // Smooth scroll to top when button is clicked
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
