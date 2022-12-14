import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useSession } from "next-auth/react"
import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Post() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [seat, setSeat] = useState('');
    const [cartype, setCartype] = useState('');
    const [price, setPrice] = useState('');
    const { data: session } = useSession()
  

    if (session) {
        const uid = session.user.name.userID
        console.log(uid);
        const addPost = async () => {
            await fetch('http://localhost:3000/api/post/post', {
                method: "POST",
                body: JSON.stringify({ "userID": uid, "name": name, "title": title,"seat": seat, "cartype": cartype,  "price": price }),
                headers: { "Content-Type": "application/json" }
            }).then(response => {
                if (response.ok) {
                    alert("Post Success")
                } throw Error('Server error!');
            });
        }
    return (
        <div>
            <Container>
                <br></br> <br></br>
                <TextField type="text"
                    fullWidth label="Your Name"
                    value={name}
                    color="primary"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br></br> <br></br>
                <TextField type="text"
                    fullWidth label="Enter Title"
                    value={title}
                    color="primary"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <br></br> <br></br>
                <TextField type="number"
                    fullWidth label="Seat Count"
                    value={seat}
                    color="primary"
                    onChange={(e) => setSeat(e.target.value)}
                    required
                />
                <br></br> <br></br>
                <TextField type="text"
                    fullWidth label="Enter Your Car Type"
                    value={cartype}
                    color="primary"
                    onChange={(e) => setCartype(e.target.value)}
                    required
                />
                <br></br> <br></br>
                <TextField type="number"
                    fullWidth label="Enter Price"
                    value={price}
                    color="primary"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <br></br> <br></br>
                <Button variant="primary" type="submit" className="mt-2" onClick={addPost} href="/">
                    POST
                </Button>
            </Container>
        </div>
    );
}
}