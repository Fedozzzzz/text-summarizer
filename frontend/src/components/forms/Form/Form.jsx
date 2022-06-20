import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import "./Form.css";

export default function Form(props) {
    const { value, handleChange } = props;

    return (
        <div className="textFormContainer">
            <TextField
                id="filled-multiline-flexible"
                label="Multiline"
                fullWidth
                multiline
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
    handleChange: PropTypes.func,
};

Form.defaultProps = {
    value: "Enter Value",
    handleChange: null,
};
