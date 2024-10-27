import React, { useState } from 'react'
import TaskItem from './TaskItem'
import EditImg from "../assets/Edit.svg"
import DeleteImg from "../assets/Delete.svg"
import THreeDotsImg from "../assets/ThreeDots.svg"
import tagIcon from "../assets/Tag.svg"

const TaskContainer = ({details}) => {
  let totalTaskCount = details["SubTask"] ? details["SubTask"].length + 1 : 1
  const [completeCount, setCompleteCount] = useState(0)
  console.log("details")
  console.log(details)
  console.log(totalTaskCount)
  return (
    <div className='task-container'>
      <div className="task-top">
        <div className="task-item-holder">
          
            <TaskItem value={details["Task"]} changeCompleteCount={setCompleteCount}></TaskItem>
            {
              details["SubTask"] && details["SubTask"].map((details) => {
                return (<TaskItem cname="SubTask" value={details["Task"]} changeCompleteCount={setCompleteCount}>
                </TaskItem>)
              })
            }
        </div>
        <div className="taskStatus">
          <div className="completedCount">
            {
              totalTaskCount != 1 &&
              <span className='completionCount'>
                {completeCount} / {totalTaskCount} Complete
              </span>
            }
          </div>
          <div className="task-action-btn-holder">
            <div className="editMenu">
              <img src={EditImg} alt="Edit Image" />
            </div>
            <div className="deleteMenu">
              <img src={DeleteImg} alt="Edit Image" />
            </div>
            <div className="threedots">
              <img src={THreeDotsImg} alt="Edit Image" />
            </div>
          </div>
        </div>
      </div>
      <div className="task-tag-holder">
            <img src={tagIcon} alt="Tag Icon" />
            {
              details["tags"].map((tag)=>{
                // eslint-disable-next-line react/jsx-key
                return <div className="tag-div" style={{color: tag["color"], borderRadius: "33px", backgroundColor: tag["background"], padding: "4px 10px", height: "15px"}}>
                  {tag["title"]}
                </div>
              })
            }
      </div>
    </div>
  )
}

export default TaskContainer
