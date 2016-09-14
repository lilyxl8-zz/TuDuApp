import React from 'react'
import ListUtil from '../utils/list_util'
import ListActions from '../actions/list_actions'

const ListForm = React.createClass({
  // TODO is state the right place to put listHandler?
  getInitialState () {
    return {
      name: this.props.list.name,
      listHandler: this.props.isDemo ? ListActions : ListUtil
    }
  },

  updateName (e) {
    e.preventDefault()
    this.setState({ name: e.currentTarget.value })
  },

  focus (e) {
    e.preventDefault()
    this.refs.listInput.focus()
  },

  handleSubmit (e) {
    e.preventDefault()
    let newList = this.props.list
    newList.name = this.state.name
    if (this.props.isForm && this.state.name !== '') {
      this.state.listHandler.createList(newList)
      if (!this.props.isDemo) { this.setState({ name: '' }) }
    } else {
      if (this.props.list.name === '') { return }
      this.state.listHandler.updateList(newList)
      this.props.toggleEditing(e)
    }
  },

  render () {
    return (
      <div className='list-name'>
        <form className='name-form' onSubmit={ this.handleSubmit }>
          <input
            value={ this.state.name }
            placeholder='New list...'
            onChange={ this.updateName }
            onBlur={ this.props.toggleEditing }
            ref='listInput'
            autoFocus />
        </form>
      </div>
    )
  }
})

export default ListForm
