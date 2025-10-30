// // server.js

// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Serve React frontend from client/build
// app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

// // Example API route
// app.get('/api/test', (req, res) => {
//   res.json({ message: 'API works!' });
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// server.js (Runs from the root directory, contains main server logic)

 const express = require('express');
const path = require('path');
const app = express();
// Import the 'cors' package, as it is listed in your package.json dependencies
const cors = require('cors');

// Render automatically sets process.env.PORT to 10000. 
// We use this variable to ensure correct binding.
const PORT = process.env.PORT || 5000; 

// Middleware and Configuration
app.use(express.json()); // Allows parsing JSON bodies
app.use(cors()); // Enable CORS for all routes

// IMPORTANT PATH FIX: 
// Since server.js is in the root directory, we join __dirname directly with 
// 'client' and 'build' to get the correct path: /client/build
const CLIENT_BUILD_PATH = path.join(__dirname, 'client', 'build');


// --- API Routes ---
// Define all your API endpoints here, BEFORE the static file serving.

// Example API route - This route will be served by Express
app.get('/api/test', (req, res) => {
    res.json({ 
        message: 'API works!', 
        port: PORT,
        status: 'Server is running in production mode serving static files.'
    });
});

// --- Static File Serving (for production deployment) ---

// Serve static assets from the client/build folder
app.use(express.static(CLIENT_BUILD_PATH));

// Catch-all: For any request not handled by the API, serve index.html.
// This is essential for single-page applications (React routing).
app.get('*', (req, res) => {
    // Ensure this doesn't run if headers were already sent (e.g., by the API)
    if (res.headersSent) return; 
    res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

// --- Server Startup ---
app.listen(PORT, () => console.log(`Server running and listening on port ${PORT}`));
