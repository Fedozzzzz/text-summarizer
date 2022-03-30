import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import './Form.css';

export default function Form(props) {
    const { value, handleChange, handleSubmit } = props;

    return (
        <div className="textFormContainer">
            <TextField
                id="filled-multiline-flexible"
                label="Multiline"
                multiline
                rows={10}
                value={value}
                onChange={handleChange}
                variant="filled"
                // onSubmit={handleSubmit}
            />
        </div>
    );
}

Form.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
};

Form.defaultProps = {
    value: 'Enter Value',
    handleChange: null,
    handleSubmit: null,
};
