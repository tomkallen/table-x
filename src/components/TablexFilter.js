import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TablexFilter extends Component {

  onFilterChange = (event, cellName) => {
    const value = event.target.value
    this.props.updateFilterValue(cellName, value)
  }

  renderInput = (cell) => {
    if (!cell.filter) return null
    return <input
      className={'tablex-input'}
      onChange={(event) => this.onFilterChange(event, cell.name)}
      type="text"
    />
  }

  renderFilterCells = () => {
    return this.props.columns.map((cell, index) =>
      <div
        key={`filter-${index}`}
        className={'tablex-cell tablex-filter'}
        style={{ width: cell.width + '%' }}
      >
        {this.renderInput(cell)}
      </div>)
  }

  render () {
    return <div className={'tablex-row'}>{this.renderFilterCells()}</div>
  }
}

TablexFilter.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilterValue: PropTypes.func.isRequired
}

