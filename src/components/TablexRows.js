import React from 'react'
import PropTypes from 'prop-types'
import { getCellData } from '../utils/getCellData'
import { TablexRow } from './index'

export class TablexRows extends React.Component {

  state = { expand: false }

  renderRows = () => {
    let sortMethod = null
    let rowData = this.props.rows.slice(0)
    if (Object.values(this.props.filters).filter(Boolean).length) {
      rowData = rowData.filter((row) => {
        let visible = true
        Object.keys(this.props.filters).forEach((filter) => {
          let cell = this.props.columns.find((cell) => cell.name === filter)
          if (!String(getCellData(row, cell)).includes(String(this.props.filters[cell.name]))) {
            visible = false
          }
        })
        return visible
      })
    }

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
      const cells = this.renderCells(row)
      return <TablexRow cells={cells} key={`row-${index}`}/>
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
  reverseSort: PropTypes.bool,
  filters: PropTypes.object
}