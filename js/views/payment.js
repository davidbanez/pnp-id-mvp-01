const PaymentView = {
    render(params) {
        const app = document.getElementById('app');
        const application = ApplicationService.getById(params.id);

        if (!application) {
            app.innerHTML = '<p>Application not found.</p>';
            return;
        }

        const pricing = application.pricing;

        app.innerHTML = `
      <div class="page-header">
        <h1>Payment</h1>
        <p>Reference No: <span class="mono">${application.reference_number}</span></p>
      </div>

      <div class="card animate-in" style="max-width:500px;margin:0 auto">
        <h3 class="card-title">Order Summary</h3>
        
        <div class="pricing-summary">
          <div class="pricing-row">
            <span class="label">Clearance Fee</span>
            <span class="value">${Helpers.formatCurrency(pricing.standard_fee)}</span>
          </div>
          ${pricing.premium_fee > 0 ? `
          <div class="pricing-row">
            <span class="label">Convenience Fee</span>
            <span class="value">${Helpers.formatCurrency(pricing.premium_fee)}</span>
          </div>
          ` : ''}
          ${pricing.delivery_fee > 0 ? `
          <div class="pricing-row">
            <span class="label">Delivery Fee</span>
            <span class="value">${Helpers.formatCurrency(pricing.delivery_fee)}</span>
          </div>
          ` : ''}
          ${pricing.discount_amount > 0 ? `
          <div class="pricing-row discount">
            <span class="label">Discount (${pricing.discount_applied})</span>
            <span class="value">-${Helpers.formatCurrency(pricing.discount_amount)}</span>
          </div>
          ` : ''}
          <div class="pricing-row total">
            <span class="label">TOTAL</span>
            <span class="value">${Helpers.formatCurrency(pricing.total_amount)}</span>
          </div>
        </div>

        <div class="divider"></div>

        <h3 class="card-title">Select Payment Method</h3>
        <div class="payment-methods">
          <div class="payment-method-card selected" onclick="PaymentView.selectMethod(this, 'GCash')">
            <div class="pm-icon">💳</div>
            <div class="pm-name">GCash</div>
          </div>
          <div class="payment-method-card" onclick="PaymentView.selectMethod(this, 'Landbank')">
            <div class="pm-icon">🏛</div>
            <div class="pm-name">Landbank</div>
          </div>
          <div class="payment-method-card" onclick="PaymentView.selectMethod(this, 'Maya')">
            <div class="pm-icon">📱</div>
            <div class="pm-name">Maya</div>
          </div>
        </div>

        <button class="btn btn-primary btn-full btn-lg" onclick="PaymentView.pay('${application.id}')">
          Pay ${Helpers.formatCurrency(pricing.total_amount)}
        </button>
      </div>
    `;
    },

    selectMethod(el, method) {
        document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
        this.selectedMethod = method;
    },

    selectedMethod: 'GCash',

    pay(appId) {
        if (confirm(`Confirm payment using ${this.selectedMethod}?`)) {
            ApplicationService.recordPayment(appId, { method: this.selectedMethod });
            alert('Payment Successful!');
            Router.navigate(`/applications/${appId}`);
        }
    }
};