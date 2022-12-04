//http://localhost:3000/api/authen/login
import bcrypt from "bcrypt"
import { pool } from "../../../config/db";
export default async function handler(req, res) {
    if (req.method == "POST") {
        const username = req.body.username;
        const raw = req.body.password;
        try {
            // query user info from DB
            const sql = "SELECT id, password FROM user WHERE username=?";
            const [rows] = await pool.query(sql, [username]);
            if (rows.length === 1) {
                // user found and get the password
                const hash = rows[0].password;
                // res.send(hash);
                const same = await bcrypt.compare(raw, hash);
                if (same) {
                    // res.send("Login OK")
                    res.json({ userID: rows[0].id, username: username });
                } else {
                    res.status(401).send("Wrong password");
                }
            }
            else {
                throw Error("Wrong username");
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).send(error.message);
        }
    }
    else {
        res.status(400).send("Method not allowed");
    }

}