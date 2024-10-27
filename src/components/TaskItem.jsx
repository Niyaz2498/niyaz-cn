import React, { useState }  from 'react'

const TaskItem = ({cname="", value, taskCompleteCount, incrementCount, decrementCount}) => {
    const [completed, setCompleted] = useState(false)
    var classes = `taskItem ${cname}`
    var TaskTextClass = completed ? "taskTextCompleted" : "taskText"
    function handleChange(e) {
        setCompleted(!completed);
        if(e.target.checked){
          incrementCount()
        }else{
          decrementCount()
        }
      };
    
  return (
    <div className={classes}>
        <input className='taskCheck' type="checkbox" checked={completed} onChange={handleChange}/>
        <div className={TaskTextClass}>{value}</div>
    </div>
  )
}

export default TaskItem
