const ApplyView = {
    render() {
        const app = document.getElementById('app');
        const user = UserService.getCurrentUser();

        // Check if profile complete
        if (!user.profile.onboarded) {
            Router.navigate('/onboarding');
            return;
        }

        app.innerHTML = `
      <div class="page-header">
        <h1>New Application</h1>
        <p>Apply for a National Police Clearance</p>
      </div>

      <div class="card animate-in" style="max-width:600px;margin:0 auto">
        <form onsubmit="ApplyView.submit(event)">
          <div class="form-group">
            <label class="form-label">Purpose of Clearance</label>
            <select id="purpose" class="form-control" required>
              <option value="Employment">Employment</option>
              <option value="Travel">Travel Abroad</option>
              <option value="Firearms">Firearms License</option>
              <option value="Naturalization">Naturalization</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Clearance Type</label>
            <div class="option-cards">
              <label class="option-card selected">
                <input type="radio" name="ctype" value="standard" checked onchange="ApplyView.selectType(this)">
                <div class="option-card-header">
                  <span class="option-card-title">Standard (Pickup)</span>
                  <span class="option-card-price">₱150</span>
                </div>
                <div class="option-card-desc">Personal appearance required for biometric capture.</div>
              </label>

              <label class="option-card">
                <input type="radio" name="ctype" value="premium" onchange="ApplyView.selectType(this)">
                <div class="option-card-header">
                  <span class="option-card-title">Premium (Door-to-Door)</span>
                  <span class="option-card-price">₱410</span>
                </div>
                <div class="option-card-desc">Includes delivery. Only for renewal or valid existing biometrics.</div>
              </label>
            </div>
          </div>

          <div id="delivery-details" style="display:none" class="animate-in">
            <div class="form-group">
              <label class="form-label">Delivery Address</label>
              <textarea id="deliveryAddress" class="form-control" rows="2">${user.profile.address || ''}</textarea>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Discounts</label>
            <div class="checkbox-group">
              <input type="checkbox" id="chk-senior">
              <span>Senior Citizen (20% Off)</span>
            </div>
            <div class="checkbox-group">
              <input type="checkbox" id="chk-pwd">
              <span>PWD (20% Off)</span>
            </div>
          </div>

          <div class="divider"></div>

          <button type="submit" class="btn btn-primary btn-full btn-lg">Proceed to Payment</button>
        </form>
      </div>
    `;
    },

    selectType(el) {
        document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
        el.closest('.option-card').classList.add('selected');

        const delivery = document.getElementById('delivery-details');
        if (el.value === 'premium') {
            delivery.style.display = 'block';
        } else {
            delivery.style.display = 'none';
        }
    },

    submit(e) {
        e.preventDefault();
        const user = UserService.getCurrentUser();
        const type = document.querySelector('input[name="ctype"]:checked').value;
        const purpose = document.getElementById('purpose').value;
        const discounts = {
            senior: document.getElementById('chk-senior').checked,
            pwd: document.getElementById('chk-pwd').checked
        };
        const deliveryAddress = document.getElementById('deliveryAddress') ? document.getElementById('deliveryAddress').value : '';

        const appData = {
            clearance_type: type,
            purpose,
            discounts,
            delivery_address: deliveryAddress,
            applicant_snapshot: {
                fullName: `${user.profile.firstName} ${user.profile.lastName}`,
                ...user.profile
            }
        };

        const res = ApplicationService.create(appData, user.id);
        if (res.success) {
            Router.navigate(`/payment/${res.application.id}`);
        }
    }
};