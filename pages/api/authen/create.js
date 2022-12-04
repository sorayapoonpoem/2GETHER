import bcrypt from "bcrypt";

export default async function handler(req, res) {
    // const data = [{ postID: 1, title: "abc", price: 100 }];
    if (req.method == "GET") {
        const raw = req.query.password;
        const hash = await bcrypt.hash(raw, 10)
        res.send(hash);
    } res.status(400).send("Method not allowed");

}