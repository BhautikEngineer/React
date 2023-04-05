import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result} />
      <div className="button-row">
        <button onClick={handleClear} className="button clear">
          Clear
        </button>
        <button onClick={handleDelete} className="button delete">
          Delete
        </button>
        <button onClick={handleClick} className="button" name="/">
          /
        </button>
      </div>
      <div className="button-row">
        <button onClick={handleClick} className="button" name="7">
          7
        </button>
        <button onClick={handleClick} className="button" name="8">
          8
        </button>
        <button onClick={handleClick} className="button" name="9">
          9
        </button>
        <button onClick={handleClick} className="button" name="*">
          *
        </button>
      </div>
      <div className="button-row">
        <button onClick={handleClick} className="button" name="4">
          4
        </button>
        <button onClick={handleClick} className="button" name="5">
          5
        </button>
        <button onClick={handleClick} className="button" name="6">
          6
        </button>
        <button onClick={handleClick} className="button" name="-">
          -
        </button>
      </div>
      <div className="button-row">
        <button onClick={handleClick} className="button" name="1">
          1
        </button>
        <button onClick={handleClick} className="button" name="2">
          2
        </button>
        <button onClick={handleClick} className="button" name="3">
          3
        </button>
        <button onClick={handleClick} className="button" name="+">
          +
        </button>
      </div>
      <div className="button-row">
        <button onClick={handleClick} className="button" name="0">
          0
        </button>
        <button onClick={handleClick} className="button" name=".">
          .
        </button>
        <button onClick={handleCalculate} className="button equal">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
