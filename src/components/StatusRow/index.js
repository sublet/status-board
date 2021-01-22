import React from 'react'

const StatusRow = props => {

  const _getContent = () => {
    if (props.widgets) {
      return props.widgets.map(itm => itm)
    }
    return <p>Your row is empty.</p>
  }

  return (
    <div className="statusBoard__container">
      <div className="statusBoard">
        {_getContent()}
      </div>
    </div>
  ) 
}

export default StatusRow