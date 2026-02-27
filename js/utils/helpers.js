// Helper functions
const Helpers = {
    genId(prefix = 'id') {
        return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
    },

    genReference() {
        // Format: PNP-YYYY-XXXX-XXXX
        const year = new Date().getFullYear();
        const rand = () => Math.floor(1000 + Math.random() * 9000);
        return `PNP-${year}-${rand()}-${rand()}`;
    },

    formatCurrency(amount) {
        return '₱' + parseFloat(amount).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },

    formatDate(isoString) {
        if (!isoString) return '—';
        return new Date(isoString).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    },

    formatDateTime(isoString) {
        if (!isoString) return '—';
        return new Date(isoString).toLocaleString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });
    },

    // Simple hash for demo (not secure for prod)
    hashPassword(pwd) {
        let hash = 0;
        for (let i = 0; i < pwd.length; i++) {
            const char = pwd.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(16);
    },

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};