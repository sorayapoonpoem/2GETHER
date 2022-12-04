
// UPDATE `post` SET `status` = 'Waiting' WHERE `post`.`postID` = 26;
import { pool } from "../../../config/db";
export default async function handler(req, res) {
    if (req.method == "POST") {
        // const userID = req.body.userID;
        const postID = req.body.postID; 
        const status = "Accepted"
        const sql = `UPDATE post SET status ="${status}" WHERE postID = ${req.body.postID}`;
        pool.query(sql, [postID, status], function (err, result) {
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