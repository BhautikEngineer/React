import React, { useState, useMemo } from 'react';

function computeExpensiveValue(a, b) {
  console.log('Computing expensive value...');
  return a * b;
}

function Umemo() {
  const [valueA, setValueA] = useState(1);
  const [valueB, setValueB] = useState(1);

  const result = useMemo(() => {
    return computeExpensiveValue(valueA, valueB);
  }, [valueA, valueB]);

  function handleValueAChange(event) {
    setValueA(Number(event.target.value));
  }

  function handleValueBChange(event) {
    setValueB(Number(event.target.value));
  }

  return (
    <div>
      <div>
        <label>
          Value A:
          <input type="number" value={valueA} onChange={handleValueAChange} />
        </label>
      </div>
      <div>
        <label>
          Value B:
          <input type="number" value={valueB} onChange={handleValueBChange} />
        </label>
      </div>
      <div>
        Result: {result}
      </div>
    </div>
  );
}





export default Umemo