// Code Keypad Component Here
import React from 'react';

const handleChange = (event) => {
    console.log("Entering password...")
}

function Keypad(){
    return (
        <input type='password' onChange={handleChange} />
    );
};

export default Keypad;