// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect
document.addEventListener('scroll', function () {
    const parallaxElements = document.querySelectorAll('.parallax-1, .parallax-2');
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        const yPos = -((window.scrollY * speed) / 100);
        element.style.transform = `translateY(${yPos}px)`;
    });
});
