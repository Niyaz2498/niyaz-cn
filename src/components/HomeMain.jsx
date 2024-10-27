import React from 'react'
import Separator from './Separator'
import NotesItem from './NotesItem'
import PlusBlue from "../assets/PlusBlue.svg"
import notesRt from "../assets/RtArrow.svg"
import ChartDetailHolder from './ChartDetailHolder'
import screenshotInfo from "../assets/ScreenshotInfo.svg"

const HomeMain = () => {
  var notesDetail = [
    {
      "title": "Follow Up with Mr. Ashton",
      "notesContent": "Following up on our meeting with Mr. Ashton, I wanted to recap the key points discussed and outline the action items moving forward. During the meeting, we touched upon the project timeline, budget considerations, and specific deliverables. Mr. Ashton expressed ...",
      "attachment": [screenshotInfo, "Screenshot Information.png"]
    },
    {
      "title": "Setlist for hackathon",
      "notesContent": "- Project Timeline\n- Specific Deliverables\n- Additional Features for Software Solution\n- Design Phase\n- Implementation\n- Enhancements\n- Submission",
      "attachment": []
    },
    {
      "title": "Auroras and Sad Prose",
      "notesContent": "Tears fall like rain on a lonely street \n Heart heavy with sorrow, no solace to meet\nMemories of joy now turned to dust\nIn the shadows of sadness, I place my trust\n",
      "attachment": []
    },
  ]
  return (
    <>
        <div className="column2">
            <span className='welcome-text'>
                Welcome Back!
            </span>
            <br></br>
            <span className='user-title-text'>
                Dalton's Home
            </span>
        <div className='chartSection'>
          <ChartDetailHolder>

          </ChartDetailHolder>
        </div>
        <Separator></Separator>
        <div className='NotesSection'>
          <div className="notes-section-header">
            <span className='user-title-text-secondary'>Notes</span>
            <div className="notesHeaderBtnGrp">
              <div className='NotesAdd'>
                <img src={PlusBlue} alt="Add" />
              </div>
              <div className='NextBig'>
                <img src={notesRt} alt="Add" />
              </div>
            </div>
          </div>
          <div className="notes-list">
            {
              notesDetail.map((elem)=> {
                return <NotesItem details={elem}></NotesItem>
              })
            }
          </div>
        </div>

        </div>
        
    </>
  )
}

export default HomeMain
