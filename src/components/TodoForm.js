import React from 'react'
import { useState } from 'react'

export default function TodoForm() {
  
 const [userInput, setUserInput] = useState();
  
 const handleOnChange = (e) => {
    setUserInput(e.currentTarget.value);
 }

  return (
    <div style={{margin: 20}}>
        <form>
            <input type='text' value={userInput} onChange ={handleOnChange}/>
            <button>
                Agregar tarea
            </button>
        </form>
    </div>
  )
}
