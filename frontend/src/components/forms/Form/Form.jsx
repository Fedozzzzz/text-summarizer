import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import './Form.css';

export default function Form(props) {
    const {
        value, handleChange, multiline, label,
    } = props;

    return (
        <div className="textFormContainer">
            <TextField
                // id="filled-multiline-flexible"
                label={label}
                fullWidth
                multiline={multiline}
                rows={10}
                value={value}
                onChange={handleChange}
                variant="filled"
            />
        </div>
    );
}

Form.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    handleChange: PropTypes.func,
    multiline: PropTypes.bool,
};

Form.defaultProps = {
    value: 'Enter Value',
    label: 'Enter Value',
    handleChange: null,
    multiline: false,
};
