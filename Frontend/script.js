// Toggle between Login and Signup UI
const signupLink = document.getElementById("signupLink");
const loginLink = document.getElementById("loginLink");
const signupBox = document.getElementById("signupBox");

if (signupLink) {
  signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".auth-box").classList.add("hidden");
    signupBox.classList.remove("hidden");
  });
}

if (loginLink) {
  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupBox.classList.add("hidden");
    document.querySelector(".auth-box").classList.remove("hidden");
  });
}

// Simple nav highlight logic
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
// Show fake success message on payment
function showSuccess() {
    alert("✅ Payment Successful! Thank you for your support ☕");
    window.location.href = "index.html";
  }
  
  // Redirect from Payment page to Methods page
  const paymentForm = document.querySelector(".payment-box form");
  if (paymentForm) {
    paymentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "methods.html";
    });
  }