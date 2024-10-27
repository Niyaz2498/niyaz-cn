import React, { useState }  from 'react'

const TaskItem = ({cname="", value}) => {
    const [completed, setCompleted] = useState(false)
    var classes = `taskItem ${cname}`
    var TaskTextClass = completed ? "taskTextCompleted" : "taskText"
    // var classesSelected = `taskItemSelected ${cname}`
    const handleChange = (e) => {
        setCompleted(!completed);
        // changeCompleteCount()
        console.log(e)
      };
    
  return (
    <div className={classes}>
        <input className='taskCheck' type="checkbox" checked={completed} onChange={handleChange}/>
        <div className={TaskTextClass}>{value}</div>
    </div>
  )
}

export default TaskItem
