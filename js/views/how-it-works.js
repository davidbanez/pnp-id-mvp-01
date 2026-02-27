const HowItWorksView = {
    render() {
        const app = document.getElementById('app');
        // Check if user is logged in to decide layout
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
          <div class="page-header" style="text-align:center;max-width:600px;margin:0 auto 50px">
            <h1>How It Works</h1>
            <p>Get your National Police Clearance in 3 simple steps.</p>
          </div>

          <div style="display:flex;flex-direction:column;gap:60px">
            <!-- Step 1 -->
            <div class="hiw-step-row">
              <div class="hiw-step-number">01</div>
              <div>
                <h3 class="hiw-step-title">Register & Apply Online</h3>
                <p class="hiw-step-desc">
                  Create an account using your email. Fill out the application form with your personal details. 
                  Select your clearance type (Standard or Premium) and purpose.
                </p>
                <div class="hiw-detail-grid">
                  <div class="hiw-detail-card">
                    <div class="hiw-detail-icon">📱</div>
                    <div>
                      <div class="hiw-detail-title">Mobile Friendly</div>
                      <div class="hiw-detail-desc">Apply from any device, anywhere.</div>
                    </div>
                  </div>
                  <div class="hiw-detail-card">
                    <div class="hiw-detail-icon">🔒</div>
                    <div>
                      <div class="hiw-detail-title">Secure Data</div>
                      <div class="hiw-detail-desc">Encrypted personal information.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="hiw-step-row">
              <div class="hiw-step-number hiw-step-number-tinted">02</div>
              <div>
                <h3 class="hiw-step-title">Pay & Verify</h3>
                <p class="hiw-step-desc">
                  Pay the fees securely using GCash, Maya, or Landbank. 
                  <br><br>
                  <strong>For Renewals:</strong> If you have no derogatory record, your clearance is auto-approved instantly.
                  <br>
                  <strong>For New Applicants:</strong> Visit your selected station for biometric capture (photo & fingerprints).
                </p>
                <div class="hiw-timeline">
                  <div class="hiw-timeline-label">Processing Timeline</div>
                  <div class="hiw-timeline-items">
                    <div class="hiw-tl-item">
                      <div class="hiw-tl-dot hiw-tl-green"></div>
                      <div class="hiw-tl-text"><strong>Instant:</strong> Renewal (Clean Record)</div>
                    </div>
                    <div class="hiw-tl-item">
                      <div class="hiw-tl-dot hiw-tl-blue"></div>
                      <div class="hiw-tl-text"><strong>10-15 Mins:</strong> New Application (Walk-in)</div>
                    </div>
                    <div class="hiw-tl-item">
                      <div class="hiw-tl-dot hiw-tl-amber"></div>
                      <div class="hiw-tl-text"><strong>3-5 Days:</strong> Hit / Manual Verification</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="hiw-step-row">
              <div class="hiw-step-number">03</div>
              <div>
                <h3 class="hiw-step-title">Receive Clearance</h3>
                <p class="hiw-step-desc">
                  Download your digital certificate immediately. 
                  If you chose Premium, wait for your physical ID card to be delivered to your doorstep.
                </p>
                <div class="hiw-service-pills">
                  <div class="hiw-pill hiw-pill-featured">Door-to-Door Delivery</div>
                  <div class="hiw-pill">Digital PDF Copy</div>
                  <div class="hiw-pill">QR Verified ID</div>
                </div>
                <div style="margin-top:24px">
                  <button class="btn btn-primary btn-lg" onclick="Router.navigate('/register')">Start Application</button>
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