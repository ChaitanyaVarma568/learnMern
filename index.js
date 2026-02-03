import express from "express";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3311;
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
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

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Form data received successfully.");
});

app.put("/update", (req, res) => {
  res.send(200);
});

app.patch("/modify", (req, res) => {
  res.send(200);
});

app.delete("/remove", (req, res) => {
  res.send(200);
});
