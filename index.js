import express from "express";

const app = express();
const port = 3311;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send(`<div>
    <h1>Welcome to the Home Page of Our Express Server!</h1>
    <p>This is a simple Express server running on port ${port}.</p>
    </div>`);
});

app.get("/about", (req, res) => {
  res.send(`<div>
    <h1>About Us</h1>
    <p>This server is built using Express.js to demonstrate basic routing.</p>
    </div>`);
});

app.get("/contact", (req, res) => {
  res.send(`<div>
    <h1>Contact Us</h1>
    <p>You can reach us at localhost:${port}/contact.</p>
    </div>`);
});
