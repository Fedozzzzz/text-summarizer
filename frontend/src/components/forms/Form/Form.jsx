import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import './Form.css';

export default function Form(props) {
    const { value, handleChangeForm } = props;

    return (
        <div className="textFormContainer">
            <TextField
                id="filled-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={10}
                value={value}
                onChange={handleChangeForm}
                variant="filled"
            />
        </div>
    );
}

Form.propTypes = {
    value: PropTypes.string,
    handleChangeForm: PropTypes.func,
};

Form.defaultProps = {
    value: 'Enter Value',
    handleChangeForm: null,
};
