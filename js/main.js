/**
 * Ayyan Rajapkar — Portfolio Interactive Scripts
 * Lightweight, accessible vanilla JS for navigation, filtering, copy actions, and reveal animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initScrollReveal();
  initProjectFilter();
  initCopyEmail();
});

/**
 * Header scroll shadow & border enhancement
 */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Menu & Drawer
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if (!toggleBtn || !drawer) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';

    const iconMenu = toggleBtn.querySelector('.icon-menu');
    const iconClose = toggleBtn.querySelector('.icon-close');
    if (iconMenu && iconClose) {
      iconMenu.style.display = isOpen ? 'none' : 'block';
      iconClose.style.display = isOpen ? 'block' : 'none';
    }
  };

  toggleBtn.addEventListener('click', () => toggleMenu());

  // Close when clicking links
  drawer.querySelectorAll('.mobile-drawer-link').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });
}

/**
 * IntersectionObserver for subtle scroll-reveal animation
 */
function initScrollReveal() {
  // If user prefers reduced motion, show everything immediately
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = document.querySelectorAll('.reveal');

  if (prefersReduced || !('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * Project Category Filter for projects.html
 */
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-filter');

      // Update active state on buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter projects
      let visibleCount = 0;
      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        const matches = targetCategory === 'all' || categories.includes(targetCategory);

        if (matches) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
          visibleCount++;
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * Copy Email to Clipboard with Accessible Toast
 */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  if (!copyButtons.length) return;

  // Create toast element if not present
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span class="toast-message">Email copied to clipboard!</span>
    `;
    document.body.appendChild(toast);
  }

  let toastTimer;

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'ayyanrajapkar55@gmail.com';

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        // Show toast
        clearTimeout(toastTimer);
        const msgSpan = toast.querySelector('.toast-message');
        if (msgSpan) {
          msgSpan.textContent = `Copied ${email} to clipboard!`;
        }
        toast.classList.add('show');

        toastTimer = setTimeout(() => {
          toast.classList.remove('show');
        }, 3000);
      } catch (err) {
        console.error('Failed to copy email:', err);
        window.location.href = `mailto:${email}`;
      }
    });
  });
}
