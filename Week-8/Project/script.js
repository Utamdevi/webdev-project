

// Newsletter Subscription Function
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();
    
    if (!email) {
        showAlert('Please enter your email address.', 'danger');
        return;
    }
    
    if (!validateEmail(email)) {
        showAlert('Please enter a valid email address.', 'danger');
        return;
    }
    
    // In a real application, you would send this to a server
    showAlert(Thank you for subscribing with ${email}! You'll hear from us soon., 'success');
    emailInput.value = ''; // Clear the input
    
    // Save to localStorage
    saveSubscription(email);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showAlert(message, type = 'info') {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = alert alert-${type} alert-dismissible fade show;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert at the top of the page
    document.body.insertBefore(alertDiv, document.body.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentElement) {
            alertDiv.remove();
        }
    }, 5000);
}

function saveSubscription(email) {
    let subscriptions = JSON.parse(localStorage.getItem('techzoneSubscriptions') || '[]');
    subscriptions.push({
        email: email,
        date: new Date().toISOString()
    });
    localStorage.setItem('techzoneSubscriptions', JSON.stringify(subscriptions));
}

// Initialize tooltips
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});