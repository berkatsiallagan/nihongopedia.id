// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme or prefer-color-scheme
const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply the saved theme
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Practice Questions Functionality
const practiceOptions = document.querySelectorAll('.practice-option');
const checkAnswersBtn = document.getElementById('check-answers');

let selectedAnswers = {};

practiceOptions.forEach(option => {
    option.addEventListener('click', function() {
        const question = this.closest('.practice-card');
        const questionNumber = Array.from(document.querySelectorAll('.practice-card')).indexOf(question) + 1;
        
        // Remove selected class from all options in this question
        question.querySelectorAll('.practice-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        this.classList.add('selected');
        
        // Store the selected answer
        selectedAnswers[questionNumber] = this.getAttribute('data-correct') === 'true';
    });
});

checkAnswersBtn.addEventListener('click', () => {
    const questions = document.querySelectorAll('.practice-card');
    
    questions.forEach((question, index) => {
        const questionNumber = index + 1;
        const feedback = question.querySelector('.practice-feedback');
        
        if (selectedAnswers[questionNumber] === true) {
            feedback.className = 'practice-feedback correct';
            feedback.innerHTML = '<i class="fas fa-check"></i> Jawaban Anda benar!';
        } else if (selectedAnswers[questionNumber] === false) {
            feedback.className = 'practice-feedback incorrect';
            feedback.innerHTML = '<i class="fas fa-times"></i> Jawaban Anda salah. Coba lagi!';
        } else {
            feedback.className = 'practice-feedback incorrect';
            feedback.innerHTML = '<i class="fas fa-exclamation-circle"></i> Silakan pilih jawaban terlebih dahulu.';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            navMenu.classList.remove('active');
            mobileMenuToggle.querySelector('i').classList.remove('fa-times');
            mobileMenuToggle.querySelector('i').classList.add('fa-bars');

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Go to Top Functionality
const goToTopBtn = document.getElementById('go-to-top');

// Show/hide button based on scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        goToTopBtn.classList.add('show');
    } else {
        goToTopBtn.classList.remove('show');
    }
});

// Smooth scroll to top
goToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});