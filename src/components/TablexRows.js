import React from 'react'
import PropTypes from 'prop-types'
import { getCellData } from '../utils/getCellData'

export class TablexRows extends React.Component {

  renderRows = () => {
    let sortMethod = null
    let rowData = this.props.rows.slice(0)
    if (this.props.sortBy) {
      sortMethod = this.props.columns.find(cell => cell.name === (this.props.sortBy)).sort
    }
    if (sortMethod) {
      rowData.sort(sortMethod)
      if (this.props.reverseSort) {
        rowData = rowData.reverse()
      }
    }

    return rowData.map((row, index) => {
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
  onCellClick: PropTypes.func.isRequired,
  sortBy: PropTypes.string,
  reverseSort: PropTypes.bool
}