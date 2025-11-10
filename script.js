// Handle smooth scrolling and active state for navigation
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking on a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = ''; 
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !mobileNav.contains(e.target) && mobileNav.classList.contains('active')) {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Navigation and scroll animations only
    // Social Media Bar Positioning
    const socialMediaBar = document.querySelector('.social-media-bar');
    const servicesSection = document.querySelector('.all-services');
    const footer = document.querySelector('.footer');
    
    function updateSocialBarPosition() {
        if (!socialMediaBar || !servicesSection || !footer) return;
        
        const servicesSectionRect = servicesSection.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        const socialBarRect = socialMediaBar.getBoundingClientRect();
        
        // Calculate the distance between services section bottom and footer top
        const servicesBottom = servicesSectionRect.bottom;
        const footerTop = footerRect.top;
        const availableSpace = footerTop - servicesBottom;
        
        if (footerRect.top <= window.innerHeight) {
            // Calculate how far we've scrolled into the transition zone
            const scrollProgress = Math.min(Math.max((window.innerHeight - footerTop) / availableSpace, 0), 1);
            
            // Calculate the target position
            const startY = window.scrollY + (window.innerHeight / 2);
            const endY = servicesSectionRect.bottom + window.scrollY - (socialBarRect.height / 2);
            const targetY = startY + (endY - startY) * scrollProgress;
            
            socialMediaBar.style.position = 'absolute';
            socialMediaBar.style.top = `${targetY}px`;
            socialMediaBar.style.transform = `translateY(-50%)`;
        } else {
            socialMediaBar.style.position = 'fixed';
            socialMediaBar.style.top = '50%';
            socialMediaBar.style.transform = 'translateY(-50%)';
        }
    }

    // Use requestAnimationFrame for smoother updates
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateSocialBarPosition();
                ticking = false;
            });
            ticking = true;
        }
    });

    window.addEventListener('scroll', updateSocialBarPosition);
    window.addEventListener('resize', updateSocialBarPosition);

    // Initial position update
    updateSocialBarPosition();
    const navLinks = document.querySelectorAll('.nav-links a');

    // Function to update active state based on scroll position
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100; // Offset for better accuracy

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Update active state on scroll
    window.addEventListener('scroll', updateActiveLink);

    // Handle smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active state
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
            }
        });

        // Hover animation
        link.addEventListener('mouseenter', e => {
            e.target.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', e => {
            e.target.style.transform = 'translateY(0)';
        });
    });

    // Animate hero text on page load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease';
            heroContent.style.opacity = '1';
        }, 500);
    }

    // Initial check for active link
    updateActiveLink();
});
