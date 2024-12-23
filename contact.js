// JavaScript for handling form submission
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(contactForm);

    // Send form data to Google Sheets
    fetch(contactForm.action, {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(result => {
        alert('Thank you for your message!');
        contactForm.reset(); // Reset the form fields
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with your submission. Please try again.');
      });
  });
});


