import React from 'react'

const DateName = React.createClass({

  render () {
    return (
      <div className='list-name'>
        <h1>{ this.props.date.full_date }</h1>
      </div>
    )
  }
})

export default DateName
