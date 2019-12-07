import React from 'react'
import PropTypes from 'prop-types'

export class TablexRows extends React.Component {

  renderRows = () => {
    return this.props.rows.map((row, index) => {
      const cell = this.renderCells(row)
      return <div
        key={`row-${index}`}
        className={'tablex-row'}
      >
        {cell}
      </div>
    })
  }

  renderCells = (row) => {
    return this.props.columns.map((cell, index) => {
      const cellData = TablexRows.getCellData(row, cell)
      return <div
        key={`cell-${index}`}
        className={'tablex-cell'}
        style={{ width: cell.width + '%' }}
        onClick={() => this.props.onCellClick(row, cellData)}
      >
        {cellData}
      </div>
    })
  }

  static getCellData (row, cell) {
    if (typeof cell.accessor === 'function') {
      return cell.accessor(row)
    } else if (typeof cell.accessor === 'string') {
      return row[cell.accessor]
    }
    return null
  }

  render () {
    return this.renderRows()
  }
}

TablexRows.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onCellClick: PropTypes.func.isRequired
}