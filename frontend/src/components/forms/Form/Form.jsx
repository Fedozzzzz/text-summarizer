import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

export default function Form(props) {
    const { value, handleChangeForm } = props;

    return (
        <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={10}
            value={value}
            onChange={handleChangeForm}
            variant="filled"
        />
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
