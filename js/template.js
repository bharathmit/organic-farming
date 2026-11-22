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
            <a href="rainwater-harvesting.html"><span class="menu-icon">🌧️</span><span><span class="lang-en">Rainwater harvesting</span><span class="lang-ta">மழைநீர் சேகரிப்பு</span></span></a>
            <a href="well-borewell-recharge.html"><span class="menu-icon">🕳️</span><span><span class="lang-en">Open well & borewell recharge</span><span class="lang-ta">கிணறு & ஆழ்துளைக் கிணறு மீள்நிரப்பு</span></span></a>
            <a href="farm-pond.html"><span class="menu-icon">🏞️</span><span><span class="lang-en">Farm pond</span><span class="lang-ta">பண்ணைக் குட்டை</span></span></a>
            <a href="tree-planting.html"><span class="menu-icon">🌳</span><span><span class="lang-en">Tree planting</span><span class="lang-ta">மரம் நடுதல்</span></span></a>
          </div>
        </li>
        <li class="has-dropdown">
          <a href="#" class="dropdown-toggle"><span class="lang-en">Organic Conversion</span><span class="lang-ta">இயற்கைக்கு மாற்றம்</span></a>
          <div class="dropdown-menu">
            <a href="conversion-roadmap.html"><span class="menu-icon">🧭</span><span><span class="lang-en">Conversion roadmap (3 years)</span><span class="lang-ta">மாற்றத் திட்டம் (3 ஆண்டுகள்)</span></span></a>
            <a href="soil-health-recovery.html"><span class="menu-icon">🧪</span><span><span class="lang-en">Soil testing & soil health recovery</span><span class="lang-ta">மண் பரிசோதனை & மண் வள மீட்பு</span></span></a>
            <a href="chemical-to-organic-inputs.html"><span class="menu-icon">♻️</span><span><span class="lang-en">Replacing chemical fertilizers & pesticides</span><span class="lang-ta">ரசாயன உரம் & பூச்சிக்கொல்லி மாற்றீடு</span></span></a>
            <a href="transition-economics.html"><span class="menu-icon">📉</span><span><span class="lang-en">Yield & income during transition</span><span class="lang-ta">மாற்றக் காலத்தில் மகசூல் & வருமானம்</span></span></a>
            <a href="organic-certification.html"><span class="menu-icon">📜</span><span><span class="lang-en">Organic certification (NPOP / PGS-India)</span><span class="lang-ta">இயற்கைச் சான்றிதழ் (NPOP / PGS-India)</span></span></a>
            <a href="organic-schemes.html"><span class="menu-icon">🏛️</span><span><span class="lang-en">Government schemes & subsidies</span><span class="lang-ta">அரசுத் திட்டங்கள் & மானியங்கள்</span></span></a>
          </div>
        </li>
        <li class="has-dropdown">
          <a href="#" class="dropdown-toggle"><span class="lang-en">Organic Fertiliser</span><span class="lang-ta">இயற்கை உரம்</span></a>
          <div class="dropdown-menu">
            <a href="organic-fertilizer.html"><span class="menu-icon">📘</span><span><span class="lang-en">Overview: organic vs chemical</span><span class="lang-ta">கண்ணோட்டம்: இயற்கை vs ரசாயனம்</span></span></a>
            <a href="fertilizer-green-manure.html"><span class="menu-icon">🌿</span><span><span class="lang-en">Green manure</span><span class="lang-ta">பசுந்தாள் உரம்</span></span></a>
            <a href="fertilizer-animal-manure.html"><span class="menu-icon">🐄</span><span><span class="lang-en">Animal manure & byproducts</span><span class="lang-ta">கால்நடை எரு & துணைப் பொருட்கள்</span></span></a>
            <a href="fertilizer-compost-vermicompost.html"><span class="menu-icon">🪱</span><span><span class="lang-en">Compost & vermicompost</span><span class="lang-ta">மட்கு உரம் & மண்புழு உரம்</span></span></a>
            <a href="fertilizer-mineral.html"><span class="menu-icon">🪨</span><span><span class="lang-en">Mineral-based fertilizers</span><span class="lang-ta">கனிம அடிப்படை உரங்கள்</span></span></a>
            <a href="fertilizer-biofertilizers.html"><span class="menu-icon">🦠</span><span><span class="lang-en">Biofertilizers</span><span class="lang-ta">உயிர் உரங்கள்</span></span></a>
          </div>
        </li>
        <li class="has-dropdown">
          <a href="#" class="dropdown-toggle"><span class="lang-en">Organic Inputs Guide</span><span class="lang-ta">இயற்கை உள்ளீடு வழிகாட்டி</span></a>
          <div class="dropdown-menu">
            <a href="complete-inputs-guide-new.html"><span class="menu-icon">🌱</span><span><span class="lang-en">Organic fertiliser &amp; pest inputs</span><span class="lang-ta">இயற்கை உரம் &amp; பூச்சி கட்டுப்பாட்டு உள்ளீடுகள்</span></span></a>
            <a href="organic-pest-control.html"><span class="menu-icon">🐛</span><span><span class="lang-en">Organic pest control</span><span class="lang-ta">இயற்கை பூச்சி மேலாண்மை</span></span></a>
          </div>
        </li>
        <li class="has-dropdown">
          <a href="#" class="dropdown-toggle"><span class="lang-en">Crop Season Plans</span><span class="lang-ta">பயிர் பருவத் திட்டங்கள்</span></a>
          <div class="dropdown-menu">
            <a href="paddy-crop-plan.html"><span class="menu-icon">🌾</span><span><span class="lang-en">Paddy season plan (stage-wise)</span><span class="lang-ta">நெல் பருவத் திட்டம் (நிலை வாரியாக)</span></span></a>
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
            <a href="biogas-slurry.html"><span class="menu-icon">🔥</span><span><span class="lang-en">Biogas & slurry</span><span class="lang-ta">உயிர் வாயு & சாணக் கழிவு</span></span></a>
            <a href="sheds-storage.html"><span class="menu-icon">🏚️</span><span><span class="lang-en">Sheds & storage</span><span class="lang-ta">கொட்டகைகள் & சேமிப்பு</span></span></a>
            <a href="solar-power.html"><span class="menu-icon">☀️</span><span><span class="lang-en">Solar & power</span><span class="lang-ta">சூரிய சக்தி & மின்சாரம்</span></span></a>
          </div>
        </li>
        <li><a href="about.html"><span class="lang-en">About</span><span class="lang-ta">பற்றி</span></a></li>
        <li><a href="contact.html"><span class="lang-en">Contact</span><span class="lang-ta">தொடர்பு</span></a></li>
      </ul>
      <div class="lang-toggle">
        <button class="lang-btn active" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="ta">தமிழ்</button>
      </div>
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
    <div class="footer-bottom">
      <p>&copy; 2026 <span class="lang-en">Integrated Organic Farm Guide. All rights reserved.</span><span class="lang-ta">ஒருங்கிணைந்த இயற்கை பண்ணை வழிகாட்டி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.</span></p>
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
  document.querySelectorAll('.nav-links a:not(.dropdown-toggle)').forEach(link => {
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
