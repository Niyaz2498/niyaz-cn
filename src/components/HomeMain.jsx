import React from 'react'
import Separator from './Separator'
import NotesItem from './NotesItem'
import PlusBlue from "../assets/PlusBlue.svg"
import notesRt from "../assets/RtArrow.svg"

const HomeMain = () => {
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
            <NotesItem></NotesItem>
            <NotesItem></NotesItem>
            <NotesItem></NotesItem>
          </div>
        </div>

        </div>
        
    </>
  )
}

export default HomeMain
