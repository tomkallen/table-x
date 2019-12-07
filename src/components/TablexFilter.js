import React, { Component } from 'react'

export class TablexFilter extends Component {

  renderInput = (cell) => {
    if (!cell.filter) return null
    return <input
      className={'tablex-input'}
      onChange={() => {}}
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
