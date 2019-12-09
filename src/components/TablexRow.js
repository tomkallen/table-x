import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { createClassNames } from '../utils/helpers'

export class TablexRow extends Component {
  state = { expand: false }
  getRowClassNames = () => {
    const className = this.props.rowClassName || 'tablex-row'
    if (!this.state.expand) return createClassNames(className, 'shrink')
    return className
  }

  render () {
    return (
      <div
        className={this.getRowClassNames()}
        onClick={() => this.setState((state) => ({ expand: !state.expand }))}
      >
        {this.props.cells}
      </div>
    )
  }
}

TablexRow.propTypes = {
  cells: PropTypes.array.isRequired
}
