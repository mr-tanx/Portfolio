document.addEventListener('DOMContentLoaded', function() {
    // Always scroll to top on mobile
    if (window.innerWidth <= 900) {
        window.scrollTo(0, 0);
    }

    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.classList.add('slide-in');
        setTimeout(() => {
            mainContent.classList.remove('slide-in');
        }, 800);
    }
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href && this.href !== window.location.href) {
                e.preventDefault();
                if (mainContent) {
                    mainContent.classList.add('slide-out');
                    setTimeout(() => {
                        window.location.href = this.href;
                    }, 800);
                } else {
                    window.location.href = this.href;
                }
            }
        });
    });

    // Animate skill cards on skills page
    if (window.location.pathname.endsWith('skills.html')) {
        const skillCards = document.querySelectorAll('.skills-grid .skill-card');
        skillCards.forEach((card, i) => {
            setTimeout(() => {
                card.classList.add('animate-in');
            }, 150 + i * 100);
        });
    }

    // Animate project cards on projects page
    if (window.location.pathname.endsWith('projects.html')) {
        const projectCards = document.querySelectorAll('.projects-grid .project-card');
        projectCards.forEach((card, i) => {
            setTimeout(() => {
                card.classList.add('zoom-in');
            }, 150 + i * 120);
        });
    }

    // Sticky navbar on mobile when scrolling past sidebar
    function handleStickyNavbar() {
        if (window.innerWidth > 900) return;
        const sidebar = document.querySelector('.sidebar');
        const navbar = document.querySelector('.navbar');
        if (!sidebar || !navbar) return;
        const sidebarRect = sidebar.getBoundingClientRect();
        if (sidebarRect.bottom <= 0) {
            navbar.classList.add('sticky-navbar');
        } else {
            navbar.classList.remove('sticky-navbar');
        }
    }
    window.addEventListener('scroll', handleStickyNavbar);
    window.addEventListener('resize', handleStickyNavbar);
    handleStickyNavbar();

    
    // Load theme from localStorage
   
}); 