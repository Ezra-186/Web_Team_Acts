const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());

const data = {
  id: 1,
  title: "My API",
  description: "API for demonstration purposes",
  image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." // Base64 string
};

app.get('/', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
