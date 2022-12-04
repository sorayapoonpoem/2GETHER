import { pool } from "../../../config/db";

export default async function handler(req, res) {
    // const data = [{postID: 1, title: "abc", price: 100}];
    switch (req.method) {
        case "GET":
            return await getPosts(req, res);
        default:
            return res.status(400).send('Methods not allowed');
    }    
}

// get all posts
const getPosts = async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM post WHERE post.status = "Waiting"`);
        console.log(rows);
        return res.json(rows);
       
    } catch (error) {
        console.error(error);
    }
}

