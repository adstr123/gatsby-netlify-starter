import React from 'react'

class Col extends React.Component {
  render() {
    return (
      <div style={{width: 100 / this.props.division + "%"}}></div>
    )
  }
}

export default Col
