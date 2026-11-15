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
        <li class="has-dropdown">
          <a href="#" class="dropdown-toggle"><span class="lang-en">Farm Setup</span><span class="lang-ta">பண்ணை அமைப்பு</span></a>
          <div class="dropdown-menu">
            <a href="farm-layout.html"><span class="menu-icon">🗺️</span><span><span class="lang-en">Farm layout & planning</span><span class="lang-ta">பண்ணை வடிவமைப்பு & திட்டமிடல்</span></span></a>
            <a href="biogas-slurry.html"><span class="menu-icon">🔥</span><span><span class="lang-en">Biogas & slurry</span><span class="lang-ta">உயிர் வாயு & சாணக் கழிவு</span></span></a>
            <a href="sheds-storage.html"><span class="menu-icon">🏚️</span><span><span class="lang-en">Sheds & storage</span><span class="lang-ta">கொட்டகைகள் & சேமிப்பு</span></span></a>
            <a href="solar-power.html"><span class="menu-icon">☀️</span><span><span class="lang-en">Solar & power</span><span class="lang-ta">சூரிய சக்தி & மின்சாரம்</span></span></a>
          </div>
        </li>
        <li class="has-dropdown">
          <a href="#" class="dropdown-toggle"><span class="lang-en">Crops</span><span class="lang-ta">பயிர்கள்</span></a>
          <div class="dropdown-menu">
            <a href="complete-inputs-guide-new.html"><span class="menu-icon">🌱</span><span><span class="lang-en">Organic paddy inputs</span><span class="lang-ta">இயற்கை நெல் உள்ளீடுகள்</span></span></a>
            <a href="organic-pest-control.html"><span class="menu-icon">🐛</span><span><span class="lang-en">Organic pest control</span><span class="lang-ta">இயற்கை பூச்சி மேலாண்மை</span></span></a>
            <a href="crop-calendar.html"><span class="menu-icon">📅</span><span><span class="lang-en">Crop calendar</span><span class="lang-ta">பயிர் நாட்காட்டி</span></span></a>
            <a href="green-manure-fodder.html"><span class="menu-icon">🌿</span><span><span class="lang-en">Green manure & fodder crops</span><span class="lang-ta">பசுந்தாள் உரம் & தீவனப் பயிர்கள்</span></span></a>
          </div>
        </li>
        <li class="has-dropdown">
          <a href="#" class="dropdown-toggle"><span class="lang-en">Dairy Farm</span><span class="lang-ta">பால் பண்ணை</span></a>
          <div class="dropdown-menu">
            <a href="dairy-herd-breeds.html"><span class="menu-icon">🐮</span><span><span class="lang-en">Herd & breeds</span><span class="lang-ta">மந்தை & இனங்கள்</span></span></a>
            <a href="dairy-feed.html"><span class="menu-icon">🥣</span><span><span class="lang-en">Feed & concentrate</span><span class="lang-ta">தீவனம் & அடர்தீவனம்</span></span></a>
            <a href="dairy-fodder-silage.html"><span class="menu-icon">🌽</span><span><span class="lang-en">Fodder & silage</span><span class="lang-ta">பசுந்தீவனம் & ஊறுகாய்ப்புல்</span></span></a>
            <a href="dairy-health.html"><span class="menu-icon">💉</span><span><span class="lang-en">Health & vaccination</span><span class="lang-ta">நலம் & தடுப்பூசி</span></span></a>
            <a href="dairy-milk-products.html"><span class="menu-icon">🧈</span><span><span class="lang-en">Milk products (micro dairy)</span><span class="lang-ta">பால் பொருட்கள் (சிறு பால்பண்ணை)</span></span></a>
          </div>
        </li>
        <li class="has-dropdown">
          <a href="#" class="dropdown-toggle"><span class="lang-en">Land & Water</span><span class="lang-ta">நிலம் & நீர்</span></a>
          <div class="dropdown-menu">
            <a href="rainwater-harvesting.html"><span class="menu-icon">🌧️</span><span><span class="lang-en">Rainwater harvesting</span><span class="lang-ta">மழைநீர் சேகரிப்பு</span></span></a>
            <a href="well-borewell-recharge.html"><span class="menu-icon">🕳️</span><span><span class="lang-en">Open well & borewell recharge</span><span class="lang-ta">கிணறு & ஆழ்துளைக் கிணறு மீள்நிரப்பு</span></span></a>
            <a href="farm-pond.html"><span class="menu-icon">🏞️</span><span><span class="lang-en">Farm pond</span><span class="lang-ta">பண்ணைக் குட்டை</span></span></a>
            <a href="tree-planting.html"><span class="menu-icon">🌳</span><span><span class="lang-en">Tree planting</span><span class="lang-ta">மரம் நடுதல்</span></span></a>
          </div>
        </li>
        <li><a href="about.html"><span class="lang-en">About</span><span class="lang-ta">பற்றி</span></a></li>
        <li><a href="contact.html"><span class="lang-en">Contact</span><span class="lang-ta">தொடர்பு</span></a></li>
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
        <p class="lang-en">Practical guides for organic crops, dairy, farm setup and water management — from our Villupuram farm.</p>
        <p class="lang-ta">இயற்கை பயிர், பால் பண்ணை, பண்ணை அமைப்பு மற்றும் நீர் மேலாண்மைக்கான நடைமுறை வழிகாட்டிகள் — எங்கள் விழுப்புரம் பண்ணையிலிருந்து.</p>
      </div>
      <div class="footer-col">
        <h4><span class="lang-en">Farm Setup</span><span class="lang-ta">பண்ணை அமைப்பு</span></h4>
        <ul>
          <li><a href="farm-layout.html"><span class="lang-en">Farm layout & planning</span><span class="lang-ta">பண்ணை வடிவமைப்பு & திட்டமிடல்</span></a></li>
          <li><a href="biogas-slurry.html"><span class="lang-en">Biogas & slurry</span><span class="lang-ta">உயிர் வாயு & சாணக் கழிவு</span></a></li>
          <li><a href="sheds-storage.html"><span class="lang-en">Sheds & storage</span><span class="lang-ta">கொட்டகைகள் & சேமிப்பு</span></a></li>
          <li><a href="solar-power.html"><span class="lang-en">Solar & power</span><span class="lang-ta">சூரிய சக்தி & மின்சாரம்</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4><span class="lang-en">Crops</span><span class="lang-ta">பயிர்கள்</span></h4>
        <ul>
          <li><a href="complete-inputs-guide-new.html"><span class="lang-en">Organic paddy inputs</span><span class="lang-ta">இயற்கை நெல் உள்ளீடுகள்</span></a></li>
          <li><a href="organic-pest-control.html"><span class="lang-en">Organic pest control</span><span class="lang-ta">இயற்கை பூச்சி மேலாண்மை</span></a></li>
          <li><a href="crop-calendar.html"><span class="lang-en">Crop calendar</span><span class="lang-ta">பயிர் நாட்காட்டி</span></a></li>
          <li><a href="green-manure-fodder.html"><span class="lang-en">Green manure & fodder crops</span><span class="lang-ta">பசுந்தாள் உரம் & தீவனப் பயிர்கள்</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4><span class="lang-en">Dairy Farm</span><span class="lang-ta">பால் பண்ணை</span></h4>
        <ul>
          <li><a href="dairy-herd-breeds.html"><span class="lang-en">Herd & breeds</span><span class="lang-ta">மந்தை & இனங்கள்</span></a></li>
          <li><a href="dairy-feed.html"><span class="lang-en">Feed & concentrate</span><span class="lang-ta">தீவனம் & அடர்தீவனம்</span></a></li>
          <li><a href="dairy-fodder-silage.html"><span class="lang-en">Fodder & silage</span><span class="lang-ta">பசுந்தீவனம் & ஊறுகாய்ப்புல்</span></a></li>
          <li><a href="dairy-health.html"><span class="lang-en">Health & vaccination</span><span class="lang-ta">நலம் & தடுப்பூசி</span></a></li>
          <li><a href="dairy-milk-products.html"><span class="lang-en">Milk products (micro dairy)</span><span class="lang-ta">பால் பொருட்கள் (சிறு பால்பண்ணை)</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4><span class="lang-en">Land & Water</span><span class="lang-ta">நிலம் & நீர்</span></h4>
        <ul>
          <li><a href="rainwater-harvesting.html"><span class="lang-en">Rainwater harvesting</span><span class="lang-ta">மழைநீர் சேகரிப்பு</span></a></li>
          <li><a href="well-borewell-recharge.html"><span class="lang-en">Open well & borewell recharge</span><span class="lang-ta">கிணறு & ஆழ்துளைக் கிணறு மீள்நிரப்பு</span></a></li>
          <li><a href="farm-pond.html"><span class="lang-en">Farm pond</span><span class="lang-ta">பண்ணைக் குட்டை</span></a></li>
          <li><a href="tree-planting.html"><span class="lang-en">Tree planting</span><span class="lang-ta">மரம் நடுதல்</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4><span class="lang-en">Contact</span><span class="lang-ta">தொடர்பு</span></h4>
        <p style="margin-bottom:8px;">📍 <span class="lang-en">Villupuram, Tamil Nadu</span><span class="lang-ta">விழுப்புரம், தமிழ்நாடு</span></p>
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
