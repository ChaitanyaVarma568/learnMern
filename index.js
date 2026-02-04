import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3311;

app.set("view engine", "ejs");
app.set("views", path.join(_dirname, "view"));

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "index.html"));
});

app.post("/greet", (req, res) => {
  const day = (req.body.day || "").toLowerCase();
  console.log(day);
  res.render("greet", { day });
});
