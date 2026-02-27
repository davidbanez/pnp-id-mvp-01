const ServicesView = {
    render() {
        const app = document.getElementById('app');
        // If not logged in, show full layout
        // If logged in, show inside app layout
        const isLoggedIn = UserService.isLoggedIn();

        const content = `
      <div class="${isLoggedIn ? '' : 'lp-root'}">
        ${!isLoggedIn ? `
        <nav class="lp-nav">
          <div class="lp-nav-inner">
            <a onclick="Router.navigate('/')" class="lp-logo" style="cursor:pointer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Philippine_National_Police_seal.svg" class="lp-logo-mark" alt="PNP">
              <div class="lp-logo-name">PNP CLEARANCE</div>
            </a>
            <div class="lp-nav-actions">
              <button class="btn btn-secondary" onclick="Router.navigate('/login')">Sign In</button>
            </div>
          </div>
        </nav>
        ` : ''}

        <div class="${isLoggedIn ? '' : 'lp-container'}" style="${isLoggedIn ? '' : 'padding-top:60px;padding-bottom:60px'}">
          <div class="page-header" style="text-align:center;max-width:600px;margin:0 auto 40px">
            <h1>Services & Fees</h1>
            <p>Transparent pricing for every Filipino.</p>
          </div>

          <div class="lp-pricing-grid">
            <!-- Standard -->
            <div class="lp-price-card">
              <div class="lp-price-badge">Most Common</div>
              <div class="lp-price-amount"><span class="lp-price-accent">₱150</span></div>
              <div class="lp-price-period">per issuance</div>
              <h3 class="card-title">Standard Clearance</h3>
              <ul class="lp-price-list">
                <li>✓ Official Police Clearance Certificate</li>
                <li>✓ Valid for 6 months</li>
                <li>✓ Pickup at any PNP Station</li>
                <li>✓ Biometric capture included</li>
              </ul>
              <button class="btn btn-secondary btn-full" onclick="Router.navigate('/register')">Apply Now</button>
            </div>

            <!-- Premium -->
            <div class="lp-price-card lp-price-featured">
              <div class="lp-price-badge-featured">Recommended</div>
              <div class="lp-price-amount"><span class="lp-price-accent">₱410</span></div>
              <div class="lp-price-period">all-inclusive</div>
              <h3 class="card-title">Premium Delivery</h3>
              <ul class="lp-price-list">
                <li>✓ <strong>Door-to-Door Delivery</strong></li>
                <li>✓ Digital ID Card (QR Verified)</li>
                <li>✓ 2 Printed Copies</li>
                <li>✓ Priority Processing</li>
              </ul>
              <button class="btn btn-primary btn-full" onclick="Router.navigate('/register')">Get Premium</button>
            </div>

            <!-- Renewal -->
            <div class="lp-price-card">
              <div class="lp-price-badge">Fastest</div>
              <div class="lp-price-amount"><span class="lp-price-accent">₱150</span></div>
              <div class="lp-price-period">renewal fee</div>
              <h3 class="card-title">Quick Renewal</h3>
              <ul class="lp-price-list">
                <li>✓ <strong>Instant Release</strong> (No derogatory record)</li>
                <li>✓ No appearance required</li>
                <li>✓ Uses existing biometrics</li>
                <li>✓ Digital copy included</li>
              </ul>
              <button class="btn btn-secondary btn-full" onclick="Router.navigate('/login')">Renew Now</button>
            </div>
          </div>

          <div class="svc-table-wrap">
            <table class="svc-compare-table">
              <thead>
                <tr>
                  <th>Feature Comparison</th>
                  <th>Standard</th>
                  <th class="svc-th-featured">Premium</th>
                  <th>Renewal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Police Clearance Certificate</td>
                  <td><span class="svc-check">✓</span></td>
                  <td class="svc-td-featured"><span class="svc-check">✓</span></td>
                  <td><span class="svc-check">✓</span></td>
                </tr>
                <tr>
                  <td>Validity</td>
                  <td>6 Months</td>
                  <td class="svc-td-featured">6 Months</td>
                  <td>6 Months</td>
                </tr>
                <tr>
                  <td>Appearance</td>
                  <td>Required</td>
                  <td class="svc-td-featured">Required*</td>
                  <td><span class="svc-check">Not Required</span></td>
                </tr>
                <tr>
                  <td>Door-to-Door Delivery</td>
                  <td><span class="svc-cross">✕</span></td>
                  <td class="svc-td-featured"><span class="svc-check">✓</span></td>
                  <td><span class="svc-optional">Optional (+₱260)</span></td>
                </tr>
                <tr>
                  <td>Digital ID Card</td>
                  <td><span class="svc-cross">✕</span></td>
                  <td class="svc-td-featured"><span class="svc-check">✓</span></td>
                  <td><span class="svc-check">✓</span></td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:0.75rem;color:var(--text-secondary);margin-top:12px;text-align:center">
              *Appearance required only for biometric capture if not yet in database.
            </p>
          </div>

          <div style="margin-top:40px;display:flex;justify-content:center">
            <div class="svc-discount-card">
              <div class="svc-discount-icon">🏷</div>
              <div>
                <div class="svc-discount-title">20% Discount Available</div>
                <div class="svc-discount-desc">
                  Senior Citizens and PWDs are entitled to a 20% discount on all fees. 
                  Please present your valid ID upon claiming or delivery.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;

        app.innerHTML = content;
    }
};