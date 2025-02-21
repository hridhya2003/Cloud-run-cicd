const express = require('express');
const app = express();
const PORT = 3000; // Use an available port

app.get('/', (req, res) => {
    res.send('Hello, Cloud Run!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
