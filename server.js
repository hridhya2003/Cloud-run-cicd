const express = require("express");
const app = express();

// Set the port from the environment variable or use 8080 by default
const PORT = process.env.PORT || 3000;

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, Cloud Run! 🚀 Your Node.js server is running.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
