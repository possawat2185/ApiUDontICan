import express from "express";
// import { UserGetReq } from "../models/userGetReq";
import { conn, queryAsync } from "../dbconnect";

export const router = express.Router();

router.get("/", (req, res)=>{
    const sql = "SELECT * FROM user";
    conn.query(sql, (err, result) => {
        res.json(result)
        console.log(result);
        if (err) {throw err}
    })
});

router.get("/:uid", (req, res)=>{
    const uid = req.params.uid
    const sql = "SELECT * FROM user where uid = ? ";
    conn.query(sql, [uid], (err, result) => {
        res.json(result)
        console.log(result);
        if (err) {throw err}
    })
});

router.get("/login", (req, res)=>{
    if(req.query.number && req.query.password){
        const number = req.query.number;
        const password = req.query.password;
        
    }
})