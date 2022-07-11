import React, { useState } from 'react';
import { Button } from '@mui/material';
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
                const { summarizedText } = res.json();
                if (summarizedText) setSummary(summarizedText);
            }
        } catch (e) {
            console.log(e);
        }
    };
    // console.log('hello world');

    return (
        <div className="home">
            <Navbar />
            <div className="formContainer">
                <Form value={formValue} handleChange={handleChangeFormValue} multiline label="Enter text" />
                <Button onClick={handleSubmitForm}>Submit</Button>
            </div>
            {summary && <div className="summary">{summary}</div>}
        </div>
    );
}

export default HomePage;
