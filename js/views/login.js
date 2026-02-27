const LoginView = {
    render() {
        const app = document.getElementById('app');
        app.innerHTML = `
      <div class="auth-layout">
        <div class="auth-card animate-in">
          <div class="auth-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Philippine_National_Police_seal.svg" class="logo-mark" alt="PNP">
            <h1>PNP Clearance System</h1>
            <p>Sign in to your account</p>
          </div>
          
          <form onsubmit="LoginView.submit(event)">
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input type="email" id="email" class="form-control" placeholder="name@example.com" required>
            </div>
            
            <div class="form-group">
              <label class="form-label">Password</label>
              <input type="password" id="password" class="form-control" placeholder="••••••••" required>
            </div>

            <button type="submit" class="btn btn-primary btn-full btn-lg">Sign In</button>
          </form>

          <div class="auth-divider">OR</div>

          <button class="btn btn-secondary btn-full" onclick="Router.navigate('/register')">Create an Account</button>
          
          <div style="text-align:center;margin-top:24px">
            <a href="#" style="font-size:0.75rem;color:var(--text-secondary)" onclick="alert('Please contact support to reset password.')">Forgot password?</a>
          </div>
        </div>
      </div>
    `;
    },

    submit(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const res = UserService.login(email, password);
        if (res.success) {
            Router.navigate('/dashboard');
        } else {
            alert(res.error);
        }
    }
};