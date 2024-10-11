import "../components/Show.css"
import {useState} from 'react'
function ShowOffer() {

 const [showoffer, setshowoffer]= useState(false) 
const handlebutton=()=>{
  setshowoffer(!showoffer)
} 
return (
    <div>
{
  !showoffer &&
    <div className="box">
        <button onClick={handlebutton} className="Show-offer">Show Offer</button>
        </div>  

    
}
{ showoffer &&
            <div className="box" style={{background:"grey"}}  >
        <div >
              <div >
                <button onClick={handlebutton} style={{background:"black" , color:"white"}}>X</button>
                <p>click the button accept to amazing offer</p>
                <button onClick={ handlebutton} className="Show-offer">Accept</button>
              </div>
            </div>
      
        </div>
}
    </div>

  )
}

export default ShowOffer
