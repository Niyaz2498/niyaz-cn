import React from 'react'
import screenshotInfo from "../assets/ScreenshotInfo.svg"
import rtSmall from "../assets/rtSmall.svg"

const NotesItem = () => {
  return (
    <div className='NotesItem'>
      <span className="notesTitle"> Follow Up with Mr. Ashton</span>
      <span className="notesContent">
      Following up on our meeting with Mr. Ashton, I wanted to recap the key points discussed and outline the action items moving forward. During the meeting, we touched upon the project timeline, budget considerations, and specific deliverables. Mr. Ashton expressed ...
      </span>
      <span className="attachmentHeading">
      Attachments
      </span>
      <div className="attachmentHolder">
        <img src={screenshotInfo} alt="" />
        <span>Screenshot Information.png</span>
      </div>
      <div className="dateHolder">
        <span>21 May 2024</span>
        <div className="rtSmallHolder">
            <img src={rtSmall} alt="small Right arrow" />
        </div>
      </div>
    </div>
  )
}

export default NotesItem
