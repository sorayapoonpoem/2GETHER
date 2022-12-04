import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import { useState } from 'react';

import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Post() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');



    const Register = async () => {
        await fetch('http://localhost:3000/api/register/register', {
            method: "POST",
            body: JSON.stringify({ "name": name, "username": username, "password": password, "phone": phone, "email": email }),
            headers: { "Content-Type": "application/json" }
        }).then(response => {
            if (response.ok) {
                alert("Register Success")
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
                    fullWidth label="Usename"
                    value={username}
                    color="primary"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br></br> <br></br>
                <TextField type="password"
                    fullWidth label="Password"
                    value={password}
                    color="primary"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br></br> <br></br>
                <TextField type="number"
                    fullWidth label="Phone Number"
                    value={phone}
                    color="primary"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <br></br> <br></br>
                <TextField type="text"
                    fullWidth label="Enter Email"
                    value={email}
                    color="primary"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br></br> <br></br>
                <Button variant="primary" type="submit" className="mt-2" onClick={Register} href="/">
                    ENTER
                </Button>
            </Container>
        </div>
    );
}