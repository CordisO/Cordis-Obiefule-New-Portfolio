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
    'Creative Coder',
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

// ** Automatically set progress bar width based on proficiency level **
document.addEventListener('DOMContentLoaded', function() {
    const languageCards = document.querySelectorAll('.flip-slide');
    
    // Proficiency level mapping to percentage
    const proficiencyLevels = {
        'A1': 20,  // Beginner
        'A2': 40,  // Elementary
        'B1': 60,  // Intermediate
        'B2': 75,  // Upper Intermediate
        'C1': 90,  // Advanced
        'C2': 100  // Native/Fluent
    };
    
    languageCards.forEach(card => {
        const proficiencyElement = card.querySelector('.proficiency');
        const progressBar = card.querySelector('.progress-fill');
        
        if (proficiencyElement && progressBar) {
            const level = proficiencyElement.textContent.trim().toUpperCase();
            const percentage = proficiencyLevels[level] || 50; // Default to 50% if level not found
            
            // Set the width
            progressBar.style.width = percentage + '%';
        }
    });
});