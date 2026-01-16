// Page Navigation System with Loading Overlay
const sections = document.querySelectorAll('.hero, .section');
const navLinks = document.querySelectorAll('.nav-link');
const loadingOverlay = document.getElementById('loading-overlay');
const preloader = document.getElementById('preloader');

// Hide preloader after initial animation
window.addEventListener('load', () => {
    setTimeout(() => {
        if (preloader) {
            preloader.style.display = 'none';
        }
        initializePage();
    }, 4300); // 3.5s animation + 0.8s fade
});

// Hide all sections except home on load
function initializePage() {
    sections.forEach((section, index) => {
        if (index === 0) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Navigate to a section with loading animation
function navigateToSection(targetId) {
    // Show loading overlay
    loadingOverlay.classList.add('active');
    
    // After a short delay, switch sections
    setTimeout(() => {
        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));
        
        // Show target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Hide loading overlay
        setTimeout(() => {
            loadingOverlay.classList.remove('active');
        }, 500);
    }, 800);
}

// Add click handlers to all nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const targetId = href.replace('.html', '').replace('index', 'home');
        navigateToSection(targetId);
    });
});

// Initialize on page load
window.addEventListener('load', initializePage);

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});

// Close modal on escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
        });
    }
});
