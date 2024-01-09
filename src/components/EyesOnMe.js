// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe(){
    function handleFocus(){
        console.log("Good!")
    }
    function handelBlur(){
        console.log("Hey! Eyes on me!");
    }
    return (
        <button onFocus={handleFocus} onBlur={handelBlur}>Eyes on me</button>
    );
};

export default EyesOnMe;