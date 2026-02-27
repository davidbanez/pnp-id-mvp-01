const ProfileView = {
    render() {
        const app = document.getElementById('app');
        const user = UserService.getCurrentUser();

        app.innerHTML = `
      <div class="page-header">
        <h1>My Profile</h1>
      </div>

      <div class="card animate-in" style="max-width:600px">
        <form onsubmit="ProfileView.submit(event)">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">First Name</label>
              <input type="text" id="firstName" class="form-control" value="${user.profile.firstName}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Last Name</label>
              <input type="text" id="lastName" class="form-control" value="${user.profile.lastName}" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Middle Name</label>
              <input type="text" id="middleName" class="form-control" value="${user.profile.middleName || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Date of Birth</label>
              <input type="date" id="birthDate" class="form-control" value="${user.profile.birthDate || ''}" required>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Address</label>
            <textarea id="address" class="form-control" rows="2" required>${user.profile.address || ''}</textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Mobile Number</label>
              <input type="tel" id="mobile" class="form-control" value="${user.profile.mobile || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Nationality</label>
              <input type="text" id="nationality" class="form-control" value="${user.profile.nationality || 'Filipino'}" required>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Update Profile</button>
        </form>
      </div>
    `;
    },

    submit(e) {
        e.preventDefault();
        const user = UserService.getCurrentUser();
        const data = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            middleName: document.getElementById('middleName').value,
            birthDate: document.getElementById('birthDate').value,
            address: document.getElementById('address').value,
            mobile: document.getElementById('mobile').value,
            nationality: document.getElementById('nationality').value
        };

        UserService.updateProfile(user.id, data);
        alert('Profile updated successfully.');
    }
};