let currentIndex = 0;

function changeImage(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + images.length) % images.length; // Loop back to the first image
    images[currentIndex].classList.add('active');
}

// Automatic image slider
setInterval(() => {
    changeImage(1); // Change image every 5 seconds
}, 4000);

// Show scroll-to-top button on scroll
window.onscroll = function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
