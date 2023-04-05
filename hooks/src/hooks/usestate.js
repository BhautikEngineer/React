import React,{useState} from 'react'


function Ustate() {
    const [color,SetColor]= useState("red")
    const [a,Seta]= useState(['a','v','d'])
    const [count,setCount] = useState(0);

    

  return (
    <div>
        <div>

        <h1>Color is {color} </h1>
        <h1>Var is {a} </h1>
        
        <button class="btn btn-primary" color="red" onClick={()=>SetColor("white")}>White</button>
        <button onClick={()=>SetColor("black")}>black</button>
        <button onClick={()=>SetColor("blue")}>blue</button>
        <button onClick={()=>SetColor("red")}>red</button>
      
        <button onClick={()=>Seta([...a, 'a'])}>VarChange</button>

        </div>
        <div>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <button onClick={()=>setCount(count-1)}>Dec</button>
        <h1>{count}</h1>
        </div>
    </div>
  )
}

export default Ustate