import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3311;
let authenticated = false;

const passwordChecker = (req, res, next) => {
  if (req?.body?.password === "secret") authenticated = true;
  next();
};

app.use(express.urlencoded({ extended: true }));
app.use(passwordChecker);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/index.html");
});

app.post("/check", (req, res) => {
  if (authenticated) {
    res.sendFile(_dirname + "/secret.html");
  } else res.sendFile(_dirname + "/index.html");
});
