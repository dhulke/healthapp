const express = require('express');
const app = express();
const port = 3000; // Specify the port number you want to use

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World3!');
});

app.get('/health', (req, res) => {
    res.send('Healthy!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});