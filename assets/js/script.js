window.addEventListener('scroll', function () {
  const navbar = document.getElementsByClassName('nav-container')[0];
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// Typing Animation with Multiple Words
const typedTextElement = document.getElementById('typed-text');

const words = [
    'Website Developer',
    'Technical Writer',
    'UI/UX Designer',
    'Digital Storyteller'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Remove characters
        typedTextElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        // Add characters
        typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    // Determine typing speed
    let typingSpeed = isDeleting ? 80 : 150;
    
    // When word is complete, wait before deleting
    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000; // Pause at end of word
        isDeleting = true;
    } 
    // When word is fully deleted, move to next word
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Loop to next word
        typingSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    typeEffect();
});

// ** Language Progress Bar Animation Logic **
document.addEventListener('DOMContentLoaded', function() {
    const proficiencyLevels = {
        'A1': 20, 'A2': 40, 'B1': 60, 'B2': 75, 'C1': 90, 'C2': 100
    };

    const animateBars = () => {
        const fills = document.querySelectorAll('.progress-fill');
        fills.forEach(fill => {
            const level = fill.getAttribute('data-level');
            const percentage = proficiencyLevels[level] || 50;
            fill.style.width = percentage + '%';
        });
    };

    // Trigger animation when the section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateBars();
                observer.unobserve(entry.target); // Run only once
            }
        });
    }, { threshold: 0.3 });

    const languageSection = document.querySelector('#language');
    if (languageSection) observer.observe(languageSection);
});

