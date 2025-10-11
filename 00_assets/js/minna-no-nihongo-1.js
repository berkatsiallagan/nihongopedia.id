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
const resetPracticeBtn = document.getElementById('reset-practice');

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
        
        // Store the selected answer with the option text and correctness
        selectedAnswers[questionNumber] = {
            isCorrect: this.getAttribute('data-correct') === 'true',
            selectedText: this.textContent,
            correctText: question.querySelector('.practice-option[data-correct="true"]').textContent
        };
        
        // Clear feedback when new selection is made
        const feedback = question.querySelector('.practice-feedback');
        feedback.innerHTML = '';
        feedback.className = 'practice-feedback';
    });
});

checkAnswersBtn.addEventListener('click', () => {
    const questions = document.querySelectorAll('.practice-card');
    let allAnswered = true;
    
    questions.forEach((question, index) => {
        const questionNumber = index + 1;
        const feedback = question.querySelector('.practice-feedback');
        
        if (selectedAnswers[questionNumber]) {
            if (selectedAnswers[questionNumber].isCorrect) {
                feedback.className = 'practice-feedback correct';
                feedback.innerHTML = '<i class="fas fa-check"></i> <strong>Benar!</strong> Jawaban Anda tepat.';
            } else {
                feedback.className = 'practice-feedback incorrect';
                feedback.innerHTML = `<i class="fas fa-times"></i> <strong>Salah.</strong> Jawaban yang benar: "${selectedAnswers[questionNumber].correctText}"`;
            }
        } else {
            feedback.className = 'practice-feedback warning';
            feedback.innerHTML = '<i class="fas fa-exclamation-circle"></i> Silakan pilih jawaban terlebih dahulu.';
            allAnswered = false;
        }
    });
    
    // Scroll to practice section
    const target = document.querySelector('#practice');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Show completion message if all answered
    if (allAnswered) {
        const correctCount = Object.values(selectedAnswers).filter(answer => answer.isCorrect).length;
        const totalQuestions = questions.length;
        
        setTimeout(() => {
            alert(`Latihan selesai!\n\nHasil: ${correctCount} dari ${totalQuestions} soal benar\n(${Math.round((correctCount/totalQuestions)*100)}%)`);
        }, 500);
    }
});

// Reset Practice Function
resetPracticeBtn.addEventListener('click', () => {
    // Clear all selections
    practiceOptions.forEach(option => {
        option.classList.remove('selected');
    });
    
    // Clear all feedback
    const feedbacks = document.querySelectorAll('.practice-feedback');
    feedbacks.forEach(feedback => {
        feedback.innerHTML = '';
        feedback.className = 'practice-feedback';
    });
    
    // Reset selected answers
    selectedAnswers = {};
    
    // Scroll to top of practice section
    const target = document.querySelector('#practice');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Show reset confirmation
    setTimeout(() => {
        alert('Latihan telah direset. Silakan coba lagi!');
    }, 300);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement === checkAnswersBtn) {
        checkAnswersBtn.click();
    }
    if (e.key === 'Escape' && document.activeElement === resetPracticeBtn) {
        resetPracticeBtn.click();
    }
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