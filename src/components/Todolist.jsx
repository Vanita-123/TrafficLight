import { useState } from "react"
function Todolist() {
    const [todo , settodo] =useState('')
    const[inputtodo ,setinputtodo] =useState([])
    const handleadd =()=>{
        setinputtodo([...inputtodo ,todo])
        console.log('add')
        settodo(" ");
    }
const handleChange =(e)=>{
settodo  (e.target.value);
}

const handleedit= (index)=>{
  let edittodo =inputtodo[index]
  settodo(edittodo)
  setinputtodo(inputtodo.filter((_, i)=>
   i!==index
  ))
}
const handledelete= (index)=>{
setinputtodo(inputtodo.filter((_ ,i)=>
  i !==index
  ))
}


  return (
    <div>
      <input type="text" value ={todo}  onChange={handleChange} placeholder="todo" />
      <button onClick ={handleadd}>Add</button>
    <ul>
      {inputtodo.map((item, index) => {
  return(

    <div key={index}>
            {item}
            <button onClick={() => handleedit(index)}>edit</button>
            <button onClick={() => handledelete(index)}>delete</button>
          </div>
        )
          }
        )}
      </ul>
    </div>

    
  )
}

export default Todolist
