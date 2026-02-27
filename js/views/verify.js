const VerifyView = {
    _stream: null,

    render() {
        const app = document.getElementById('app');
        app.innerHTML = `
      <div class="page-header">
        <h1>Verify Clearance</h1>
        <p>Scan QR code or enter reference number</p>
      </div>

      <div class="card animate-in" style="max-width:500px;margin:0 auto;text-align:center">
        <div class="verify-scanner">
          <video id="qr-video" playsinline></video>
          <div class="scanner-corner tl"></div>
          <div class="scanner-corner tr"></div>
          <div class="scanner-corner bl"></div>
          <div class="scanner-corner br"></div>
          <div class="scan-line"></div>
          <div style="position:absolute;bottom:10px;left:0;right:0;color:white;font-size:0.75rem;opacity:0.8">
            Position QR code within frame
          </div>
        </div>

        <button class="btn btn-secondary" onclick="VerifyView.startCamera()" id="btn-cam">
          Start Camera
        </button>

        <div class="divider">OR</div>

        <div class="form-group">
          <label class="form-label">Reference Number</label>
          <div class="input-group">
            <input type="text" id="refInput" class="form-control" placeholder="PNP-2024-XXXX-XXXX">
            <button class="btn btn-primary" style="position:absolute;right:4px;top:4px;bottom:4px" onclick="VerifyView.check()">
              Verify
            </button>
          </div>
        </div>

        <div id="verify-result" style="margin-top:20px;display:none"></div>
      </div>
    `;
    },

    async startCamera() {
        try {
            const video = document.getElementById('qr-video');
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
            video.srcObject = stream;
            video.play();
            this._stream = stream;
            document.getElementById('btn-cam').style.display = 'none';

            // Mock scanning logic
            setTimeout(() => {
                this.stopCamera();
                document.getElementById('refInput').value = 'PNP-2024-8392-1029';
                this.check();
            }, 3000);
        } catch (e) {
            alert('Camera access denied or not available.');
        }
    },

    stopCamera() {
        if (this._stream) {
            this._stream.getTracks().forEach(t => t.stop());
            this._stream = null;
        }
    },

    destroy() {
        this.stopCamera();
    },

    check() {
        const ref = document.getElementById('refInput').value;
        const resEl = document.getElementById('verify-result');

        resEl.style.display = 'block';
        resEl.innerHTML = '<div class="spinner"></div>';

        // Mock API check
        setTimeout(() => {
            const isValid = ref.length > 10 && !ref.includes('0000');
            if (isValid) {
                resEl.className = 'verify-result cleared animate-in';
                resEl.innerHTML = `
          <div class="verify-status-icon">✓</div>
          <h2>CLEARED</h2>
          <p class="text-secondary">Certificate is Valid & Authentic</p>
          <div style="margin-top:12px;font-size:0.85rem">
            <strong>Ref:</strong> <span class="mono">${ref}</span><br>
            <strong>Issued:</strong> ${new Date().toLocaleDateString()}
          </div>
        `;
            } else {
                resEl.className = 'verify-result hit animate-in';
                resEl.innerHTML = `
          <div class="verify-status-icon">⚠</div>
          <h2>INVALID</h2>
          <p class="text-secondary">Record not found or expired</p>
        `;
            }
        }, 1500);
    }
};