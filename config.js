const express = require('express');
const app = express();

app.use(express.json());

let port = 3000;
app.listen(port, () => {
  console.log("Listening on port:", port);
});