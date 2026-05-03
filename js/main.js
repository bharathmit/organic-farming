// Language toggle
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (lang === 'ta') {
      document.body.classList.add('tamil');
    } else {
      document.body.classList.remove('tamil');
    }
  });
});

// Dropdown toggle (for mobile tap + desktop hover fallback)
document.querySelectorAll('.has-dropdown').forEach(item => {
  const toggle = item.querySelector('.dropdown-toggle');
  if (toggle) {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle('open');
      }
    });
  }
});

// Close dropdowns when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.has-dropdown')) {
    document.querySelectorAll('.has-dropdown.open').forEach(d => d.classList.remove('open'));
  }
});

// Navbar toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    navLinks?.classList.remove('open');
  });
});

// Active nav link based on current page
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// Sticky header shadow
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (header) {
    header.style.boxShadow = window.scrollY > 10
      ? '0 2px 20px rgba(0,0,0,0.12)'
      : '0 2px 12px rgba(0,0,0,0.08)';
  }
});

// Toast notification
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Add to Cart
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', function () {
    const name = this.closest('.card').querySelector('h3')?.textContent || 'Item';
    showToast(`✅ ${name} added to cart!`);
    this.textContent = '✓ Added!';
    setTimeout(() => (this.textContent = '🛒 Add to Cart'), 2000);
  });
});

// Product filter
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.dataset.filter;
    productCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const successMsg = document.getElementById('successMsg');
    if (successMsg) successMsg.style.display = 'block';
    this.reset();
    setTimeout(() => (successMsg.style.display = 'none'), 5000);
  });
}

// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    showToast('🌿 Thanks for subscribing!');
    this.reset();
  });
}

// Scroll reveal animation
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll('.card, .feature-card, .team-card, .testimonial-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease';
  observer.observe(el);
});

// Counter animation for stats
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.textContent.replace(/\D/g, ''));
    const suffix = el.textContent.replace(/[\d]/g, '');
    if (!target) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      el.textContent = start + suffix;
      if (start >= target) clearInterval(timer);
    }, 20);
  });
}

const statsBar = document.querySelector('.stats-bar');
if (statsBar) {
  const statsObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      statsObserver.disconnect();
    }
  }, { threshold: 0.5 });
  statsObserver.observe(statsBar);
}
