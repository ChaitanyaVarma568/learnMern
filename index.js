import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3311;

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/index.html");
});

app.post("/generate", (req, res) => {
  console.log(req.body);
  res.send(`<section>
      <h1>Your Generated Tag</h1>
      <p>Name: ${req.body.name}</p>
      <p>Tag Name: ${req.body.tag}</p>
    </section>`);
});
