import React from 'react'

const Eve = () =>{
    alert("Event run kari on Button clicked")
}
const Eve1 = (a) =>{
    alert("Event run kari on Button clicked "+a)
}
const Eve2 = (a,b) =>{
    alert("Event run kari on Button clicked "+a+" event to type  "+b.type )
}

const EventsReact = () => {
  return (
    <div>
        <button onClick={Eve}>btn</button>
        <button onClick={() =>Eve("")}>btn</button>
        <button onClick={() =>Eve1(" yo bo")}>btn2</button>
        <button onClick={(event) =>Eve2("abcd",event)}>btn3</button>

        
    </div>
  )
}

export default EventsReact