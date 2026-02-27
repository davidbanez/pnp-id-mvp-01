const CertificateView = {
    render(params) {
        const app = document.getElementById('app');
        const application = ApplicationService.getById(params.id);

        if (!application) {
            app.innerHTML = '<p>Application not found.</p>';
            return;
        }

        const user = UserService.getCurrentUser();

        app.innerHTML = `
      <div class="page-header no-print">
        <h1>Clearance Certificate</h1>
        <button class="btn btn-primary" onclick="window.print()">Print Certificate</button>
      </div>

      <div class="certificate-wrapper animate-in">
        <div class="cert-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Philippine_National_Police_seal.svg" class="cert-seal" alt="Seal">
          <h2>Republic of the Philippines</h2>
          <h1>National Police Commission</h1>
          <h2>Philippine National Police</h2>
        </div>

        <div class="cert-body">
          <p><strong>TO WHOM IT MAY CONCERN:</strong></p>
          <br>
          <p>THIS IS TO CERTIFY that the person whose name, picture, and right thumbprint appear hereon has requested a RECORD CHECK from this office and the result is listed below:</p>
          
          <div class="cert-name">
            ${user.profile.firstName.toUpperCase()} ${user.profile.middleName ? user.profile.middleName.toUpperCase() + ' ' : ''}${user.profile.lastName.toUpperCase()}
          </div>
          
          <p><strong>FINDINGS:</strong> NO DEROGATORY RECORD ON FILE.</p>
          <br>
          <p>This clearance is issued upon request of the subject person for the purpose of <strong>${application.purpose.toUpperCase()}</strong>.</p>
          <br>
          <p>Issued this <strong>${new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</strong> at Camp Crame, Quezon City, Philippines.</p>
        </div>

        <div class="cert-footer">
          <div class="cert-qr-box">
            <div id="cert-qr"></div>
            <p>${application.reference_number}</p>
          </div>
          <div class="cert-signature" style="text-align:center">
            <div class="sig-line"></div>
            <p>PGEN ROMMEL MARBIL</p>
            <span>Chief, Philippine National Police</span>
          </div>
        </div>
      </div>
    `;

        setTimeout(() => {
            QR.generate('cert-qr', JSON.stringify({
                ref: application.reference_number,
                valid: true
            }), 96);
        }, 100);
    }
};