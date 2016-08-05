import React from 'react'
import ReactDOM from 'react-dom'

const TuDuApp = React.createClass({
  render () {
    return (
      <div>Hallo</div>
    )
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<TuDuApp />, document.getElementById('main'));
});
