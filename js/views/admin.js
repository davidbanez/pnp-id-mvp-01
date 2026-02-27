const AdminView = {
    render() {
        const app = document.getElementById('app');
        const allApps = ApplicationService.getAll();
        const pending = allApps.filter(a => a.status === 'processing' || a.status === 'paid');

        app.innerHTML = `
      <div class="page-header">
        <h1>Admin Console</h1>
        <p>Manage applications and issuances</p>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">📥</div>
          <div class="stat-value">${allApps.length}</div>
          <div class="stat-label">Total Applications</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">⏳</div>
          <div class="stat-value">${pending.length}</div>
          <div class="stat-label">Pending Review</div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">Pending Applications</div>
        ${pending.length === 0 ? `
          <div class="empty-state">
            <p>No pending applications.</p>
          </div>
        ` : `
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Applicant</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${pending.map(a => {
            const user = UserService._getUsers().find(u => u.id === a.user_id);
            const name = user ? `${user.profile.firstName} ${user.profile.lastName}` : 'Unknown';
            return `
                    <tr>
                      <td><span class="mono">${a.reference_number}</span></td>
                      <td>${name}</td>
                      <td><span class="badge">${a.clearance_type}</span></td>
                      <td><span class="badge badge-${a.status}">${a.status}</span></td>
                      <td>
                        <button class="btn btn-sm btn-success" onclick="AdminView.approve('${a.id}')">Approve</button>
                        <button class="btn btn-sm btn-danger" onclick="AdminView.reject('${a.id}')">Reject</button>
                      </td>
                    </tr>
                  `;
        }).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>
    `;
    },

    approve(id) {
        if (confirm('Approve this application?')) {
            ApplicationService.adminUpdateStatus(id, 'approved');
            // Auto-release for demo
            setTimeout(() => {
                ApplicationService.adminUpdateStatus(id, 'released');
                this.render();
            }, 1000);
            this.render();
        }
    },

    reject(id) {
        const reason = prompt('Enter rejection reason:');
        if (reason) {
            ApplicationService.updateStatus(id, 'rejected', reason);
            this.render();
        }
    }
};