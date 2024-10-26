import React from 'react'
import Separator from './Separator'
import ProgressContent from './ProgressContent'
import TaskContainer from './TaskContainer'

const HomeSide = () => {
    var tasklist = [
        {
            "Task": "Donate Rs 500 to the charity",
            "status": "completed",
            "SubTask": [
                {
                    "Task": "Donate Rs 500 to the charity",
                    "status": "completed",
                },
                {
                    "Task": "Donate Rs 500 to the charity",
                    "status": "completed",
                }
            ]
        },
        {
            "Task": "Do 500 Pushups",
            "status": "completed",
            "SubTask": [
                {
                    "Task": "Start with 100",
                    "status": "completed",
                },
                {
                    "Task": "Complete 250",
                    "status": "completed",
                },
                {
                    "Task": "Reach 400",
                    "status": "incomplete",
                },
            ]
        },
        {
            "Task": "Buy new Headset",
            "status": "completed"
        },
        {
            "Task": "clean the room",
            "status": "completed"
        },
    ]
  return (
    <div className="column3">
        <div className="calendar-section">
            <span className='user-title-text-secondary'>Calendar</span>
        </div>
        <div className="progress-section">
            <ProgressContent cname="progress-ToDo" value={["To-Do", "20"]}></ProgressContent>
            <ProgressContent cname="progress-InProgress" value={["In-Progress", "15"]}></ProgressContent>
            <ProgressContent cname="progress-Complete" value={["Complete", "03"]}></ProgressContent>
        </div>
        <Separator></Separator>
        <div className="Task-section">
            <span className='user-title-text-secondary'>Tasks for the day</span>
            {
                tasklist.map((taskItem)=> {
                    return (
                        <TaskContainer details={taskItem}></TaskContainer> 
                    )
                })
            }
            {/* <TaskContainer details={tasklist[0]}></TaskContainer> */}
        </div>
    </div>
  )
}

export default HomeSide
