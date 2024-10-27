import React, { useState } from 'react'
import Separator from './Separator'
import ProgressContent from './ProgressContent'
import TaskContainer from './TaskContainer'
import CalendarElements from './CalendarElements'
import PlusBlue from "../assets/PlusBlue.svg"
import notesRt from "../assets/RtArrow.svg"

const HomeSide = () => {
    const [selected, setSelected] = useState("3")
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
            ],
            "tags": [
                {
                    "title": "Donation",
                    "color": "#FFC800",
                    "background": "#FFC8001A"
                },
                {
                    "title": "Social",
                    "color": "#00B884",
                    "background": "#00B88433"
                },
            ],
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
            ],
            "tags": [
                {
                    "title": "Sport",
                    "color": "#7B68EE",
                    "background": "#5577FF1A"
                },
                {
                    "title": "SelfCare",
                    "color": "#FD71AF",
                    "background": "#FFC8001A"
                },
            ],
        },
        {
            "Task": "Buy new Headset",
            "status": "completed",
            "tags": [
                {
                    "title": "Shopping",
                    "color": "#7B68EE",
                    "background": "#5577FF1A"
                },
                {
                    "title": "Set-up",
                    "color": "#00B884",
                    "background": "#00B88433"
                },
            ],
        }
    ]
    var calElemList = [
        {
            "id": "1",
            "date":"19",
            "day": "Sun"
        },
        {
            "id": "2",
            "date":"20",
            "day": "Mon"
        },
        {
            "id": "3",
            "date":"21",
            "day": "Tue"
        },
        {
            "id": "4",
            "date":"22",
            "day": "Wed"
        },
        {
            "id": "5",
            "date":"23",
            "day": "Thu"
        },
        {
            "id": "6",
            "date":"24",
            "day": "Fri"
        },
        {
            "id": "7",
            "date":"25",
            "day": "Sat"
        },
    ]
  return (
    <div className="column3">
        <div className="calendar-section">
            <div className="calendarHeaderSpace">
                <span className='user-title-text-secondary'>Calendar</span>
            </div>
            <div className="calendarIconsHolder">
                {
                    calElemList.map((elem)=>{
                        return <CalendarElements id={elem.id} selected={selected} date={elem.date} day={elem.day} changeSelected={setSelected}></CalendarElements>
                    })
                }
            </div>
        </div>
        <div className="progress-section">
            <ProgressContent cname="progress-ToDo" value={["To-Do", "20"]}></ProgressContent>
            <ProgressContent cname="progress-InProgress" value={["In-Progress", "15"]}></ProgressContent>
            <ProgressContent cname="progress-Complete" value={["Complete", "03"]}></ProgressContent>
        </div>
        <Separator></Separator>
        <div className="Task-section">
            <div className="taskHeader">
                <span className='user-title-text-secondary'>Tasks for the day</span>
                <div className="notesHeaderBtnGrp">
                    <div className='NotesAdd'>
                        <img src={PlusBlue} alt="Add" />
                    </div>
                    <div className='NextBig'>
                        <img src={notesRt} alt="Add" />
                    </div>
                </div>
            </div>
            {
                tasklist.map((taskItem)=> {
                    return (
                        <TaskContainer details={taskItem}></TaskContainer> 
                    )
                })
            }
        </div>
    </div>
  )
}

export default HomeSide
