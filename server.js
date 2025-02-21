
const express = require('express');
const app = express();
const PORT = 980; // Change the port to 980

app.get('/', (req, res) => {
    res.send('Hello, Cloud Run!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
