// Listen for form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way
  
  // Get the value from the form input
  const name = document.getElementById('name').value;
  
  // Display the result in the "formData" div
  document.getElementById('formData').innerText = `Hello, ${name}!`;
});
