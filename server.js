const express = require('express');
const app = express();
const PORT = process.env.PORT || 9090;

app.get('/', (req, res) => {
    res.send('Helloooo, Cloud Run!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
