function validateEmail() {
    // Get the input value
    var emailInput = document.querySelector('.form-control').value;

    // Regular expression for validating "Name@company.com" structure
    var emailPattern = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    // Validate the input against the regex pattern
    if (!emailPattern.test(emailInput)) {
      // If input doesn't match the pattern, show an alert
      alert("Please enter a valid email in the format Name@company.com");
    } else {
      alert("Email is valid!");
    }
  }
  