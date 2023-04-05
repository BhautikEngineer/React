import React, {useState,useEffect} from 'react'


const UEffect = () => {
    const [count,setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here

     

  return (
    <>
          
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation:{calculation} </p>
    

    </>
  )
}

export default UEffect