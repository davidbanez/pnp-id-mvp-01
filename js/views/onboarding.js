const OnboardingView = {
    render() {
        const app = document.getElementById('app');
        const user = UserService.getCurrentUser();

        app.innerHTML = `
      <div class="auth-layout">
        <div class="auth-card animate-in" style="max-width:600px">
          <div class="page-header">
            <h1>Complete Your Profile</h1>
            <p>We need a few more details to verify your identity.</p>
          </div>
          
          <form onsubmit="OnboardingView.submit(event)">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Middle Name</label>
                <input type="text" id="middleName" class="form-control">
              </div>
              <div class="form-group">
                <label class="form-label">Date of Birth</label>
                <input type="date" id="birthDate" class="form-control" required>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Sex</label>
                <select id="sex" class="form-control" required>
                  <option value="">Select...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Civil Status</label>
                <select id="civilStatus" class="form-control" required>
                  <option value="">Select...</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Complete Address</label>
              <textarea id="address" class="form-control" rows="2" required></textarea>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Mobile Number</label>
                <input type="tel" id="mobile" class="form-control" placeholder="0912 345 6789" required>
              </div>
              <div class="form-group">
                <label class="form-label">Nationality</label>
                <input type="text" id="nationality" class="form-control" value="Filipino" required>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-full btn-lg">Save Profile</button>
          </form>
        </div>
      </div>
    `;
    },

    submit(e) {
        e.preventDefault();
        const user = UserService.getCurrentUser();
        const profileData = {
            middleName: document.getElementById('middleName').value,
            birthDate: document.getElementById('birthDate').value,
            sex: document.getElementById('sex').value,
            civilStatus: document.getElementById('civilStatus').value,
            address: document.getElementById('address').value,
            mobile: document.getElementById('mobile').value,
            nationality: document.getElementById('nationality').value,
            onboarded: true
        };

        UserService.updateProfile(user.id, profileData);
        Router.navigate('/dashboard');
    }
};