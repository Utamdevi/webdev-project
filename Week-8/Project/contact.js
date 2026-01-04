// contact.js - Contact Form Validation

document.addEventListener("DOMContentLoaded", function () {
  const supportForm = document.getElementById("supportForm");
  const alertContainer = document.getElementById("alertContainer");

  // Form validation function
  function validateForm() {
    let isValid = true;

    // Reset all error states
    document
      .querySelectorAll(".is-invalid")
      .forEach((el) => el.classList.remove("is-invalid"));
    document
      .querySelectorAll(".invalid-feedback")
      .forEach((el) => (el.style.display = "none"));

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate Name
    if (!name) {
      document.getElementById("name").classList.add("is-invalid");
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    }

    // Validate Email
    if (!email || !email.includes("@")) {
      document.getElementById("email").classList.add("is-invalid");
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    // Validate Message
    if (message.length < 10) {
      document.getElementById("message").classList.add("is-invalid");
      document.getElementById("messageError").style.display = "block";
      isValid = false;
    }

    return isValid;
  }

  // Show alert function
  function showFormAlert(message, type) {
    alertContainer.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;

    // Auto remove after 5 seconds
    setTimeout(() => {
      const alert = document.querySelector(".alert");
      if (alert) {
        alert.remove();
      }
    }, 5000);
  }

  // Form submit handler
  supportForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateForm()) {
      showFormAlert("Please correct the errors in the form.", "danger");
      return;
    }

    // Get form data
    const formData = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      orderId: document.getElementById("orderId").value.trim(),
      issueType: document.getElementById("issueType").value,
      message: document.getElementById("message").value.trim(),
      submittedAt: new Date().toISOString(),
    };

    // In a real application, you would send this to a server
    // For now, we'll save to localStorage and show success message

    // Save to localStorage
    saveSupportTicket(formData);

    // Show success message
    showFormAlert(
      "Support ticket submitted successfully! We will contact you within 24 hours.",
      "success"
    );

    // Reset form
    supportForm.reset();

    // Scroll to top of form
    supportForm.scrollIntoView({ behavior: "smooth" });
  });

  // Save support ticket to localStorage
  function saveSupportTicket(ticket) {
    let tickets = JSON.parse(
      localStorage.getItem("techzoneSupportTickets") || "[]"
    );
    tickets.push(ticket);
    localStorage.setItem("techzoneSupportTickets", JSON.stringify(tickets));
  }

  // Real-time validation
  document.getElementById("message").addEventListener("input", function () {
    const message = this.value.trim();
    if (message.length >= 10) {
      this.classList.remove("is-invalid");
      document.getElementById("messageError").style.display = "none";
    }
  });

  document.getElementById("name").addEventListener("input", function () {
    if (this.value.trim()) {
      this.classList.remove("is-invalid");
      document.getElementById("nameError").style.display = "none";
    }
  });

  document.getElementById("email").addEventListener("input", function () {
    const email = this.value.trim();
    if (email && email.includes("@")) {
      this.classList.remove("is-invalid");
      document.getElementById("emailError").style.display = "none";
    }
  });
});
