// FAQs View — Public Page
const FaqsView = {
  render() {
    const categories = [
      {
        label: 'General',
        items: [
          { q: 'Who can apply for a Police Clearance?', a: 'Any Filipino citizen 18 years old and above may apply. Foreign nationals with valid Philippine residency may also apply through this portal.' },
          { q: 'How long is the clearance valid?', a: 'The National Police Clearance Certificate is valid for six (6) months from the date of issuance.' },
          { q: 'Is this an official PNP portal?', a: 'Yes. This is an official digital service of the Philippine National Police for the issuance of National Police Clearance Certificates.' },
          { q: 'Can I use this as a government-issued ID?', a: 'The National Police Clearance Certificate is an official government document issued by the Philippine National Police and is widely accepted as valid identification by government agencies, employers, banks, and institutions.' },
        ]
      },
      {
        label: 'Application & Processing',
        items: [
          { q: 'When do I receive my clearance?', a: 'Standard and Premium applications are processed within 1–3 business days after payment. Renewal applications with no warrant record are approved and released instantly — seconds after payment confirmation.' },
          { q: 'What information do I need to apply?', a: 'You will need your full name, date of birth, place of birth, gender, civil status, nationality, complete address, and a valid mobile number. A valid government-issued ID is also required for identity verification.' },
          { q: 'Can I edit my application after submitting?', a: 'Applications cannot be edited once submitted. If there is an error, contact the PNP support desk for assistance.' },
          { q: 'What happens during admin review?', a: 'For Standard and Premium applications, your details are reviewed by a PNP officer who verifies your identity and checks derogatory records. Renewals bypass this queue and are verified automatically.' },
          { q: 'How do renewal applications work?', a: 'Renewal applications use your existing biometric and warrant record on file. After payment, the system automatically checks for any derogatory record. If none is found, your clearance is approved and released instantly. If a warrant record is found, your application will be denied for manual review.' },
        ]
      },
      {
        label: 'Payment & Pricing',
        items: [
          { q: 'What payment methods are accepted?', a: 'We accept GCash, Maya (formerly PayMaya), and Bank Transfer. All payments are processed securely within the portal.' },
          { q: 'Are there additional fees?', a: 'No. The fees stated — ₱150 for Standard (Base Fee), ₱410 for Premium (₱150 Base + ₱195 Premium + ₱65 Delivery), ₱150 / ₱410 for Renewal — are the complete, all-in amounts. There are no hidden charges or surcharges.' },
          { q: 'Who qualifies for the 20% discount?', a: 'Senior Citizens (60 years old and above) and Persons with Disability (PWD) are entitled to a 20% discount on Standard and Premium processing fees. A valid Senior Citizen ID or PWD ID is required upon claiming the certificate.' },
          { q: 'Can I get a refund?', a: 'Payments are non-refundable once processed. If your application is denied due to a warrant record, no refund will be issued. Please ensure all information is accurate before submitting.' },
        ]
      },
      {
        label: 'Delivery & Certificate',
        items: [
          { q: 'How do I receive my certificate?', a: 'Standard applicants collect their physical certificate at the designated PNP station. Premium applicants receive both a digital certificate and a physical copy delivered to their door. Renewal applicants collect at the station unless they chose the Premium Renewal (door-to-door) option.' },
          { q: 'What is included in the Premium plan?', a: 'The Premium plan (₱410) includes a Certificate Clearance, a Physical Police Clearance ID, a Virtual Police Clearance ID, door-to-door delivery of a physical copy to your address, and priority processing.' },
          { q: 'How does door-to-door delivery work?', a: 'After approval, your physical certificate is dispatched from the nearest PNP station to your registered delivery address. Delivery typically takes 2–3 business days within Metro Manila and 3–5 business days for provincial addresses.' },
          { q: 'What is the digital ID card?', a: 'Your digital ID card is a QR-verified, CR80 credit-card format certificate that you can download, print, or present digitally. Every ID has a unique QR code that institutions can scan to verify authenticity instantly.' },
        ]
      },
      {
        label: 'Security & Privacy',
        items: [
          { q: 'Is my personal data secure?', a: 'Yes. All personal data is encrypted in transit and at rest, and stored in compliance with the Data Privacy Act of 2012 (Republic Act 10173). Your records are accessible only by you and authorised PNP personnel.' },
          { q: 'Who can see my clearance record?', a: 'Only you and authorised PNP personnel have access to your clearance records. Employers and third parties can verify the authenticity of a certificate using the QR code, but cannot access your full record.' },
          { q: 'How do I verify a certificate?', a: 'Any certificate or ID card can be verified using the QR code printed on it, or by entering the reference number at our Verify portal. The system will confirm whether the certificate is valid and authentic.' },
        ]
      },
    ];

    document.getElementById('app').innerHTML = `
    <div class="lp-root">
      <!-- NAV -->
      <header class="lp-nav">
        <div class="lp-nav-inner">
          <div class="lp-logo" onclick="Router.navigate('/landing')" style="cursor:pointer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Philippine_National_Police_seal.svg" class="lp-logo-mark" alt="PNP Logo">
            <div>
              <div class="lp-logo-name">PNP Clearance</div>
              <div class="lp-logo-sub">Republic of the Philippines</div>
            </div>
          </div>
          <nav class="lp-links">
            <a href="#" onclick="Router.navigate('/how-it-works'); return false;">How it works</a>
            <a href="#" onclick="Router.navigate('/services'); return false;">Services</a>
            <a href="#" onclick="Router.navigate('/faqs'); return false;">FAQs</a>
          </nav>
          <div class="lp-nav-actions">
            <button class="theme-toggle" onclick="ThemeService.toggle()" aria-label="Toggle theme"></button>
            <button class="btn btn-secondary btn-sm" onclick="Router.navigate('/login')">Sign In</button>
            <button class="btn btn-primary btn-sm" onclick="Router.navigate('/register')">Get Started</button>
          </div>
        </div>
      </header>

      <!-- PAGE HERO -->
      <section class="lp-section" style="padding-top:80px;padding-bottom:60px;border-bottom:1px solid var(--border-hairline)">
        <div class="lp-container" style="text-align:center;max-width:640px;margin:0 auto">
          <div class="lp-section-label">FAQs</div>
          <h1 class="lp-section-heading" style="font-size:2.6rem">Common questions</h1>
          <p class="lp-section-sub" style="max-width:480px;margin:0 auto">
            Everything you need to know before applying for your National Police Clearance Certificate.
          </p>
        </div>
      </section>

      <!-- FAQ CATEGORIES -->
      <section class="lp-section">
        <div class="lp-container" style="max-width:860px">
          ${categories.map((cat, ci) => `
            <div class="faq-category">
              <div class="faq-category-label">${cat.label}</div>
              <div class="lp-faqs">
                ${cat.items.map((f, i) => {
      const id = `faq-${ci}-${i}`;
      return `
                  <div class="lp-faq-item" id="${id}">
                    <button class="lp-faq-q" onclick="FaqsView.toggle('${id}')">
                      ${f.q}
                      <span class="lp-faq-icon" id="${id}-icon">+</span>
                    </button>
                    <div class="lp-faq-a" id="${id}-ans" style="display:none">${f.a}</div>
                  </div>`;
    }).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- STILL HAVE QUESTIONS -->
      <section class="lp-section lp-section-tinted">
        <div class="lp-container" style="text-align:center;max-width:560px;margin:0 auto">
          <div class="lp-section-label">Support</div>
          <h2 class="lp-section-heading" style="font-size:1.8rem">Still have questions?</h2>
          <p class="lp-section-sub">Can't find what you're looking for? Reach out to the PNP support desk directly.</p>
          <div style="display:flex;gap:12px;justify-content:center;margin-top:24px">
            <button class="btn btn-secondary" onclick="Router.navigate('/how-it-works')">See How It Works</button>
            <button class="btn btn-primary" onclick="Router.navigate('/register')">Apply Now →</button>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="lp-cta">
        <div class="lp-container lp-cta-inner">
          <div>
            <h2 class="lp-cta-heading">Ready to apply?</h2>
            <p class="lp-cta-sub">Create your free account and get your clearance certificate today.</p>
          </div>
          <div style="display:flex;gap:10px;flex-shrink:0">
            <button class="btn btn-secondary lp-btn-hero" onclick="Router.navigate('/login')">Sign In</button>
            <button class="btn lp-cta-btn" onclick="Router.navigate('/register')">Create Account →</button>
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="lp-footer">
        <div class="lp-container lp-footer-inner">
          <div>
            <div class="lp-logo" style="margin-bottom:8px">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Philippine_National_Police_seal.svg" class="lp-logo-mark" style="width:24px;height:24px;" alt="PNP Logo">
              <div>
                <div class="lp-logo-name" style="font-size:0.8rem">PNP Clearance System</div>
                <div class="lp-logo-sub">Republic of the Philippines</div>
              </div>
            </div>
            <p style="font-size:0.75rem;color:var(--text-secondary);max-width:260px;line-height:1.6">
              Official digital portal for National Police Clearance Certificate applications.
            </p>
          </div>
          <div style="display:flex;gap:48px;flex-wrap:wrap">
            <div>
              <div class="lp-footer-heading">Platform</div>
              <a class="lp-footer-link" href="#" onclick="Router.navigate('/register')">Apply for Clearance</a>
              <a class="lp-footer-link" href="#" onclick="Router.navigate('/verify')">Verify a Certificate</a>
              <a class="lp-footer-link" href="#" onclick="Router.navigate('/login')">Sign In</a>
            </div>
            <div>
              <div class="lp-footer-heading">Support</div>
              <a class="lp-footer-link" href="#" onclick="Router.navigate('/faqs')">FAQs</a>
              <a class="lp-footer-link" href="#">Contact PNP</a>
              <a class="lp-footer-link" href="#">Data Privacy</a>
            </div>
          </div>
        </div>
        <div class="lp-footer-bottom">
          <div class="lp-container" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
            <span>© 2026 Philippine National Police · All rights reserved.</span>
            <span>For official use only · Unauthorized access is prohibited.</span>
          </div>
        </div>
      </footer>
    </div>`;
  },

  toggle(id) {
    const ans = document.getElementById(`${id}-ans`);
    const icon = document.getElementById(`${id}-icon`);
    const open = ans.style.display === 'block';
    // Close all
    document.querySelectorAll('[id$="-ans"]').forEach(el => el.style.display = 'none');
    document.querySelectorAll('[id$="-icon"]').forEach(el => el.textContent = '+');
    if (!open) { ans.style.display = 'block'; icon.textContent = '−'; }
  }
};