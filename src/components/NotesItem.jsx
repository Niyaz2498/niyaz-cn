import React from 'react'
import screenshotInfo from "../assets/ScreenshotInfo.svg"
import rtSmall from "../assets/rtSmall.svg"

const NotesItem = ({details}) => {
    console.log("notes")
    // eslint-disable-next-line react/prop-types
    console.log(details["notesContent"])
  return (
    <div className='NotesItem'>
      <span className="notesTitle"> {details["title"]}</span>
      <span className="notesContent" style={{ whiteSpace: 'pre-wrap' }}>
      {details["notesContent"]}
      </span>
      {
        (details["attachment"].length != 0) && <>
            <span className="attachmentHeading">
                Attachments
            </span>
            <div className="attachmentHolder">
                <img src={details["attachment"][0]} alt="" />
                <span>{details["attachment"][1]}</span>
            </div>
        </>
      }
      
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
