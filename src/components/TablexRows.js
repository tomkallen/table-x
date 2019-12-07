import React from 'react'
import PropTypes from 'prop-types'
import { getCellData } from '../utils/getCellData'

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
      const cellData = getCellData(row, cell)
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

  render () {
    return this.renderRows()
  }
}

TablexRows.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onCellClick: PropTypes.func.isRequired
}