// Shared Header and Footer Template
const headerTemplate = `
<!-- HEADER -->
<header class="site-header">
  <div class="container">
    <nav class="navbar">
      <a href="index.html" class="logo">
        <span class="logo-icon">🌿</span>
        GreenRoots
      </a>
      <ul class="nav-links">
        <li><a href="index.html"><span class="lang-en">Home</span><span class="lang-ta">முகப்பு</span></a></li>
        <li><a href="about.html"><span class="lang-en">About</span><span class="lang-ta">பற்றி</span></a></li>
        <li><a href="products.html"><span class="lang-en">Products</span><span class="lang-ta">பொருட்கள்</span></a></li>
        <li class="has-dropdown">
          <a href="#" class="dropdown-toggle">
            <span class="lang-en">Information</span>
            <span class="lang-ta">தகவல்கள்</span>
          </a>
          <div class="dropdown-menu">
            <a href="organic-pest-control.html">
              <span class="menu-icon">🐛</span>
              <span><span class="lang-en">Organic Pest Control</span><span class="lang-ta">இயற்கை பூச்சி மேலாண்மை</span></span>
            </a>
            <a href="complete-inputs-guide-new.html">
              <span class="menu-icon">🌾</span>
              <span><span class="lang-en">Complete Organic Inputs</span><span class="lang-ta">முழு இயற்கை உள்ளீடுகள்</span></span>
            </a>
          </div>
        </li>
        <li><a href="blog.html"><span class="lang-en">Blog</span><span class="lang-ta">கட்டுரைகள்</span></a></li>
        <li><a href="contact.html"><span class="lang-en">Contact</span><span class="lang-ta">தொடர்பு</span></a></li>
        <li><a href="products.html" class="nav-cta"><span class="lang-en">Shop Now</span><span class="lang-ta">வாங்குங்கள்</span></a></li>
        <li class="lang-toggle">
          <button class="lang-btn active" data-lang="en">EN</button>
          <button class="lang-btn" data-lang="ta">தமிழ்</button>
        </li>
      </ul>
      <button class="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </div>
</header>
`;

const footerTemplate = `
<!-- FOOTER -->
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo" style="display:flex; align-items:center; gap:8px; margin-bottom:16px;">
          <span style="font-size:2rem;">🌿</span>
          <h3 style="color:white; font-size:1.5rem; margin:0;">GreenRoots</h3>
        </div>
        <p class="lang-en">Certified organic farm growing fresh, healthy produce using sustainable methods.</p>
        <p class="lang-ta">நிலையான முறைகளைப் பயன்படுத்தி புதிய, ஆரோக்கியமான பொருட்களை வளர்க்கும் சான்றளிக்கப்பட்ட இயற்கை பண்ணை.</p>
      </div>
      <div class="footer-col">
        <h4><span class="lang-en">Quick Links</span><span class="lang-ta">விரைவு இணைப்புகள்</span></h4>
        <ul>
          <li><a href="index.html"><span class="lang-en">Home</span><span class="lang-ta">முகப்பு</span></a></li>
          <li><a href="about.html"><span class="lang-en">About Us</span><span class="lang-ta">எங்களைப் பற்றி</span></a></li>
          <li><a href="products.html"><span class="lang-en">Products</span><span class="lang-ta">பொருட்கள்</span></a></li>
          <li><a href="blog.html"><span class="lang-en">Blog</span><span class="lang-ta">கட்டுரைகள்</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4><span class="lang-en">Information</span><span class="lang-ta">தகவல்கள்</span></h4>
        <ul>
          <li><a href="organic-pest-control.html"><span class="lang-en">Pest Control</span><span class="lang-ta">பூச்சி கட்டுப்பாடு</span></a></li>
          <li><a href="complete-inputs-guide-new.html"><span class="lang-en">Organic Inputs</span><span class="lang-ta">இயற்கை உள்ளீடுகள்</span></a></li>
          <li><a href="contact.html"><span class="lang-en">Contact</span><span class="lang-ta">தொடர்பு</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4><span class="lang-en">Contact</span><span class="lang-ta">தொடர்பு</span></h4>
        <p style="margin-bottom:8px;">📍 <span class="lang-en">Villupuram, Tamil Nadu</span><span class="lang-ta">விள்ளுப்புரம், தமிழ்நாடு</span></p>
        <p style="margin-bottom:8px;">📞 +91 98765 43210</p>
        <p>✉️ info@greenroots.farm</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 <span class="lang-en">GreenRoots Organic Farm. All rights reserved.</span><span class="lang-ta">ஜிரீன்ரூட்ஸ் இயற்கை பண்ணை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.</span></p>
    </div>
  </div>
</footer>
`;

// Function to inject header
function loadHeader() {
  const headerElement = document.createElement('div');
  headerElement.innerHTML = headerTemplate;
  document.body.insertBefore(headerElement.firstElementChild, document.body.firstChild);
  initializeHeaderEvents();
}

// Function to inject footer
function loadFooter() {
  const footerElement = document.createElement('div');
  footerElement.innerHTML = footerTemplate;
  document.body.appendChild(footerElement.firstElementChild);
}

// Initialize header events (language toggle, dropdowns, hamburger menu)
function initializeHeaderEvents() {
  const langBtns = document.querySelectorAll('.lang-btn');

  // Restore language preference on page load
  function restoreLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    langBtns.forEach(btn => {
      if (btn.dataset.lang === savedLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    if (savedLang === 'ta') {
      document.body.classList.add('tamil');
    } else {
      document.body.classList.remove('tamil');
    }
  }

  // Initialize language on load
  restoreLanguage();

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      localStorage.setItem('preferredLanguage', lang);
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
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
  loadFooter();
});
