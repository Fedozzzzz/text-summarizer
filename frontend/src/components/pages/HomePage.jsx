import React, { useState } from 'react';
import { Button } from '@mui/material';
import Form from '../forms/Form/Form';
import { getSummarizedText } from '../../ajax/users';
import './Home.css';

function HomePage() {
    const [formValue, setFormValue] = useState('Default Value');

    const handleChangeFormValue = (event) => {
        setFormValue(event.target.value);
    };

    const handleSubmitForm = async () => {
        try {
            const { summarizedText } = await getSummarizedText({ text: formValue });
            console.log('summarizedText', summarizedText);
            if (summarizedText) setFormValue(summarizedText);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="home">
            <Form
                value={formValue}
                handleChange={handleChangeFormValue}
                // handleSubmit={handleSubmitForm}
            />
            <Button onClick={handleSubmitForm}>Submit</Button>
        </div>
    );
}

export default HomePage;
