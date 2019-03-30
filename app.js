const express = require('express');
const app = process.env.PORT || express();
const port = 300;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));