const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the src directory
app.use(express.static(path.join(__dirname, "src")));

// Serve the index.html file at the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
