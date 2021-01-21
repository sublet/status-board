import React from 'react'

const StatusRow = props => {

  const _getContent = () => {
    if (props.widgets) {
      return props.widgets.map(itm => itm)
    }
    return <p>Your row is empty.</p>
  }

  return (
    <div className="statusRow">
      {_getContent()}
    </div>
  ) 
}

export default StatusRow