import React, { useState } from "react";
import { Button } from "@mui/material";
import Form from "../forms/Form/Form";
import { getSummarizedText } from "../../ajax/users";
import "./Home.css";

function HomePage() {
    const [formValue, setFormValue] = useState("");
    const [summary, setSummary] = useState("");

    const handleChangeFormValue = (event) => {
        setFormValue(event.target.value);
    };

    const handleSubmitForm = async () => {
        try {
            const { summarizedText } = await getSummarizedText({ text: formValue });
            if (summarizedText) setSummary(summarizedText);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="home">
            <div className="formContainer">
                <Form value={formValue} handleChange={handleChangeFormValue} />
                <Button onClick={handleSubmitForm}>Submit</Button>
            </div>
            {summary && <div className="summary">{summary}</div>}
        </div>
    );
}

export default HomePage;
