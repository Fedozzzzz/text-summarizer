import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import Form from '../../../forms/Form/Form';
import { register, login } from '../../../../ajax/users';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function LoginModal(props) {
    const { open, handleClose } = props;
    const [isRegistration, setIsRegistration] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const handleRegister = async () => { await register(email, password); };

    const handleLogin = async () => { await login(email, password); };

    const renderLogin = () => (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Sign In
            </Typography>
            <Form value={email} handleChange={(e) => setEmail(e.target.value)} label="Email" />
            <Form value={password} handleChange={(e) => setPassword(e.target.value)} label="Password" />
            <Button onClick={handleLogin}>Sign In</Button>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
            <Form value={email} handleChange={(e) => setEmail(e.target.value)} label="Email" />
            <Form value={password} handleChange={(e) => setPassword(e.target.value)} label="Password" />
            <Form value={repeatedPassword} handleChange={(e) => setRepeatedPassword(e.target.value)} label="Repeat Password" />
            <Button onClick={handleRegister}>Sign Up</Button>
            <Button onClick={() => setIsRegistration(false)}>Back</Button>
        </Box>
    );

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {isRegistration ? renderRegistration() : renderLogin()}
            </Modal>
        </div>
    );
}

LoginModal.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
};

LoginModal.defaultProps = {
    open: false,
    handleClose: null,
};

export default LoginModal;
