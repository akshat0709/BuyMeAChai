// ---------------------------
// LOGIN / SIGNUP TOGGLE
// ---------------------------
const signupLink = document.getElementById("signupLink");
const loginLink = document.getElementById("loginLink");
const signupBox = document.getElementById("signupBox");
const loginBox = document.getElementById("loginBox");

if (signupLink) {
  signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginBox.classList.add("hidden");
    signupBox.classList.remove("hidden");
  });
}

if (loginLink) {
  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
   signupBox.classList.add("hidden");
    loginBox.classList.remove("hidden");
  });
}

// ---------------------------
// LOGIN FORM HANDLER
// ---------------------------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Detect Creator / Supporter from URL
    const params = new URLSearchParams(window.location.search);
    const userType = params.get("type"); // creator or supporter

    // Save role so dashboard can verify access
    sessionStorage.setItem("role", userType);

    // Redirect according to role
    if (userType === "creator") {
      window.location.href = "creator-dashboard.html";
    } else {
      window.location.href = "supporter-home.html";
    }
  });
}

// ---------------------------
// NAV ACTIVE HIGHLIGHT
// ---------------------------
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// ---------------------------
// PAYMENT SUCCESS
// ---------------------------
function showSuccess() {
  alert("✅ Payment Successful! Thank you for your support ☕");
  window.location.href = "index.html";
}

// ---------------------------
// PAYMENT PAGE REDIRECT
// ---------------------------
const paymentForm = document.querySelector(".payment-box form");

if (paymentForm) {
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "methods.html";
  });
}
