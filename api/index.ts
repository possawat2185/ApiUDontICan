import express from "express";

export const router = express.Router();

router.get("/", (req, res)=>{
    // console.log("Get index.ts");
    res.send("Get index.ts");
});