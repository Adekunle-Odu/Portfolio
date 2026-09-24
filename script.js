<script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            400: '#38bdf8',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            900: '#0c4a6e',
                        },
                        dark: {
                            bg: '#0b0f17',
                            card: '#161e2e',
                            border: '#26334d',
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    
<script>
        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Mobile Navigation Drawer Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            } else {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            }
        });

        // Close mobile nav when link clicked
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            });
        });

        // Project Filter Logic
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active style from all buttons
                filterBtns.forEach(b => {
                    b.classList.remove('bg-brand-500', 'text-white');
                    b.classList.add('bg-slate-800/80', 'text-slate-400');
                });

                // Add active style to clicked button
                btn.classList.removeClass = ('bg-slate-800/80', 'text-slate-400');
                btn.classList.add('bg-brand-500', 'text-white');

                const filter = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Contact Form Handling
        const contactForm = document.getElementById('contact-form');
        const formAlert = document.getElementById('form-alert');
        const submitBtn = document.getElementById('submit-btn');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> Sending...`;

            setTimeout(() => {
                // Show success alert
                formAlert.className = "p-4 rounded-xl text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 block mb-4";
                formAlert.textContent = "Thank you! Your message has been received. Adekunle will get back to you shortly.";
                
                // Reset form and button
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<span>Send Message</span> <i class="fa-solid fa-paper-plane text-xs"></i>`;

                // Hide alert after 6 seconds
                setTimeout(() => {
                    formAlert.className = "hidden";
                }, 6000);
            }, 1200);
        });
    </script>
