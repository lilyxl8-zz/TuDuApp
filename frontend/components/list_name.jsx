import React from 'react'

const ListName = React.createClass({

  render () {
    return (
      <div className='list-name'>
        <h1 onClick={ this.props.toggleEditing }>
          { this.props.list.name }
        </h1>
        <a onClick={ this.props.deleteList } className='delete-list'></a>
      </div>
    )
  }
})

export default ListName
