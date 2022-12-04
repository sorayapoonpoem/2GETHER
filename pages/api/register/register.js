

import { pool } from "../../../config/db";
import bcrypt from "bcrypt"

export default async function handler(req, res) {
    if (req.method == "POST") {
        const name = req.body.name;
        const username = req.body.username;
        const password = req.body.password;
        const phone = req.body.phone;
        const email = req.body.email;
        const hash = await bcrypt.hash(password,10);

        const sql = "INSERT INTO user (name, username, password, phone, email) VALUES(?,?,?,?,?)";
        pool.query(sql, [name, username, hash, phone, email], function (err, result) {
            if (err) {
                console.log(err);
                res.status(500).send("Database error");
            } else {
                res.send(result);
            }

        });

    }
    else {
        res.status(400).send("Method not allowed");
    }

}