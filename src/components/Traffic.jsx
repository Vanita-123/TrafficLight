import { useEffect, useState } from "react"

function Traffic() {
    const config = {
                red: {
                  duration: 4000,
                  next: 'green',
                },
                yellow: {
                  duration: 500,
                  next: 'red',
                },
                green: {
                  duration: 3000,
                  next: 'yellow',
                },
              };

    const [Light, setLight]= useState('red')

    useEffect(()=>{   
        const Timer = setTimeout(() => {
            setLight(config[Light].next)
        }, config[Light].duration);
       return()=>clearTimeout(Timer);
    },[Light])
    
  return (
      <>
      <h1>Traffic Light</h1>
      <div style={{background:"black" , width:"80px" ,height:"200px"}}>
        <div style={{margin:"15px"}}>

      <div  style={{background: Light=== "red" ? "red": "grey" , width:"50px" ,height:"50px", borderRadius:"25px"}}> 
 
        </div>
        <br />
                <div style={{background:Light ==="yellow"?"Yellow" :"grey" , width:"50px" ,height:"50px" ,borderRadius:"25px"}}>
      </div> 
      <br />
        <div style={{background: Light ==="green"?"green":"grey" , width:"50px" ,height:"50px" , borderRadius:"25px" }}>
      </div>
      </div>
        </div>
      </>

  )
}
export default Traffic




// function Traffic() {
//     const config = {
//         red: {
//           duration: 4000,
//           next: 'green',
//         },
//         yellow: {
//           duration: 500,
//           next: 'red',
//         },
//         green: {
//           duration: 3000,
//           next: 'yellow',
//         },
//       };
      
//     return (
//     <div>
//                <div style={{background:"black" , width:"80px" ,height:"200px"}}>

//     </div>
//     </div>
//   )
// }

// export default Traffic
