import React from 'react'
import Separator from './Separator'
import ProgressContent from './ProgressContent'

const HomeSide = () => {
  return (
    <div className="column3">
        <div className="calendar-section">
            <span className='user-title-text-secondary'>Calendar</span>
        </div>
        <div className="progress-section">
            <ProgressContent cname="progress-ToDo" value={["To-Do", 20]}></ProgressContent>
            <ProgressContent cname="progress-InProgress" value={["In-Progress", 20]}></ProgressContent>
            <ProgressContent cname="progress-Complete" value={["Complete", 20]}></ProgressContent>
        </div>
        <Separator></Separator>
        <div className="Task-section"></div>
    </div>
  )
}

export default HomeSide
