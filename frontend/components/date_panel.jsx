import React from 'react'

const DatePanel = React.createClass({

  render () {
    let date = new Date(this.props.date)
    return (
      <div className='calendarDay'>
        {date}
        <div className='dayContents'>
          {this.props.todos}
        </div>
      </div>
    );
  }
})

export default DatePanel;
