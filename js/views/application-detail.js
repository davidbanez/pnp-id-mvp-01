const ApplicationDetailView = {
    render(params) {
        const app = document.getElementById('app');
        const application = ApplicationService.getById(params.id);

        if (!application) {
            app.innerHTML = '<p>Application not found.</p>';
            return;
        }

        const isReleased = application.status === 'released';
        const isPaid = application.status === 'paid' || application.status === 'processing' || isReleased;

        app.innerHTML = `
      <div class="page-header-row">
        <div>
          <h1>Application Details</h1>
          <p>Ref: <span class="mono">${application.reference_number}</span></p>
        </div>
        <div>
          ${application.status === 'draft' ? `<button class="btn btn-primary" onclick="Router.navigate('/payment/${application.id}')">Pay Now</button>` : ''}
          ${isReleased ? `
            <button class="btn btn-secondary" onclick="Router.navigate('/id-card/${application.id}')">View ID</button>
            <button class="btn btn-primary" onclick="Router.navigate('/certificate/${application.id}')">View Certificate</button>
          ` : ''}
        </div>
      </div>

      <div class="progress-steps">
        <div class="step ${isPaid ? 'done' : 'active'}">
          <div class="step-circle">${isPaid ? '✓' : '1'}</div>
          <div class="step-label">Payment</div>
        </div>
        <div class="step-line"></div>
        <div class="step ${application.status === 'processing' ? 'active' : (isReleased || application.status === 'approved' ? 'done' : '')}">
          <div class="step-circle">${isReleased || application.status === 'approved' ? '✓' : '2'}</div>
          <div class="step-label">Processing</div>
        </div>
        <div class="step-line"></div>
        <div class="step ${isReleased ? 'done' : (application.status === 'approved' ? 'active' : '')}">
          <div class="step-circle">${isReleased ? '✓' : '3'}</div>
          <div class="step-label">Release</div>
        </div>
      </div>

      <div class="card animate-in">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Status</label>
            <div><span class="badge badge-${application.status}">${application.status}</span></div>
          </div>
          <div class="form-group">
            <label class="form-label">Clearance Type</label>
            <div>${application.clearance_type.toUpperCase()}</div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Purpose</label>
            <div>${application.purpose}</div>
          </div>
          <div class="form-group">
            <label class="form-label">Date Applied</label>
            <div>${Helpers.formatDateTime(application.createdAt)}</div>
          </div>
        </div>

        ${application.payment ? `
        <div class="divider"></div>
        <div class="form-group">
          <label class="form-label">Payment Details</label>
          <div class="text-secondary text-sm">
            Method: ${application.payment.method}<br>
            Amount: ${Helpers.formatCurrency(application.payment.amount)}<br>
            Paid: ${Helpers.formatDateTime(application.payment.paidAt)}<br>
            TXN: <span class="mono">${application.payment.transactionId}</span>
          </div>
        </div>
        ` : ''}
      </div>

      ${application.history ? `
      <div class="card mt-3">
        <h3 class="card-title">History</h3>
        <div class="text-sm text-secondary">
          ${application.history.map(h => `
            <div style="margin-bottom:8px;border-left:2px solid var(--border-hairline);padding-left:12px">
              <div style="font-weight:600">${h.status.toUpperCase()}</div>
              <div style="font-size:0.72rem">${Helpers.formatDateTime(h.timestamp)}</div>
              <div>${h.note}</div>
            </div>
          `).join('')}
        </div>
      </div>
      ` : ''}
    `;
    }
};