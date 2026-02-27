const RegisterView = {
    render() {
        const app = document.getElementById('app');
        app.innerHTML = `
      <div class="auth-layout">
        <div class="auth-card animate-in">
          <div class="auth-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Philippine_National_Police_seal.svg" class="logo-mark" alt="PNP">
            <h1>Create Account</h1>
            <p>Start your application today</p>
          </div>
          
          <form onsubmit="RegisterView.submit(event)">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">First Name</label>
                <input type="text" id="firstName" class="form-control" required>
              </div>
              <div class="form-group">
                <label class="form-label">Last Name</label>
                <input type="text" id="lastName" class="form-control" required>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input type="email" id="email" class="form-control" required>
            </div>
            
            <div class="form-group">
              <label class="form-label">Password</label>
              <input type="password" id="password" class="form-control" minlength="6" required>
              <p class="form-hint">Must be at least 6 characters</p>
            </div>

            <button type="submit" class="btn btn-primary btn-full btn-lg">Create Account</button>
          </form>

          <div class="auth-divider">ALREADY HAVE AN ACCOUNT?</div>

          <button class="btn btn-secondary btn-full" onclick="Router.navigate('/login')">Sign In</button>
        </div>
      </div>
    `;
    },

    submit(e) {
        e.preventDefault();
        const data = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            profile: {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value
            }
        };

        const res = UserService.register(data);
        if (res.success) {
            Router.navigate('/onboarding');
        } else {
            alert(res.error);
        }
    }
};