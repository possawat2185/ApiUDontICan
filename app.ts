import express from "express";
import cors from "cors";
import { router as index } from "./api/index";
import { router as user } from "./api/user";
import { router as upload } from "./api/upload";

export const app = express();

// app.use("/", (req, res)=>{
//     res.send("Hello World");
// });
app.use(
    cors({
      origin: "*",
    })
  );

app.use("/", index);
app.use("/user", user);
app.use("/upload", upload);