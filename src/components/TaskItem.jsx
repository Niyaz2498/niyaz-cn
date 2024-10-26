import React, { useState }  from 'react'

const TaskItem = ({cname="", value}) => {
    const [completed, setCompleted] = useState(false)
    var classes = `taskItem ${cname}`
    const handleChange = () => {
        setCompleted(!completed);
      };
    
  return (
    <div className={classes}>
        <input type="checkbox" checked={completed} onChange={handleChange}/>
        <div>{value}</div>
    </div>
  )
}

export default TaskItem
