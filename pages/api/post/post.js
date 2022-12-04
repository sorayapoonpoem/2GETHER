

import { pool } from "../../../config/db";
export default async function handler(req, res) {
    if (req.method == "POST") {
        const userID = req.body.userID;
        const name = req.body.name;
        const title = req.body.title;
        const seat = req.body.seat;
        const cartype = req.body.cartype;
        const price = req.body.price;
        const status = "Waiting"
        const sql = "INSERT INTO post (userID, name , title , seat, cartype, price , status) VALUES(?,?,?,?,?,?,?)";
        pool.query(sql, [userID, name, title, seat, cartype, price, status], function (err, result) {
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