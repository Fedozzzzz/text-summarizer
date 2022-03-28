import React, { useState } from 'react';
import Form from '../forms/Form/Form';

function HomePage() {
    const [formValue, setFormValue] = useState('Default Value');

    const handleChangeFormValue = (event) => {
        setFormValue(event.target.value);
    };

    return (
        <div className="Home">
            <Form value={formValue} handleFormChange={handleChangeFormValue} />
        </div>
    );
}

export default HomePage;
