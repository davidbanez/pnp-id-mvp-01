const LandingView = {
    render() {
        const app = document.getElementById('app');
        // Hide sidebar in landing
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.style.display = 'none';

        app.innerHTML = `
      <div class="lp-root">
        <!-- NAV -->
        <nav class="lp-nav">
          <div class="lp-nav-inner">
            <a href="#" class="lp-logo" onclick="Router.navigate('/')">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Philippine_National_Police_seal.svg" class="lp-logo-mark" alt="PNP">
              <div>
                <div class="lp-logo-name">PNP CLEARANCE</div>
                <div class="lp-logo-sub">Online Application System</div>
              </div>
            </a>

            <div class="lp-links">
              <a onclick="Router.navigate('/how-it-works')">How It Works</a>
              <a onclick="Router.navigate('/services')">Services & Fees</a>
              <a onclick="Router.navigate('/faqs')">FAQs</a>
              <a onclick="Router.navigate('/verify')">Verify QR</a>
            </div>

            <div class="lp-nav-actions">
              <button class="btn btn-ghost" onclick="Router.navigate('/login')">Log In</button>
              <button class="btn btn-primary" onclick="Router.navigate('/register')">Register</button>
            </div>
          </div>
        </nav>

        <!-- HERO -->
        <section class="lp-hero">
          <div class="lp-container">
            <div class="lp-hero-eyebrow">
              <span class="lp-dot-green lp-meta-dot"></span> Official Portal
            </div>
            <h1 class="lp-hero-heading">
              Secure. Fast.<br>
              <span class="lp-hero-accent">Paperless.</span>
            </h1>
            <p class="lp-hero-sub">
              Apply for your National Police Clearance from anywhere. 
              Enjoy door-to-door delivery, real-time tracking, and digital verification.
            </p>

            <div class="lp-hero-actions">
              <button class="btn btn-primary lp-btn-hero" onclick="Router.navigate('/register')">Apply Now</button>
              <button class="btn btn-secondary lp-btn-hero" onclick="Router.navigate('/how-it-works')">Learn More</button>
            </div>

            <div class="lp-hero-meta">
              <div class="lp-meta-item">
                <span class="lp-meta-dot lp-dot-green"></span> System Online
              </div>
              <div class="lp-meta-item">
                <span>•</span> 24/7 Processing
              </div>
            </div>
          </div>

          <!-- Floating Cards (Desktop) -->
          <div class="lp-hero-cards">
            <div class="lp-float-card">
              <div class="lp-fc-icon lp-fc-green">✓</div>
              <div>
                <div class="lp-fc-title">Clearance Approved</div>
                <div class="lp-fc-sub">Ref: PNP-2024-8392</div>
              </div>
            </div>
            <div class="lp-float-card lp-fc-2">
              <div class="lp-fc-icon lp-fc-blue">🚚</div>
              <div>
                <div class="lp-fc-title">Out for Delivery</div>
                <div class="lp-fc-sub">Arriving by 2:00 PM</div>
              </div>
            </div>
            <div class="lp-float-card lp-fc-3">
              <div class="lp-fc-icon lp-fc-amber">🔍</div>
              <div>
                <div class="lp-fc-title">Record Verified</div>
                <div class="lp-fc-sub">No derogatory record found</div>
              </div>
            </div>
          </div>
        </section>

        <!-- TRUST STRIP -->
        <div class="lp-trust">
          <div class="lp-container lp-trust-inner">
            <span class="lp-trust-label">Trusted By</span>
            <span class="lp-trust-item">Dept. of Interior & Local Gov</span>
            <span class="lp-trust-item">National Police Commission</span>
            <span class="lp-trust-item">Landbank</span>
            <span class="lp-trust-item">GCash</span>
          </div>
        </div>

        <!-- FEATURES -->
        <section class="lp-section">
          <div class="lp-container">
            <div class="lp-section-label">Features</div>
            <h2 class="lp-section-heading">Modernizing Public Service</h2>
            <p class="lp-section-sub">We've streamlined the process to respect your time.</p>

            <div class="lp-features-grid">
              <div class="lp-feature-card">
                <div class="lp-feature-icon">🚀</div>
                <h3 class="lp-feature-title">Fast Track</h3>
                <p class="lp-feature-desc">Get cleared in minutes, not days. Our automated warrant check system speeds up verification.</p>
              </div>
              <div class="lp-feature-card">
                <div class="lp-feature-icon">📱</div>
                <h3 class="lp-feature-title">Mobile Ready</h3>
                <p class="lp-feature-desc">Access your digital ID anytime. Download offline copies for immediate use.</p>
              </div>
              <div class="lp-feature-card">
                <div class="lp-feature-icon">🔒</div>
                <h3 class="lp-feature-title">Secure QR</h3>
                <p class="lp-feature-desc">Every clearance comes with a cryptographically signed QR code for instant validity checking.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- STATS -->
        <section class="lp-stats">
          <div class="lp-container">
            <div class="lp-stats-grid">
              <div>
                <div class="lp-stat-value">2.5M+</div>
                <div class="lp-stat-label">Clearances Issued</div>
              </div>
              <div>
                <div class="lp-stat-value">99.9%</div>
                <div class="lp-stat-label">Uptime</div>
              </div>
              <div>
                <div class="lp-stat-value">15m</div>
                <div class="lp-stat-label">Avg. Processing</div>
              </div>
              <div>
                <div class="lp-stat-value">100%</div>
                <div class="lp-stat-label">Paperless</div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="lp-cta">
          <div class="lp-container lp-cta-inner">
            <div>
              <h2 class="lp-cta-heading">Ready to apply?</h2>
              <p class="lp-cta-sub">Create an account to start your application today.</p>
            </div>
            <button class="lp-cta-btn" onclick="Router.navigate('/register')">Create Account</button>
          </div>
        </section>

        <!-- FOOTER -->
        <footer class="lp-footer">
          <div class="lp-container">
            <div class="lp-footer-inner">
              <div style="max-width:240px">
                <div class="lp-logo" style="margin-bottom:12px">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Philippine_National_Police_seal.svg" class="lp-logo-mark" alt="PNP">
                  <div class="lp-logo-name">PNP CLEARANCE</div>
                </div>
                <p style="font-size:0.75rem;color:var(--text-secondary);line-height:1.5">
                  The official online platform for National Police Clearance applications.
                </p>
              </div>
              <div>
                <div class="lp-footer-heading">Services</div>
                <a class="lp-footer-link" onclick="Router.navigate('/register')">New Application</a>
                <a class="lp-footer-link" onclick="Router.navigate('/login')">Renewal</a>
                <a class="lp-footer-link" onclick="Router.navigate('/verify')">Verification</a>
              </div>
              <div>
                <div class="lp-footer-heading">Support</div>
                <a class="lp-footer-link" onclick="Router.navigate('/faqs')">Help Center</a>
                <a class="lp-footer-link" onclick="Router.navigate('/how-it-works')">Guide</a>
                <a class="lp-footer-link">Contact Us</a>
              </div>
              <div>
                <div class="lp-footer-heading">Legal</div>
                <a class="lp-footer-link">Privacy Policy</a>
                <a class="lp-footer-link">Terms of Service</a>
                <a class="lp-footer-link">Data Privacy</a>
              </div>
            </div>
            <div class="lp-footer-bottom">
              &copy; 2024 Philippine National Police. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    `;
    }
};