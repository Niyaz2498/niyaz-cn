import React from 'react'
import TaskItem from './TaskItem'

const TaskContainer = ({details}) => {
  console.log(details["SubTask"])
  return (
    <div className='task-container'>
      <div className="task-top">
        <div className="task-item-holder">
          
            <TaskItem value={details["Task"]}></TaskItem>
            {
              details["SubTask"] && details["SubTask"].map((details) => {
                return (<TaskItem cname="SubTask" value={details["Task"]}>
                </TaskItem>)
              })
            }
        </div>
        <div className="task-status"></div>
      </div>
      <div className="task-tag-holder"></div>
    </div>
  )
}

export default TaskContainer
