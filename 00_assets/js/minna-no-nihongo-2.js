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
        
        // Store the selected answer
        selectedAnswers[questionNumber] = this.getAttribute('data-correct') === 'true';
    });
});

checkAnswersBtn.addEventListener('click', () => {
    const questions = document.querySelectorAll('.practice-card');
    let correctCount = 0;
    
    questions.forEach((question, index) => {
        const questionNumber = index + 1;
        const feedback = question.querySelector('.practice-feedback');
        
        if (selectedAnswers[questionNumber] === true) {
            feedback.className = 'practice-feedback correct';
            feedback.innerHTML = '<i class="fas fa-check"></i> Jawaban Anda benar!';
            correctCount++;
        } else if (selectedAnswers[questionNumber] === false) {
            feedback.className = 'practice-feedback incorrect';
            const correctOption = question.querySelector('.practice-option[data-correct="true"]');
            feedback.innerHTML = `<i class="fas fa-times"></i> Jawaban Anda salah. Jawaban yang benar: "${correctOption.textContent}"`;
        } else {
            feedback.className = 'practice-feedback incorrect';
            feedback.innerHTML = '<i class="fas fa-exclamation-circle"></i> Silakan pilih jawaban terlebih dahulu.';
        }
    });

    // Show overall score
    if (Object.keys(selectedAnswers).length === questions.length) {
        const scorePercentage = Math.round((correctCount / questions.length) * 100);
        showScorePopup(correctCount, questions.length, scorePercentage);
    }
});

resetPracticeBtn.addEventListener('click', () => {
    // Reset all selections and feedback
    practiceOptions.forEach(option => {
        option.classList.remove('selected');
    });
    
    document.querySelectorAll('.practice-feedback').forEach(feedback => {
        feedback.className = 'practice-feedback';
        feedback.innerHTML = '';
        feedback.style.display = 'none';
    });
    
    selectedAnswers = {};
});

function showScorePopup(correct, total, percentage) {
    // Create score popup
    const popup = document.createElement('div');
    popup.className = 'score-popup';
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--bg-card);
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 10px 30px var(--shadow);
        z-index: 1000;
        text-align: center;
        border: 3px solid ${percentage >= 70 ? 'var(--success)' : 'var(--primary)'};
    `;
    
    const emoji = percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '💪';
    
    popup.innerHTML = `
        <h3 style="margin-bottom: 15px; color: var(--text-primary);">Hasil Latihan</h3>
        <div style="font-size: 48px; margin-bottom: 15px;">${emoji}</div>
        <p style="margin-bottom: 10px; color: var(--text-secondary);">Skor Anda:</p>
        <div style="font-size: 36px; font-weight: bold; color: ${percentage >= 70 ? 'var(--success)' : 'var(--primary)'}; margin-bottom: 15px;">
            ${correct}/${total}
        </div>
        <div style="font-size: 18px; color: var(--text-secondary); margin-bottom: 20px;">
            (${percentage}%)
        </div>
        <button class="btn btn-primary" onclick="this.parentElement.remove()">
            <i class="fas fa-check"></i> Mengerti
        </button>
    `;
    
    document.body.appendChild(popup);
    
    // Add overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
    `;
    overlay.onclick = () => {
        popup.remove();
        overlay.remove();
    };
    document.body.appendChild(overlay);
}

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

// Vocabulary Card Hover Effects
document.querySelectorAll('.vocab-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 8px 25px var(--shadow)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 15px var(--shadow)';
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});