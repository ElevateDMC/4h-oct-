// List of predefined prizes
const prizes = ["Gift Card", "Headphones", "Notebook", "Water Bottle", "Pen Set"];

// Listen for form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form inputs
  const name = document.getElementById('name').value;
  const department = document.getElementById('department').value;

  // Randomly select a prize from the prizes array
  const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];

  // Display the selected prize
  document.getElementById('prizeData').innerText = `Hello, ${name} from ${department}, you won a ${randomPrize}!`;

  // Log or store the data (for now, just log it to the console)
  console.log({ name, department, prize: randomPrize });
});
