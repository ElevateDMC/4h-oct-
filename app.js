// List of predefined prizes
const prizes = ["Gift Card", "Headphones", "Notebook", "Water Bottle", "Pen Set"];

// Google Apps Script Web App URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbzkU0wIu9tkdfKNJ_YZ5UHmJq_9kEkCZzJxCmMoaHl0NDfPhZzbSWzYR3SUWc1gt2yN/exec'; // Replace this with your Web App URL

// Listen for form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form inputs
  const name = document.getElementById('name').value;
  const department = document.getElementById('department').value;

  // Randomly select a prize from the prizes array
  const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];

  // Prepare the data to send to Google Sheets
  const data = {
    name: name,
    department: department,
    prize: randomPrize
  };

  // Send the data to Google Sheets via POST request
  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    // Display the prize to the user
    document.getElementById('prizeData').innerText = `Hello, ${name} from ${department}, you won a ${randomPrize}!`;
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
