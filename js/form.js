
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactform');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const number = document.getElementById('number').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Basic validation
      if (!firstName || !lastName || !email || !number || !message) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Email format check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Phone number check (basic, 10 digits)
      if (number.length < 10 || isNaN(number)) {
        alert('Please enter a valid phone number.');
        return;
      }
  
      alert('Form submitted successfully!');
      form.reset();
    });
  });
  