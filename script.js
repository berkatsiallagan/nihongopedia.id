    // Mobile Menu Toggle with Auto-Close
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu
const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden', !mobileMenu.classList.contains('hidden'));
};

// Close mobile menu
const closeMobileMenu = () => {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
};

// Toggle when button clicked
mobileMenuButton.addEventListener('click', toggleMobileMenu);

// Close when clicking outside
document.addEventListener('click', (e) => {
    const isClickInsideMenu = mobileMenu.contains(e.target) || mobileMenuButton.contains(e.target);
    if (!isClickInsideMenu && !mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
    }
});

// Close when scrolling
document.addEventListener('scroll', () => {
    if (!mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
    }
});

// Close when menu item clicked (for smooth navigation)
mobileMenu.querySelectorAll('a').forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved user preference or use system preference
if (localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
} else {
    document.documentElement.classList.remove('dark');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
    // Toggle icon
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    
    // Toggle theme
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Coming Soon Alert
function CommingSoonAlert() {
    Swal.fire({
        title: 'Coming Soon',
        text: 'Fitur ini masih dalam tahap pengembangan. Silakan coba lagi nanti!',
        icon: 'warning',
        confirmButtonText: 'OK'
    });
}