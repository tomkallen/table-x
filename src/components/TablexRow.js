import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TablexRow extends Component {
  state = { expand: false }
  getRowClassNames = () => {
    if (!this.state.expand) return 'tablex-row shrink'
    return 'tablex-row'
  }

  render () {
    return (
      <div
        onClick={() => this.setState((state) => ({ expand: !state.expand }))}
        className={this.getRowClassNames()}
      >
        {this.props.cells}
      </div>
    )
  }
}

TablexRow.propTypes = {
  cells: PropTypes.array.isRequired
}
