import React, { useState }  from 'react'

const TaskItem = ({value}) => {
    const [completed, setCompleted] = useState(false)
    
    const handleChange = () => {
        setCompleted(!completed);
      };
    
  return (
    <div className='taskItem'>
        <input type="checkbox" checked={completed} onChange={handleChange}/>
        <div>{value}</div>
    </div>
  )
}

export default TaskItem
