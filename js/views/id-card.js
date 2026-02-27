const IDCardView = {
    render(params) {
        const app = document.getElementById('app');
        const application = ApplicationService.getById(params.id);

        if (!application) {
            app.innerHTML = '<p>Application not found.</p>';
            return;
        }

        const user = UserService.getCurrentUser(); // Or fetch from app.user_id if admin

        app.innerHTML = `
      <div class="page-header">
        <h1>Digital ID Card</h1>
        <p>Official PNP Clearance ID</p>
      </div>

      <div class="id-card-outer animate-in">
        <div class="id-card-credit">
          <div class="id-card-inner">
            <div class="id-card-left">
              <div class="id-card-photo-box">
                <div class="id-card-photo-placeholder">
                  <div style="font-size:24px">👤</div>
                </div>
              </div>
              <div class="id-card-bio-row">
                <div class="id-card-thumb">👍</div>
                <div class="id-card-sig">
                  ${user.profile.firstName} ${user.profile.lastName}
                </div>
              </div>
            </div>
            
            <div class="id-card-right">
              <div class="id-card-header-strip">
                <div class="id-card-label">
                  PNP Clearance
                  <span>Republic of the Philippines</span>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Philippine_National_Police_seal.svg" style="width:16px;height:16px;opacity:0.8">
              </div>
              
              <div class="id-card-content">
                <div class="id-card-details">
                  <div class="id-card-name">${user.profile.lastName}, ${user.profile.firstName} ${user.profile.middleName || ''}</div>
                  <div class="id-card-address">${user.profile.address || 'Manila, Philippines'}</div>
                  
                  <div class="id-card-grid">
                    <div class="id-card-field-row">
                      <div class="id-card-field-label">DOB</div>
                      <div class="id-card-field-value">${user.profile.birthDate || '01/01/1990'}</div>
                    </div>
                    <div class="id-card-field-row">
                      <div class="id-card-field-label">SEX</div>
                      <div class="id-card-field-value">${user.profile.sex || 'M'}</div>
                    </div>
                    <div class="id-card-field-row">
                      <div class="id-card-field-label">CIVIL STATUS</div>
                      <div class="id-card-field-value">${user.profile.civilStatus || 'Single'}</div>
                    </div>
                    <div class="id-card-field-row">
                      <div class="id-card-field-label">NATIONALITY</div>
                      <div class="id-card-field-value">${user.profile.nationality || 'FILIPINO'}</div>
                    </div>
                  </div>
                </div>

                <div class="id-card-qr-box">
                  <div class="id-card-qr-corner">
                    <div class="id-card-qr-tl"></div>
                    <div class="id-card-qr-tr"></div>
                    <div class="id-card-qr-bl"></div>
                    <div class="id-card-qr-br"></div>
                    <div class="id-card-qr-inner" id="id-card-qr"></div>
                  </div>
                  <div class="id-card-qr-label">SCAN TO VERIFY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="text-align:center;margin-top:24px">
        <button class="btn btn-primary" onclick="window.print()">Print ID Card</button>
        <button class="btn btn-secondary" onclick="PrinterService.printCard({
          name: '${user.profile.firstName} ${user.profile.lastName}',
          reference: '${application.reference_number}',
          issuedAt: '${new Date().toLocaleDateString()}'
        })">Print to PVC Printer</button>
      </div>
    `;

        setTimeout(() => {
            QR.generate('id-card-qr', JSON.stringify({
                ref: application.reference_number,
                name: `${user.profile.firstName} ${user.profile.lastName}`,
                status: 'VALID'
            }), 74);
        }, 100);
    }
};