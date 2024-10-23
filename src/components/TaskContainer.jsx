import React from 'react'
import TaskItem from './TaskItem'

const TaskContainer = ({details}) => {
  return (
    <div className='task-container'>
      <div className="task-top">
        <div className="task-item-holder">
            <TaskItem value={details["Task"]}>

            </TaskItem>
        </div>
        <div className="task-status"></div>
      </div>
      <div className="task-tag-holder"></div>
    </div>
  )
}

export default TaskContainer
