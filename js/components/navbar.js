// Navbar Component
const Navbar = {
    render() {
        const user = UserService.getCurrentUser();
        const isAdmin = user && user.role === 'admin';
        const sidebar = document.getElementById('sidebar');

        sidebar.innerHTML = `
      <div class="sidebar-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Philippine_National_Police_seal.svg" class="sidebar-logo-mark" alt="PNP">
        <div class="sidebar-brand">
          <h2>PNP CLEARANCE</h2>
          <p>National Police Commission</p>
        </div>
      </div>
      
      <div class="sidebar-user">
        <div class="user-avatar">${user ? (user.profile.firstName[0] + user.profile.lastName[0]) : 'G'}</div>
        <div class="user-info">
          <h4>${user ? `${user.profile.firstName} ${user.profile.lastName}` : 'Guest'}</h4>
          <p>${isAdmin ? 'Administrator' : 'Applicant'}</p>
        </div>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-section-label">Main Menu</div>
        
        ${!isAdmin ? `
        <div class="nav-item" data-href="/dashboard" onclick="Router.navigate('/dashboard')">
          <span class="nav-icon">⊞</span> Dashboard
        </div>
        <div class="nav-item" data-href="/apply" onclick="Router.navigate('/apply')">
          <span class="nav-icon">✎</span> Apply for Clearance
        </div>
        <div class="nav-item" data-href="/applications" onclick="Router.navigate('/applications')">
          <span class="nav-icon">❏</span> My Applications
        </div>
        <div class="nav-item" data-href="/profile" onclick="Router.navigate('/profile')">
          <span class="nav-icon">👤</span> My Profile
        </div>
        ` : `
        <div class="nav-item" data-href="/admin" onclick="Router.navigate('/admin')">
          <span class="nav-icon">🛡</span> Admin Panel
        </div>
        `}

        <div class="nav-section-label">Services</div>
        <div class="nav-item" data-href="/verify" onclick="Router.navigate('/verify')">
          <span class="nav-icon">🔍</span> Verify QR
        </div>
        
        <div class="nav-section-label">Settings</div>
        <div class="nav-item" onclick="ThemeService.toggle()">
          <span class="nav-icon theme-toggle">☾</span> Dark Mode
        </div>
      </nav>

      <div class="sidebar-footer">
        <div class="btn-logout" onclick="Navbar.logout()">
          <span class="nav-icon">←</span> Sign Out
        </div>
      </div>
    `;

        // Update theme icon
        ThemeService.updateToggleIcon();
        // Update active state
        Router._updateNav(Router.currentPath);
    },

    toggleMobile() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    },

    logout() {
        if (confirm('Are you sure you want to sign out?')) {
            UserService.logout();
            Router.navigate('/login');
        }
    }
};