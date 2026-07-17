// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Loader Animation
window.addEventListener('load', () => {
    const loaderTL = gsap.timeline();
    
    loaderTL.to('.loader-logo', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.inOut'
    })
    .to('.loader-text', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut'
    }, "-=0.4")
    .to('.loader', {
        yPercent: -100,
        duration: 1,
        ease: 'power4.inOut',
        onStart: () => {
            document.getElementById('main-content').classList.remove('hidden');
        }
    })
    .from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, "-=0.5")
    .call(animateNewHero); // Start hero animation after loader
});

// 2. Animate New Hero Section
function animateNewHero() {
    const heroTL = gsap.timeline();
    
    // Position/set initial properties for the new hero slider elements
    gsap.set('#hero-slider .showcase-slide.active .hero-slider-heading', { opacity: 0, x: -30 });
    gsap.set('#hero-slider .showcase-slide.active .hero-slider-tagline', { opacity: 0, x: -20 });
    gsap.set('#hero-slider .showcase-slide.active .hero-slider-cta-btn', { opacity: 0, x: -20 });
    gsap.set('#hero-slider .showcase-slide.active .hero-slider-image', { opacity: 0, scale: 0.95 });

    heroTL.to('#hero-slider .showcase-slide.active .hero-slider-image', {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out'
    })
    .to('#hero-slider .showcase-slide.active .hero-slider-heading', {
        opacity: 1,
        x: 0,
        duration: 1.0,
        ease: 'power3.out'
    }, "-=1.2")
    .to('#hero-slider .showcase-slide.active .hero-slider-tagline', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, "-=0.8")
    .to('#hero-slider .showcase-slide.active .hero-slider-cta-btn', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, "-=0.6");
}

// 3. Scroll Animations
function initScrollAnimations() {
    // Reveal Headings
    gsap.utils.toArray('.luxury-heading').forEach(heading => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: 'top 85%',
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Reveal Subtitles
    gsap.utils.toArray('.luxury-subtitle').forEach(sub => {
        gsap.from(sub, {
            scrollTrigger: {
                trigger: sub,
                start: 'top 88%',
            },
            y: 25,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Features Grid stagger
    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Oil Concentration bottle reveal
    gsap.from('.bottle-fluid-container', {
        scrollTrigger: {
            trigger: '.oil-concentration',
            start: 'top 75%',
        },
        scale: 0.94,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out'
    });

    // Testimonials section fade-in
    gsap.from('.testimonial-slider, .test-dots', {
        scrollTrigger: {
            trigger: '.testimonials-section',
            start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out'
    });

    // Contact form stagger
    gsap.from('.input-group, .btn-primary', {
        scrollTrigger: {
            trigger: '.glass-form',
            start: 'top 85%',
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Contact details text reveal
    gsap.from('.contact-details p', {
        scrollTrigger: {
            trigger: '.contact-details',
            start: 'top 85%',
        },
        x: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Scroll trigger animations for the black brand statement section (now section 2)
    gsap.from('.hero-section .italic-statement', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-section .btn-minimal', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top 80%',
        },
        y: 20,
        opacity: 0,
        duration: 1.0,
        ease: 'power3.out'
    });

    gsap.from('.hero-section .large-brand-logo', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top 80%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
    });

    // WhatsApp Button Reveal
    const waBtn = document.querySelector('.whatsapp-float');
    const heroSlider = document.getElementById('hero-slider');
    if(waBtn) {
        if (heroSlider) {
            ScrollTrigger.create({
                trigger: '#hero-slider',
                start: 'bottom top', // when bottom of new hero slider hits top of viewport
                onEnter: () => gsap.to(waBtn, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }),
                onLeaveBack: () => gsap.to(waBtn, { autoAlpha: 0, scale: 0.8, duration: 0.3 })
            });
            // Initial state
            gsap.set(waBtn, { autoAlpha: 0, scale: 0.8 });
        } else {
            // On subpages (no hero slider), keep it visible by default
            gsap.set(waBtn, { autoAlpha: 1, scale: 1 });
        }
    }
}

// Universal WhatsApp Link Generator
function getWhatsAppUrl(message) {
    const phone = "919444926620";
    const encodedText = encodeURIComponent(message);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`;
    } else {
        return `https://web.whatsapp.com/send?phone=${phone}&text=${encodedText}`;
    }
}

function initWhatsApp() {
    const waBtn = document.querySelector('.whatsapp-float');
    if (waBtn) {
        waBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let msg = "";
            const modal = document.getElementById('collection-modal');
            if (modal && modal.classList.contains('active')) {
                const perfumeName = document.getElementById('modalPerfumeName').textContent.trim();
                msg = `Hi FLISS Perfumes! 👋\n\nI'm interested in the perfume "${perfumeName}".\n\nCould you please share the price, fragrance notes, and availability?\n\nThank you!`;
            } else {
                msg = `Hi FLISS Perfumes! 👋\n\nI came across your website and I'm interested in your perfumes.\n\nCould you please share your available fragrances, prices, and any recommendations?\n\nThank you!`;
            }
            window.open(getWhatsAppUrl(msg), '_blank');
        });
    }
}

// Database Config & Fallback Controller
class DatabaseController {
    constructor() {
        this.useFallback = true;
        // Firebase config options (Placeholders - user can customize)
        this.firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_PROJECT_ID.appspot.com",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };
        this.db = null;
        this.init();
    }

    init() {
        const isDefaultConfig = this.firebaseConfig.projectId.includes("YOUR_PROJECT_ID");
        if (!isDefaultConfig && typeof firebase !== 'undefined') {
            try {
                if (!firebase.apps.length) {
                    firebase.initializeApp(this.firebaseConfig);
                }
                this.db = firebase.firestore();
                this.useFallback = false;
                console.log("Firebase Firestore initialized successfully.");
            } catch (err) {
                console.warn("Failed to initialize Firebase. Falling back to LocalStorage:", err);
                this.useFallback = true;
            }
        } else {
            console.log("Using LocalStorage fallback database. Configure Firebase inside script.js for production usage.");
            this.useFallback = true;
            this.initLocalStorageSeed();
        }
    }

    initLocalStorageSeed() {
        if (!localStorage.getItem('fliss_reviews')) {
            const seedReviews = [
                {
                    id: "seed-1",
                    name: "Eleanor Vance",
                    email: "eleanor@example.com",
                    rating: 5,
                    message: "An unforgettable scent that feels incredibly personal. The elegance is unparalleled. It truly transforms my mood every morning.",
                    createdAt: new Date(Date.now() - 3600000 * 24).toISOString() // 1 day ago
                },
                {
                    id: "seed-2",
                    name: "Julian Sterling",
                    email: "julian@example.com",
                    rating: 5,
                    message: "FLISS redefined my signature fragrance. It is crafted to linger all day despite the humid weather. A true luxury experience.",
                    createdAt: new Date(Date.now() - 3600000 * 12).toISOString() // 12 hours ago
                },
                {
                    id: "seed-3",
                    name: "Clara Reed",
                    email: "clara@example.com",
                    rating: 5,
                    message: "Minimal, sophisticated, and deeply evocative. A masterclass in perfumery. The presentation itself feels like a work of art.",
                    createdAt: new Date(Date.now() - 3600000 * 2).toISOString() // 2 hours ago
                }
            ];
            localStorage.setItem('fliss_reviews', JSON.stringify(seedReviews));
        }
    }

    async getReviews() {
        if (!this.useFallback && this.db) {
            try {
                const snapshot = await this.db.collection("reviews")
                    .orderBy("createdAt", "desc")
                    .get();
                return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            } catch (err) {
                console.error("Firestore error, falling back to LocalStorage:", err);
            }
        }
        
        // LocalStorage fallback
        const reviews = JSON.parse(localStorage.getItem('fliss_reviews') || '[]');
        return reviews
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    async addReview(name, email, rating, message) {
        const newReview = {
            name,
            email,
            rating: parseInt(rating),
            message,
            createdAt: !this.useFallback ? firebase.firestore.FieldValue.serverTimestamp() : new Date().toISOString()
        };

        if (!this.useFallback && this.db) {
            try {
                await this.db.collection("reviews").add(newReview);
                return true;
            } catch (err) {
                console.error("Firestore addReview error, falling back to LocalStorage:", err);
            }
        }

        // LocalStorage fallback
        const reviews = JSON.parse(localStorage.getItem('fliss_reviews') || '[]');
        newReview.id = "rev-" + Math.random().toString(36).substr(2, 9);
        reviews.push(newReview);
        localStorage.setItem('fliss_reviews', JSON.stringify(reviews));
        return true;
    }
}

// 4. dynamic Customer Reviews & Testimonials System
const dbController = new DatabaseController();

function initTestimonials() {
    // A. Form Elements & Star Rating Interaction
    const reviewForm = document.getElementById('review-form');
    const reviewSuccess = document.getElementById('review-success');
    const stars = document.querySelectorAll('#star-rating .star');
    const ratingInput = document.getElementById('review-rating');
    const submitBtn = document.getElementById('btn-submit-review');
    const submitText = document.getElementById('submit-text');
    const reviewError = document.getElementById('review-error');

    // Cooldown UI Checker
    function updateCooldownUI() {
        if (!submitBtn || !submitText) return;
        const cooldownEnd = localStorage.getItem('fliss_review_cooldown');
        if (cooldownEnd) {
            const remaining = Math.ceil((parseInt(cooldownEnd) - Date.now()) / 1000);
            if (remaining > 0) {
                submitBtn.disabled = true;
                submitText.textContent = `SUBMIT REVIEW (${remaining}s)`;
                setTimeout(updateCooldownUI, 1000);
                return;
            }
        }
        submitBtn.disabled = false;
        submitText.textContent = "SUBMIT REVIEW";
        localStorage.removeItem('fliss_review_cooldown');
    }

    // Initialize Cooldown Check on load
    updateCooldownUI();

    // Star hover & click interactions
    stars.forEach(star => {
        star.addEventListener('mouseenter', () => {
            const value = parseInt(star.getAttribute('data-value'));
            stars.forEach(s => {
                const sValue = parseInt(s.getAttribute('data-value'));
                if (sValue <= value) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });

        star.addEventListener('mouseleave', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });

        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            ratingInput.value = value;
            stars.forEach(s => {
                const sValue = parseInt(s.getAttribute('data-value'));
                if (sValue <= value) {
                    s.classList.add('selected');
                    s.innerHTML = '&#9733;'; // Filled star
                } else {
                    s.classList.remove('selected');
                    s.innerHTML = '&#9734;'; // Outlined star
                }
            });
        });
    });

    // Form Submission Flow
    if (reviewForm) {
        reviewForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Clear any previous error message
            if (reviewError) {
                reviewError.textContent = '';
                reviewError.classList.add('hidden');
            }

            // Check if submission cooldown is active
            const cooldownEnd = localStorage.getItem('fliss_review_cooldown');
            if (cooldownEnd && parseInt(cooldownEnd) > Date.now()) {
                if (reviewError) {
                    reviewError.textContent = "Please wait before submitting another review.";
                    reviewError.classList.remove('hidden');
                }
                return;
            }

            const name = document.getElementById('review-name').value.trim();
            const email = document.getElementById('review-email').value.trim();
            const rating = ratingInput.value;
            const message = document.getElementById('review-message').value.trim();

            // Form validations
            if (!name || !email || !rating || !message) {
                if (reviewError) {
                    reviewError.textContent = "Please complete all required fields.";
                    reviewError.classList.remove('hidden');
                }
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                if (reviewError) {
                    reviewError.textContent = "Please enter a valid email address.";
                    reviewError.classList.remove('hidden');
                }
                return;
            }

            if (message.length > 300) {
                if (reviewError) {
                    reviewError.textContent = "Review message cannot exceed 300 characters.";
                    reviewError.classList.remove('hidden');
                }
                return;
            }

            // Set loading state
            if (submitBtn) submitBtn.disabled = true;
            if (submitText) submitText.textContent = "Submitting...";

            // Sanitizing Inputs slightly to protect page scripts
            const sanitizedName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            const sanitizedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

            try {
                // Submit to database
                const success = await dbController.addReview(sanitizedName, email, rating, sanitizedMessage);
                if (success) {
                    // Update testimonials list instantly (no page refresh)
                    await loadTestimonials();

                    // Hide form and show success message
                    reviewForm.classList.add('hidden');
                    reviewSuccess.classList.remove('hidden');

                    // Reset form fields
                    reviewForm.reset();
                    ratingInput.value = '';
                    stars.forEach(s => {
                        s.classList.remove('selected');
                        s.innerHTML = '&#9734;';
                    });

                    // Start 30 seconds cooldown
                    localStorage.setItem('fliss_review_cooldown', Date.now() + 30000);
                    updateCooldownUI();

                    // Show success screen briefly, then transition back to review form
                    setTimeout(() => {
                        reviewSuccess.classList.add('hidden');
                        reviewForm.classList.remove('hidden');
                    }, 5000);
                } else {
                    throw new Error("Database save failed");
                }
            } catch (err) {
                console.error(err);
                if (reviewError) {
                    reviewError.textContent = "Something went wrong. Please try again.";
                    reviewError.classList.remove('hidden');
                }
                // Re-enable button on error
                updateCooldownUI();
            }
        });
    }

    // B. Carousel Testimonials Loading & Animating
    const track = document.getElementById('testimonials-track');
    const dotsContainer = document.getElementById('testimonials-dots');
    const prevBtn = document.getElementById('reviews-prev-btn');
    const nextBtn = document.getElementById('reviews-next-btn');

    let currentSlideIndex = 0;
    let dotsCount = 0;
    let autoScrollInterval = null;

    async function loadTestimonials() {
        if (!track) return;
        track.innerHTML = '<div class="loading-reviews">Loading reviews...</div>';

        try {
            const allReviews = await dbController.getReviews();
            track.innerHTML = '';

            if (allReviews.length === 0) {
                track.innerHTML = '<div class="loading-reviews">Be the first to share your experience with FLISS!</div>';
                if (prevBtn) prevBtn.style.display = 'none';
                if (nextBtn) nextBtn.style.display = 'none';
                return;
            }

            // Render cards
            allReviews.forEach(review => {
                const card = document.createElement('div');
                card.className = 'testimonial-card';

                const filledStars = '★'.repeat(review.rating);
                const emptyStars = '☆'.repeat(5 - review.rating);

                card.innerHTML = `
                    <div>
                        <div class="testimonial-stars">${filledStars}${emptyStars}</div>
                        <p class="testimonial-quote">"${review.message}"</p>
                    </div>
                    <p class="testimonial-author">— ${review.name}</p>
                `;
                track.appendChild(card);
            });

            // Initialize carousel layout sizes
            setupCarousel();
        } catch (err) {
            console.error("Error loading testimonials:", err);
            track.innerHTML = '<div class="loading-reviews">Failed to load reviews.</div>';
        }
    }

    function setupCarousel() {
        const cards = track.querySelectorAll('.testimonial-card');
        if (!cards.length) return;

        // Viewport config
        let visibleCards = 3;
        if (window.innerWidth <= 768) {
            visibleCards = 1;
        } else if (window.innerWidth <= 1024) {
            visibleCards = 2;
        }

        // Calculate sliding margins
        dotsCount = Math.max(1, cards.length - visibleCards + 1);
        currentSlideIndex = Math.min(currentSlideIndex, dotsCount - 1);

        // Build dots indicators
        dotsContainer.innerHTML = '';
        if (dotsCount > 1) {
            for (let i = 0; i < dotsCount; i++) {
                const dot = document.createElement('span');
                dot.className = `t-dot ${i === currentSlideIndex ? 'active' : ''}`;
                dot.addEventListener('click', () => {
                    goToSlide(i);
                    startAutoScroll();
                });
                dotsContainer.appendChild(dot);
            }
            if (prevBtn) prevBtn.style.display = 'flex';
            if (nextBtn) nextBtn.style.display = 'flex';
        } else {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
        }

        updateSlidePosition();
        startAutoScroll();
    }

    function goToSlide(index) {
        if (index < 0 || index >= dotsCount) return;
        currentSlideIndex = index;
        
        // Update dots visual state
        const dots = dotsContainer.querySelectorAll('.t-dot');
        dots.forEach((dot, i) => {
            if (i === currentSlideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        updateSlidePosition();
    }

    function updateSlidePosition() {
        const cards = track.querySelectorAll('.testimonial-card');
        if (!cards.length) return;

        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = 30; // standard CSS margin gap
        const offset = currentSlideIndex * (cardWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;

        // Update navigation arrows disabled classes
        if (prevBtn) {
            if (currentSlideIndex === 0) {
                prevBtn.classList.add('disabled');
            } else {
                prevBtn.classList.remove('disabled');
            }
        }
        if (nextBtn) {
            if (currentSlideIndex === dotsCount - 1) {
                nextBtn.classList.add('disabled');
            } else {
                nextBtn.classList.remove('disabled');
            }
        }
    }

    function startAutoScroll() {
        stopAutoScroll();
        if (dotsCount <= 1) return;
        autoScrollInterval = setInterval(() => {
            let nextIndex = currentSlideIndex + 1;
            if (nextIndex >= dotsCount) nextIndex = 0;
            goToSlide(nextIndex);
        }, 5000);
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    // Bind arrows
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToSlide(currentSlideIndex - 1);
            startAutoScroll();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToSlide(currentSlideIndex + 1);
            startAutoScroll();
        });
    }

    // Touch swipe gestures for touch devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (track) {
        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const swipeThreshold = 50; // min distance in px
            if (touchStartX - touchEndX > swipeThreshold) {
                // Swipe Left -> Next Slide
                goToSlide(currentSlideIndex + 1);
                startAutoScroll();
            } else if (touchEndX - touchStartX > swipeThreshold) {
                // Swipe Right -> Previous Slide
                goToSlide(currentSlideIndex - 1);
                startAutoScroll();
            }
        }, { passive: true });
    }

    // Re-initialize carousel sizes on screen resize
    window.addEventListener('resize', () => {
        setupCarousel();
    });

    // Initial reviews load
    loadTestimonials();

    // Export refresher for database changes
    window.refreshTestimonials = loadTestimonials;
}




// 5. Perfume Data & Collection Modal
const perfumesData = {
    "citrus-elixir": {
        name: "CITRUS ELIXIR",
        tagline: "Fresh • Vibrant • Uplifting",
        description: "A sun-drenched breeze captured in a bottle. Citrus Elixir combines the brightness of Italian bergamot and lemon with clean aquatic notes, drying down to a sophisticated cedarwood finish.",
        notes: {
            top: "Bergamot, Lemon",
            heart: "Neroli, Jasmine",
            base: "Musk, Cedarwood"
        },
        ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citral, Geraniol, Citronellol.",
        image: "./citrus.png",
        whatsappMsg: "Hi FLISS, I would like to enquire about Citrus Elixir."
    },
    "white-light": {
        name: "WHITE LIGHT",
        tagline: "Elegant • Delicate • Radiant",
        description: "A delicate dance of white tea and ripe pear under the morning sun. White Light is a pure, minimalist symphony of white rose and magnolia, resting on a bed of creamy sandalwood and warm vanilla.",
        notes: {
            top: "White Tea, Pear",
            heart: "White Rose, Magnolia",
            base: "Sandalwood, Vanilla"
        },
        ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Hexyl Cinnamal, Geraniol, Hydroxycitronellal, Linalool.",
        image: "./floral.png",
        whatsappMsg: "Hi FLISS, I would like to enquire about White Light."
    },
    "woody-oud": {
        name: "WOODY OUD",
        tagline: "Earthy • Warm • Mysterious",
        description: "An intense, smoky journey into the heart of the forest. Woody Oud blends precious agarwood with rich spices like saffron and cardamom, leaving a warm, commanding trail of patchouli and amber.",
        notes: {
            top: "Saffron, Cardamom",
            heart: "Oud, Rose",
            base: "Amber, Patchouli"
        },
        ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Eugenol, Coumarin, Linalool, Benzyl Benzoate, Cinnamal, Limonene.",
        image: "./woody.png",
        whatsappMsg: "Hi FLISS, I would like to enquire about Woody Oud."
    }
};

function initCollection() {
    const cards = document.querySelectorAll('.collection-card');
    const modal = document.getElementById('collection-modal');
    
    if (!cards.length || !modal) return;

    const modalClose = modal.querySelector('.modal-close-btn');
    const modalWrapper = modal.querySelector('.modal-wrapper');
    const modalBuyBtn = document.getElementById('modalBuyBtn');

    // Scroll animation for collection cards
    gsap.from('.collection-card', {
        scrollTrigger: {
            trigger: '.collection-grid',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Scroll animation for the section header
    gsap.from('.collection-section .reveal-text', {
        scrollTrigger: {
            trigger: '.collection-section',
            start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    function openModal(perfumeKey) {
        const data = perfumesData[perfumeKey];
        if (!data) return;

        // Populate modal data
        document.getElementById('modalPerfumeImg').src = data.image;
        document.getElementById('modalPerfumeImg').alt = data.name;
        document.getElementById('modalPerfumeName').textContent = data.name;
        document.getElementById('modalPerfumeTagline').textContent = data.tagline;
        document.getElementById('modalPerfumeDesc').textContent = data.description;
        document.getElementById('modalTopNotes').textContent = data.notes.top;
        document.getElementById('modalHeartNotes').textContent = data.notes.heart;
        document.getElementById('modalBaseNotes').textContent = data.notes.base;
        document.getElementById('modalIngredients').textContent = data.ingredients;

        // Dynamic WhatsApp enquiry link
        const msg = `Hi FLISS Perfumes! 👋\n\nI'm interested in the perfume "${data.name}".\n\nCould you please share the price, fragrance notes, and availability?\n\nThank you!`;
        modalBuyBtn.href = getWhatsAppUrl(msg);

        // Disable body scroll
        document.body.style.overflow = 'hidden';

        // Modal Open Animation
        modal.classList.add('active');
        
        // GSAP animate wrapper elements staggered
        const tl = gsap.timeline();
        tl.fromTo(modalWrapper, 
            { scale: 0.92, opacity: 0 }, 
            { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out' }
        )
        .fromTo([
            '#modalPerfumeImg',
            '#modalPerfumeName',
            '#modalPerfumeTagline',
            '#modalPerfumeDesc',
            '.modal-notes-section',
            '.modal-ingredients-section',
            '#modalBuyBtn'
        ], 
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.35, stagger: 0.06, ease: 'power2.out' },
            '-=0.25'
        );
    }

    function closeModal() {
        // Modal Close Animation
        gsap.to(modalWrapper, {
            scale: 0.92,
            opacity: 0,
            duration: 0.35,
            ease: 'power2.inOut',
            onComplete: () => {
                modal.classList.remove('active');
                // Re-enable body scroll
                document.body.style.overflow = '';
            }
        });
    }

    // Event Listeners
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const perfumeKey = card.getAttribute('data-perfume');
            openModal(perfumeKey);
        });
    });

    modalClose.addEventListener('click', closeModal);
    
    // Close modal on clicking backdrop
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    window.openModal = openModal;
}

// 6. Mobile Hamburger Menu
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', () => {
        const isActive = menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on overlay navigation links
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Scoped generic slider setup
function setupSlider(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const slides = container.querySelectorAll('.showcase-slide');
    const dots = container.querySelectorAll('.showcase-dot');
    const prevBtn = container.querySelector('.showcase-prev-btn');
    const nextBtn = container.querySelector('.showcase-next-btn');
    const ctaBtns = container.querySelectorAll('.showcase-cta-btn');

    if (!slides.length) return;

    let currentSlide = 0;
    let isAnimating = false;

    function goToSlide(index) {
        if (isAnimating || index === currentSlide) return;
        isAnimating = true;

        const prev = slides[currentSlide];
        const next = slides[index];

        // Update dots active class
        dots[currentSlide].classList.remove('active');
        dots[index].classList.add('active');

        // Check if layout is mobile (width <= 768px)
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // Simple display toggle for mobile with quick GSAP fade
            prev.classList.remove('active');
            next.classList.add('active');
            gsap.fromTo(next, { opacity: 0 }, { opacity: 1, duration: 0.5 });
            isAnimating = false;
        } else {
            // Elegant desktop fade and slide transition
            // Animate out previous slide
            gsap.to(prev, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: () => {
                    prev.classList.remove('active');
                    // Reset elements for next time
                    gsap.set(prev.querySelector('.showcase-heading'), { x: -30, opacity: 0 });
                    gsap.set(prev.querySelector('.showcase-tagline'), { x: -20, opacity: 0 });
                    gsap.set(prev.querySelector('.showcase-cta-btn'), { x: -20, opacity: 0 });
                    gsap.set(prev.querySelector('.showcase-image'), { scale: 0.95, opacity: 0 });
                }
            });

            // Position next slide and animate in
            next.classList.add('active');
            gsap.to(next, {
                opacity: 1,
                duration: 0.8,
                ease: 'power2.inOut'
            });

            // Stagger elements in next slide
            const tl = gsap.timeline();
            tl.fromTo(next.querySelector('.showcase-image'), 
                { scale: 0.95, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' },
                0.1
            )
            .fromTo(next.querySelector('.showcase-heading'),
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                0.3
            )
            .fromTo(next.querySelector('.showcase-tagline'),
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
                0.5
            )
            .fromTo(next.querySelector('.showcase-cta-btn'),
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', onComplete: () => { isAnimating = false; } },
                0.6
            );
        }

        currentSlide = index;
    }

    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        goToSlide(next);
    }

    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) prev = slides.length - 1;
        goToSlide(prev);
    }

    // Arrow Button Click Events
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Pagination Dots Click Events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Wire up CTA buttons to open modal directly
    ctaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const slide = btn.closest('.showcase-slide');
            if (slide) {
                const perfumeKey = slide.getAttribute('data-perfume');
                if (typeof window.openModal === 'function') {
                    window.openModal(perfumeKey);
                }
            }
        });
    });
}

// 2.5 Fragrance Showcase Slider
function initShowcaseSlider() {
    setupSlider('#hero-slider');
    setupSlider('#showcase-slider');
}

// ═══════════════════════════════════════════════════════════
// Oil Concentration Section — Scroll Reveal & Video Control
// ═══════════════════════════════════════════════════════════
function initOilConcentration() {
    // --- Scroll-reveal via IntersectionObserver ---
    const revealEls = document.querySelectorAll('.oil-conc-reveal');
    if (revealEls.length) {
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('oil-conc-visible');
                    revealObs.unobserve(entry.target); // animate once
                }
            });
        }, { threshold: 0.15 });

        revealEls.forEach(el => revealObs.observe(el));
    }

    // --- Video: ensure autoplay & pause when off-screen for perf ---
    const video = document.querySelector('.oil-conc-video-wrap video');
    if (video) {
        // Force play (some browsers block autoplay until interaction)
        const tryPlay = () => {
            video.play().catch(() => {});
        };
        tryPlay();
        document.addEventListener('click', tryPlay, { once: true });
        document.addEventListener('touchstart', tryPlay, { once: true });

        // Pause/resume based on viewport visibility
        const vidObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.1 });

        vidObs.observe(video);
    }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initTestimonials();
    initCollection();
    initShowcaseSlider();
    initMobileMenu();
    initWhatsApp();
    initOilConcentration();
});
