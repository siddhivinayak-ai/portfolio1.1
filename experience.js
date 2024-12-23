
  // Get modal elements
  const modal = document.getElementById('certificateModal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.getElementById('closeModal');

  // Add event listener to all certificate images
  document.querySelectorAll('.certificate-preview').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImage.src = img.src; // Set modal image to clicked image
    });
  });

  // Close modal when the close button is clicked
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside the image
  window.addEventListener('click', event => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

