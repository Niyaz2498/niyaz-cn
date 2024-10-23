import React from 'react'

const ProgressContent = ({cname, value}) => {
    var classes = `progress-item ${cname}`
  return (
    <div className={classes} >
      <span>{value[0]}</span>
      <span>{value[1]}</span>
    </div>
  )
}

export default ProgressContent
