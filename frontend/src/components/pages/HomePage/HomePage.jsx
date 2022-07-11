import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import Form from '../../forms/Form/Form';
import { getSummarizedText } from '../../../ajax/nlp';
import './HomePage.css';
import Navbar from '../../common/Navbar/Navbar';

function HomePage() {
    const [formValue, setFormValue] = useState('');
    const [summary, setSummary] = useState('');

    const handleChangeFormValue = (event) => {
        setFormValue(event.target.value);
    };

    const handleSubmitForm = async () => {
        try {
            const res = await getSummarizedText({ text: formValue });
            if (res.ok) {
                const { summarizedText } = await res.json();
                if (summarizedText) setSummary(summarizedText);
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="home">
            <Navbar />
            <div className="titleContainer">
                <Typography variant="h3" gutterBottom component="div">
                    Text summarizer
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    Enter the text to get the abstract
                </Typography>
            </div>
            <div className="formContainer">
                <Form value={formValue} handleChange={handleChangeFormValue} multiline label="Enter text" />
                <Button onClick={handleSubmitForm}>Submit</Button>
            </div>
            {summary && (
                <div className="summary">
                    <Typography variant="h5" gutterBottom component="div">
                        Summary:
                    </Typography>
                    <p>{summary}</p>
                </div>
            )}
        </div>
    );
}

export default HomePage;
