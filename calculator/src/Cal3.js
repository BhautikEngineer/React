import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('0');

  const handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case '=':
        try {
          setResult(eval(result));
        } catch (error) {
          setResult('error');
        }
        break;
      case 'C':
        setResult('0');
        break;
      default:
        setResult(result === '0' ? value : result + value);
        break;
    }
  };

  return (
    <div>
      <h1>Calculator App</h1>
      <div className="calculator">
        <input type="text" value={result} disabled />
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="+" onClick={handleClick}>+</button>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="-" onClick={handleClick}>-</button>
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="*" onClick={handleClick}>*</button>
        <button value="C" onClick={handleClick}>C</button>
        <button value="0" onClick={handleClick}>0</button>
        <button value="/" onClick={handleClick}>/</button>
        <button value="=" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
