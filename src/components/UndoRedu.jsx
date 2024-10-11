import {useState} from 'react'
function UndoRedu() {
  const [value , setvalue] =useState(0)
const [history, sethistory] =  useState([0])
const[redu, setredu]=useState([])
const handleundo =()=>{
if(history.length>1){
  const newhistory =history.slice(0,-1)
  const lastvalue =setvalue(newhistory[newhistory.length-1]);
  setredu([value ,...redu])
  setvalue(lastvalue);
  sethistory(newhistory)
}
}
const handlevalue =(change)=>{
  const newvalue = value+change;
  setvalue(newvalue);
  sethistory([...history,newvalue])
  setredu([]);
}
const handleRedu =()=>{
if(redu.length>0){
  const [nextvalue, ...newredu] =redu;
  sethistory([...history ,nextvalue]);
  setvalue(nextvalue);
  setredu(newredu);
}
}
  return (
    <div>
   <h1>Undo Redu Topic</h1>

   <button onClick={handleundo} disabled={history.lengt<=1}>Undo</button>
   <button onClick ={handleRedu} disabled={redu.length===0}>Redu</button>
     <div>


<button onClick={()=>handlevalue(-1)}>-1</button>
<button onClick={()=>handlevalue(-10)}>-10</button>
<button onClick={()=>handlevalue(-100)}>-100</button>
   </div>

<h1>{value}</h1>
<div>
<button onClick={()=>handlevalue(1)}>1</button>
<button onClick={()=>handlevalue(10)}>10</button>
<button onClick={()=>handlevalue(100)}>100</button>

</div>

<div>
  <p>History : {history.join()}</p>
</div>
    </div>
  )
}

export default UndoRedu
