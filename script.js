/* 
   ═══════════════════════════════════════════════════════════════
   INTERACTIVITY & MAGIC ✨
   ═══════════════════════════════════════════════════════════════
   This script handles all the interactive features of your portfolio.
   Everything is explained with comments so you can understand and modify it!
*/

// ─────────────────────────────────────────────────────────────────
// 1. THEME TOGGLE (Dark / Light Mode)
// ─────────────────────────────────────────────────────────────────
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check if user has a saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'moon' : 'sun');
    lucide.createIcons();
}

// ─────────────────────────────────────────────────────────────────
// 2. NAVBAR SCROLL EFFECT
// ─────────────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    // Add background to navbar when scrolling
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Show/hide scroll to top button
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ─────────────────────────────────────────────────────────────────
// 3. REVEAL ON SCROLL ANIMATION
// ─────────────────────────────────────────────────────────────────
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ─────────────────────────────────────────────────────────────────
// 4. CUSTOM CURSOR (Premium Effect)
// ─────────────────────────────────────────────────────────────────
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

// Only enable on desktop
if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });

    // Scale cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.borderColor = 'var(--accent-light)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.borderColor = 'var(--accent)';
        });
    });
}

// ─────────────────────────────────────────────────────────────────
// 5. SMOOTH SCROLL FOR NAV LINKS
// ─────────────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ─────────────────────────────────────────────────────────────────
// 6. ACTIVE NAV LINK ON SCROLL
// ─────────────────────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ─────────────────────────────────────────────────────────────────
// 7. CONTACT FORM (Simple Feedback)
// ─────────────────────────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple feedback (in a real project, you would send this to a server)
        alert(`Thank you, ${name}! 🎉\n\nYour message has been received. I'll get back to you at ${email} soon!`);

        // Reset form
        contactForm.reset();
    });
}

// ─────────────────────────────────────────────────────────────────
// 8. TYPING ANIMATION (Optional Enhancement)
// ─────────────────────────────────────────────────────────────────
const typingElement = document.querySelector('.typed-text');
if (typingElement) {
    const words = ['Developer', 'Designer', 'Creator', 'Learner'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// ─────────────────────────────────────────────────────────────────
// 9. PARALLAX EFFECT FOR BACKGROUND BLURS
// ─────────────────────────────────────────────────────────────────
const blurCircles = document.querySelectorAll('.bg-blur-circle');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    blurCircles.forEach((circle, index) => {
        const speed = 0.05 * (index + 1);
        circle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ─────────────────────────────────────────────────────────────────
// 10. IMAGE LAZY LOADING
// ─────────────────────────────────────────────────────────────────
const images = document.querySelectorAll('img[data-src]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ─────────────────────────────────────────────────────────────────
// 11. STAT COUNTER ANIMATION
// ─────────────────────────────────────────────────────────────────
const statNumbers = document.querySelectorAll('.stat-number');

const countUp = (el, target) => {
    let count = 0;
    const increment = target / 50;

    const updateCount = () => {
        if (count < target) {
            count += increment;
            el.textContent = Math.ceil(count) + '+';
            requestAnimationFrame(updateCount);
        } else {
            el.textContent = target + '+';
        }
    };

    updateCount();
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.textContent);
            countUp(entry.target, target);
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statObserver.observe(stat));

// ─────────────────────────────────────────────────────────────────
// INITIALIZE
// ─────────────────────────────────────────────────────────────────
console.log('✨ Portfolio loaded successfully!');
