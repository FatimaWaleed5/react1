import React, { useState } from 'react';


const Calculator = () => {
    const [inputNum, setInputNumber] = useState(0); 
    const [result, setResult] = useState(0);

    const handleInputChange = (e) => {
        setInputNumber(Number(e.target.value));
    };

    const plus = (e) => {
        e.preventDefault();
        setResult((prevResult) => prevResult + inputNum); 
    };

    const minus = (e) => {
        e.preventDefault();
        setResult((prevResult) => prevResult - inputNum); 
    };

    const times = (e) => {
        e.preventDefault();
        setResult((prevResult) => prevResult * inputNum); 
    };

    const divide = (e) => {
        e.preventDefault();
        setResult((prevResult) => prevResult / inputNum); 
    };

    const resetInput = (e) => {
        e.preventDefault();
        setInputNumber(0); 
    };

    const resetResult = (e) => {
        e.preventDefault();
        setResult(0);
    };

    return (
        <div>
            <h2>Build a Calculator using React</h2>
            <form>
                <p>Result: {result}</p> 
                <input
                    type='number'
                    placeholder='Type a number'
                    value={inputNum}
                    onChange={handleInputChange} 
                />
                <br />
                <button onClick={plus}>Add</button>
                <button onClick={minus}>Minus</button>
                <button onClick={times}>Times</button>
                <button onClick={divide}>Divide</button> 
                <button onClick={resetInput} className='btn1'>Reset Input</button>
                <button onClick={resetResult} className='btn2'>Reset Result</button>
            </form>
        </div>
    );
};

export default Calculator;