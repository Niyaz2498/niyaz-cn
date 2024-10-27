import React from 'react'
import barChart from '../assets/bar_chart.svg'
import upGreen from "../assets/arrow_drop_up.svg"
import CircleTick from "../assets/circle-tick.svg"
import OpenBook from "../assets/Book.svg"
import LineChart from './LineChart'

const ChartDetailHolder = () => {
  return (
    <>
      <div className="chartHeaderSection">
        <span className="ChartTitle">Weekly Overview</span>
        <div className="barchartHolder">
            <img src={barChart} alt="Bar Chart Icon"/>
        </div>
      </div>
      <div className="chartDetailSection">
        <div className="detailDiv">
            <div className="detail-total-completed">
                <span>20</span>
                <img src={upGreen} alt="Green Arrow" />
                <span>+2.45%</span>
            </div>
            <span className="taskCompletedText">Tasks Completed</span>
            <div className="progressStatus">
                <img src={CircleTick} alt="Tick" />
                <span>On track</span>
            </div>
            <div className="openTasksBtn">
                <img src={OpenBook} alt="Open Book" />
                <span>OPEN TASKS</span>
            </div>
        </div>
        <div className="chartElementHolder">
            <LineChart>
                
            </LineChart>
        </div>
      </div>
    </>
  )
}

export default ChartDetailHolder
