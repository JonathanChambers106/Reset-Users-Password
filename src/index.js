const express = require('express');
// Installed npm body-parser as body parser is required
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// 
let users = [
  { id: 1, name: 'Jimmy', email: 'jimmy@example.com', password: 'password123' },
  { id: 2, name: 'Haley', email: 'haley@example.com', password: 'password456' },
];

// This defines the API endpoint for resetting a user's password
app.post('/reset-password', (req, res) => {
  const { userId, newPassword } = req.body;

  // Find the user by ID
  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  // Update the user's password
  user.password = newPassword;
  // Verication for the user's password that can be set as Admin
  res.status(200).json({ message: 'Password reset successful.' });
});

// Finally this will start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

