const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve React frontend from client/build
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Example API route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API works!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
