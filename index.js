import { input } from "@inquirer/prompts";
import qr from "qr-image";
import fs from "fs";

const answer = await input({ message: "Enter the QR link text!" });

let qr_svg = qr.image(answer, { type: "png" });
qr_svg.pipe(fs.createWriteStream(`${answer}.png`));
