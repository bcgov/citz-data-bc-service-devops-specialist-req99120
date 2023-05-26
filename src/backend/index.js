const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Hello, World!')
})

app.get('/api/health', (req, res) => {
    res.status(200);
    res.send("Application is super healthy!");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
