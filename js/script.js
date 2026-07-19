
    /* ==========================================
       PARTICLE ACCORDING TO USER'S MOTION PREFERENCE
       ========================================== */
    const canvas = document.getElementById('hero-particles');
    const ctx = canvas.getContext('2d');
    
    let particlesArray = [];
    let animationId = null;

    // Check system preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const mouse = {
      x: null,
      y: null,
      radius: 120
    };

    // Track mouse moves on hero section
    const heroSection = document.getElementById('hero');
    heroSection.addEventListener('mousemove', function(event) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    });

    heroSection.addEventListener('mouseleave', function() {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Bounce off canvas edges
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse gravity interaction
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius && mouse.x !== null) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 2;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 2;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 2;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 2;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function initParticles() {
      particlesArray = [];
      // Adjust density based on screen size
      let numberOfParticles = (canvas.width * canvas.height) / 11000;
      if (numberOfParticles > 90) numberOfParticles = 90;

      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2.5) + 1;
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        // Moderate speeds
        let directionX = (Math.random() * 0.8) - 0.4;
        let directionY = (Math.random() * 0.8) - 0.4;
        // Curated dark blue / cyan theme particles
        let color = i % 2 === 0 ? 'rgba(0, 210, 255, 0.25)' : 'rgba(59, 130, 246, 0.2)';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    // Connect particles with thin lines
    function connectParticles() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            opacityValue = 1 - (distance / 110);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacityValue * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connectParticles();
      animationId = requestAnimationFrame(animateParticles);
    }

    function handleResize() {
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
      if (!prefersReducedMotion.matches) {
        initParticles();
      }
    }

    function startAnimation() {
      // Setup canvas sizes
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;

      // Only run visual loop if user does not prefer reduced motion
      if (!prefersReducedMotion.matches) {
        initParticles();
        animateParticles();
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw static subtle starry/node grid once
        initParticles();
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].draw();
        }
        connectParticles();
      }
    }

    // Initialize animation on load
    window.addEventListener('load', startAnimation);
    window.addEventListener('resize', handleResize);

    // Watch for dynamic preference changes on system
    prefersReducedMotion.addEventListener('change', () => {
      if (prefersReducedMotion.matches) {
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        startAnimation();
      } else {
        startAnimation();
      }
    });

    /* ==========================================
       RESPONSIVE MOBILE NAV OVERLAY MENU
       ========================================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    /* ==========================================
       SCROLL EFFECT HEADER & ACTIVE LINKS
       ========================================== */
    const header = document.getElementById('site-header');
    const sections = document.querySelectorAll('section, div[id="journey"]');

    window.addEventListener('scroll', () => {
      // Toggle sticky Header styling
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Sync active state with scroll positions
      let currentSectionId = '';
      sections.forEach(sec => {
        const secTop = sec.offsetTop - 120; // offset header
        const secHeight = sec.offsetHeight;
        if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    });

    /* ==========================================
       ACCORDION CONTROLS (PROJECT DETAILS)
       ========================================== */
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const expanded = header.getAttribute('aria-expanded') === 'true';
        
        header.setAttribute('aria-expanded', !expanded);
        content.classList.toggle('open');
        
        // Dynamic height calculation
        if (content.classList.contains('open')) {
          content.style.maxHeight = content.scrollHeight + "px";
          header.querySelector('i').className = 'fa-solid fa-minus';
        } else {
          content.style.maxHeight = 0;
          header.querySelector('i').className = 'fa-solid fa-plus';
        }
      });
    });

    /* ==========================================
       CAROUSEL / SCREENSHOT GALLERIES
       ========================================== */
    function setupCarousel(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;

      const track = container.querySelector('.carousel-track');
      const prevBtn = container.querySelector('.carousel-btn.prev');
      const nextBtn = container.querySelector('.carousel-btn.next');
      const indicators = container.querySelectorAll('.carousel-indicator');
      const slides = container.querySelectorAll('.carousel-item');
      
      let currentIndex = 0;

      function updateCarousel(index) {
        currentIndex = index;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        if (currentIndex >= slides.length) currentIndex = 0;

        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Sync Indicators
        indicators.forEach((indicator, i) => {
          indicator.classList.toggle('active', i === currentIndex);
        });
        
        container.setAttribute('data-current', currentIndex);
      }

      prevBtn.addEventListener('click', () => {
        updateCarousel(currentIndex - 1);
      });

      nextBtn.addEventListener('click', () => {
        updateCarousel(currentIndex + 1);
      });

      indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
          const index = parseInt(indicator.getAttribute('data-index'));
          updateCarousel(index);
        });
      });
    }

    setupCarousel('carousel-ecommerce');
    setupCarousel('carousel-travel');

    /* ==========================================
       ACCESSIBLE TOAST NOTIFICATION WIDGET (WCAG 2.1 AA)
       ========================================== */
    function triggerToast(type) {
      const container = document.getElementById('toast-container');
      
      const toast = document.createElement('div');
      toast.className = `custom-toast ${type}-toast`;
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      toast.setAttribute('aria-atomic', 'true');
      
      // Toast message parameters
      let icon = 'fa-circle-info';
      let title = 'Thông báo';
      let message = 'Đây là nội dung mô tả của hộp toast notification.';
      
      switch(type) {
        case 'success':
          icon = 'fa-circle-check';
          title = 'Thành công!';
          message = 'Tác vụ đã được AI phân tách độ ưu tiên thành công.';
          break;
        case 'danger':
          icon = 'fa-circle-xmark';
          title = 'Lỗi hệ thống!';
          message = 'Không kết nối được API AI. Đã kích hoạt Fallback Heuristic.';
          break;
        case 'warning':
          icon = 'fa-triangle-exclamation';
          title = 'Cảnh báo!';
          message = 'Dự án Spring Boot chưa có Demo, hãy xem mockup UI ảnh.';
          break;
        case 'info':
          icon = 'fa-circle-info';
          title = 'Thông tin!';
          message = 'Nguyễn Hoàng Việt đang tìm kiếm cơ hội thực tập.';
          break;
      }

      toast.innerHTML = `
        <i class="fa-solid ${icon} toast-icon"></i>
        <div class="toast-content">
          <div class="toast-title">${title}</div>
          <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close-btn" aria-label="Đóng thông báo này" onclick="closeToast(this)">
          <i class="fa-solid fa-xmark"></i>
        </button>
      `;

      // Auto close timer (4.5s matches CSS animation fade out delay)
      container.appendChild(toast);
      
      // Remove element from DOM after fade out completes (4.8s total)
      setTimeout(() => {
        if (toast && toast.parentElement) {
          toast.remove();
        }
      }, 4800);
    }

    function closeToast(buttonElement) {
      const toastElement = buttonElement.closest('.custom-toast');
      if (toastElement) {
        toastElement.style.animation = 'toast-fade-out 0.2s ease forwards';
        setTimeout(() => {
          toastElement.remove();
        }, 200);
      }
    }

    /* ==========================================
       SCROLL REVEAL INTERSECTION OBSERVER
       ========================================== */
    const revealElements = document.querySelectorAll('.fade-in-up');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          // Once displayed, we don't need to observe it again
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05, // trigger when 5% of the element is visible
      rootMargin: "0px 0px -50px 0px" // trigger slightly before entering viewport
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  