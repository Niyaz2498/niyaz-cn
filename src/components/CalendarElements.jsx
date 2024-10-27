import React from 'react'

const CalendarElements = ({id, selected, date, day, changeSelected}) => {
    console.log("calElem")
    console.log(id)
    console.log(selected)
  return (
    <div className={id == selected ? "CalendarElementSelected" :'CalendarElement'} onClick={()=> {
        changeSelected(id)
    }}>
      <div className={id == selected ? "internalColorSelected" : "internalColor"}>
        
      </div>
      <div className={id == selected ? "calTextHolderSelected" :"calTextHolder"}>
        <span>{date}</span>
        <span>{day}</span>
      </div>
    </div>
  )
}

export default CalendarElements
