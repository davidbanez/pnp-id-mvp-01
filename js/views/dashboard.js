// Dashboard View — Light premium design
const DashboardView = {
  render() {
    const user = UserService.getCurrentUser();
    const apps = ApplicationService.getByUser(user.id);
    const name = user.profile?.firstName || user.email.split('@')[0];
    const counts = { processing: 0, paid: 0, approved: 0, released: 0 };
    apps.forEach(a => { if (counts[a.status] !== undefined) counts[a.status]++; });
    const recent = apps.slice(0, 5);

    document.getElementById('app').innerHTML = `
    <div class="layout">
      <div class="main-content animate-in">
        <div class="page-header">
          <h1>Good day, ${Helpers.esc(name)}</h1>
          <p>Here's your Police Clearance application overview.</p>
        </div>

        ${!user.profile?.firstName ? `<div class="alert alert-warning" style="margin-bottom:20px">
          Profile is incomplete.
          <a href="#/profile" style="margin-left:6px;font-weight:500">Complete profile →</a>
        </div>` : ''}

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">▤</div>
            <div class="stat-value">${apps.length}</div>
            <div class="stat-label">Total Applications</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">↻</div>
            <div class="stat-value">${counts.processing + counts.paid}</div>
            <div class="stat-label">In Progress</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">✓</div>
            <div class="stat-value">${counts.approved}</div>
            <div class="stat-label">Approved</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">◈</div>
            <div class="stat-value">${counts.released}</div>
            <div class="stat-label">Released</div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 240px;gap:20px;align-items:start">
          <!-- Recent Applications -->
          <div>
            <div class="section-header">
              <div class="section-title">Recent Applications</div>
              <div style="display:flex;gap:6px">
                <button class="btn btn-ghost btn-sm" onclick="Router.navigate('/applications')">View all</button>
                <button class="btn btn-primary btn-sm" onclick="Router.navigate('/apply')">+ New</button>
              </div>
            </div>
            ${recent.length === 0
        ? `<div class="card"><div class="empty-state">
                  <div class="empty-icon">▤</div>
                  <h3>No applications yet</h3>
                  <p>Apply for your Police Clearance to get started.</p>
                  <button class="btn btn-primary" onclick="Router.navigate('/apply')">Apply Now</button>
                </div></div>`
        : `<div class="table-wrapper"><table>
                  <thead><tr>
                    <th>Reference</th><th>Type</th><th>Status</th><th>Amount</th><th>Date</th><th></th>
                  </tr></thead>
                  <tbody>
                    ${recent.map(a => `<tr>
                      <td><code style="font-size:0.75rem;background:var(--bg-sub);border:1px solid var(--border-hairline);border-radius:4px;padding:1px 5px;color:var(--accent)">${Helpers.esc(a.reference_number)}</code></td>
                      <td style="color:var(--text-secondary);text-transform:capitalize">${a.clearance_type}</td>
                      <td>${Helpers.statusBadge(a.status)}</td>
                      <td style="font-variant-numeric:tabular-nums;font-weight:500;color:var(--text-primary)">${Helpers.formatCurrency(a.pricing?.total_amount)}</td>
                      <td style="color:var(--text-secondary);font-size:0.78rem">${Helpers.formatDate(a.createdAt)}</td>
                      <td style="text-align:right">
                        <button class="btn btn-ghost btn-xs" onclick="Router.navigate('/applications/${a.id}')">View</button>
                      </td>
                    </tr>`).join('')}
                  </tbody>
                </table></div>`
      }
          </div>

          <!-- Quick Actions -->
          <div>
            <div class="section-title" style="margin-bottom:10px">Quick Actions</div>
            ${[
        ['/apply', 'Apply for Clearance', 'Submit a new application'],
        ['/verify', 'Verify an ID', 'Scan or enter a reference'],
        ['/profile', 'Update Profile', 'Keep your details current']
      ].map(([href, title, desc]) => `
              <div class="card" style="cursor:pointer;padding:14px;margin-bottom:8px;transition:box-shadow var(--t)"
                   onclick="Router.navigate('${href}')"
                   onmouseover="this.style.boxShadow='var(--shadow-sm)'"
                   onmouseout="this.style.boxShadow='var(--shadow-xs)'">
                <div style="font-size:0.825rem;font-weight:600;color:var(--text-primary);margin-bottom:2px">${title}</div>
                <div style="font-size:0.75rem;color:var(--text-secondary)">${desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>`;
  }
};