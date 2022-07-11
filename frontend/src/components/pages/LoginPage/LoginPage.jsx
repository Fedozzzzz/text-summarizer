/*eslint-disable*/
import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useAuth} from "../../../hooks/authHook";
import {useNavigate} from "react-router-dom";
import {TextField} from "@mui/material";

const style = {
    margin: 'auto',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function LoginPage() {
    const auth = useAuth();
    const navigate = useNavigate();
    const [isRegistration, setIsRegistration] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    useEffect(() => {
        if (auth.isAuthed) navigate('/')
    }, [auth])

    const handleRegister = async () => {
        const res = await auth.register(email, password);
        console.log(res)
    };

    const handleLogin = async () => {
        const res = await auth.login(email, password);
        console.log(res)
    };

    const renderLogin = () => (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Sign In
            </Typography>
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" type="email" variant="filled" fullWidth/>
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" variant="filled"                 fullWidth
            />
            {/* <Button onClick={auth.login}>Sign In</Button> */}
            <Button onClick={handleLogin}>Sign In</Button>
            <Typography id="modal-modal-description" sx={{mt: 2}}>
                Don`t have an account? Please Sign Up.
            </Typography>
            <Button onClick={() => setIsRegistration(true)}>Sign Up</Button>
        </Box>
    );

    const renderRegistration = () => (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Sign Up
            </Typography>
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" type="email" variant="filled" fullWidth />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" variant="filled" fullWidth/>
            <TextField value={repeatedPassword} onChange={(e) => setRepeatedPassword(e.target.value) }
                  label="Repeat Password"  type="password" variant="filled" fullWidth/>
            <Button onClick={handleRegister}>Sign Up</Button>
            <Button onClick={() => setIsRegistration(false)}>Back</Button>
        </Box>
    );

    return (
        <React.Fragment>
            {isRegistration ? renderRegistration() : renderLogin()}
        </React.Fragment>
    )
}

export default LoginPage;
