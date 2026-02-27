const ApplicationsView = {
    render() {
        const app = document.getElementById('app');
        const user = UserService.getCurrentUser();
        const apps = ApplicationService.getByUser(user.id);

        app.innerHTML = `
      <div class="page-header">
        <h1>My Applications</h1>
      </div>

      ${apps.length === 0 ? `
        <div class="empty-state">
          <div class="empty-icon">📂</div>
          <h3>No applications yet</h3>
          <p>Apply for a police clearance to see your records here.</p>
          <button class="btn btn-primary" onclick="Router.navigate('/apply')">Apply Now</button>
        </div>
      ` : `
        <div class="card">
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${apps.map(a => `
                  <tr onclick="Router.navigate('/applications/${a.id}')" style="cursor:pointer">
                    <td><span class="mono">${a.reference_number}</span></td>
                    <td>${Helpers.formatDate(a.createdAt)}</td>
                    <td>${a.clearance_type}</td>
                    <td><span class="badge badge-${a.status}">${a.status}</span></td>
                    <td><span class="text-secondary">View &rarr;</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `}
    `;
    }
};