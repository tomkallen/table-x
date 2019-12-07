import React, { Component } from 'react'

export class TablexRow extends Component {
  state = {expand: false}
  getRowClassNames = () => {
    if (!this.state.expand) return 'tablex-row shrink'
    return 'tablex-row'
  }

  render () {
    return (
      <div
        key={`row-${this.props.index}`}
        onClick={() => this.setState((state) => ({ expand: !state.expand }))}
        className={this.getRowClassNames()}
      >
        {this.props.cells}
      </div>
    )
  }
}
