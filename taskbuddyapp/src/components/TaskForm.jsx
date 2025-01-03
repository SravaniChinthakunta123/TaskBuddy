import React, { useState } from 'react'
export default function TaskForm() {
    const [task, settask]=useState('');
    const[priority, setPriority]=useState('Medium');
    const[category, setCategory]=useState('General');
    return (
       <form>
        <input type='text'
        placeholder='Enter Your Task'
        required
        value ={task}
        onChange={(e)=>settask(e.target.value)}/>
     <span><button>Add Task</button></span>
     <div>
        <select value={priority}onChange={(e)=>setPriority(e.target.value)}>
            <option>Medium</option>
            <option>Low</option>
            <option>High</option>
        </select>
        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option>General</option>
            <option>Work</option>
            <option>Personal</option>
        </select>
     </div>
       </form>
    )
}