import React from 'react'


// function Car(props) {
//     return <li>I am a { props.brand }</li>;
//   }
  
//   const  LI = () => {
//     const cars = ['Ford', 'BMW', 'Audi'];
//     return (
//       <>
//         <h4>Who lives in my garage?</h4>
//         <ul>
//           {cars.map((car) => <Car brand={car} />)}
//         </ul>
//       </>
//     );
//   }

// function Car(props) {
//     return <li>I am a { props.brand }</li>;
//   }
  
//   function LI() {
//     const cars = [
//       {id: 1, brand: 'Ford'},
//       {id: 2, brand: 'BMW'},
//       {id: 3, brand: 'Audi'}
//     ];
//     return (
//       <>
//         <h1>Who lives in my garage?</h1>
//         <ul>
//           {cars.map((car) => <Car k={car.id} brand={car.brand} />)}
//         </ul>
//       </>
//     );
//   }
  // function LI() {
  //   const list = [
  //     {id: 1, brand: 'Ford'},
  //     {id: 2, brand: 'BMW'},
  //     {id: 3, brand: 'Audi'}
  //   ];
  //   return (
  //     <>
  //       <h1>List of dictionary</h1>
  //       <ul>
  //         {list.map((li) => 
  //           <>
  //           <p>{li.id}</p>
  //           <button>yo btn</button>
  //           </>)}
  //       </ul>
  //     </>
  //   );
  // }

  function LI() {
    const list = ['a', 'b', 'c'];
    return (
      <>
        <h1>List </h1>
        <ul>
          {list.map((li) => 
            <>
            <p>{li}</p>
            <button>yo btn</button>
            </>)}
        </ul>
      </>
    );
  }
export default LI;