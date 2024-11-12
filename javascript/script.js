// script.js

// Lightbox functionality
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.cursor = 'pointer';
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = e.target.src;
        img.style.maxWidth = '80%';
        img.style.maxHeight = '80%';
        lightbox.appendChild(img);

        lightbox.addEventListener('click', function () {
            lightbox.remove();
        });
    }
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});

// Scroll to top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.id = 'scrollToTopButton';
scrollToTopButton.innerText = '↑ Top';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.display = 'none';
scrollToTopButton.style.backgroundColor = '#333';
scrollToTopButton.style.color = '#fff';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.cursor = 'pointer';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

