import { pool } from "../../../config/db";

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getPost(req, res);
        default:
            return res.status(400).send('Methods not allowed');
    }    
}

// get all posts
const getPost = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM post WHERE postID = ?", [req.query.id]);
        return res.json(rows);
    } catch (error) {
        console.error(error);
    }
}


