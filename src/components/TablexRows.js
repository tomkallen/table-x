import React from 'react'
import PropTypes from 'prop-types'
import { getClassFromName, createClassNames, getCellData } from '../utils/helpers'
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
      return <TablexRow
        cells={cells}
        key={`row-${index}`}
        rowClassName={this.props.rowClassName}
      />
    })
  }

  renderCells = (row) => {
    return this.props.columns.map((cell, index) => {
      const cellData = getCellData(row, cell)
      const columnClassName = this.props.columnClassesFromNames ? getClassFromName(cell.name) : ''
      const cellClassName = this.props.cellClassName || 'tablex-cell'
      const className = createClassNames(columnClassName, cellClassName)
      return <div
        className={className}
        key={`cell-${index}`}
        onClick={() => this.props.onCellClick(row, cellData)}
        style={{ width: cell.width + '%' }}
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
  cellClassName: PropTypes.string,
  columns: PropTypes.array.isRequired,
  columnClassesFromNames: PropTypes.bool,
  filters: PropTypes.object,
  onCellClick: PropTypes.func.isRequired,
  reverseSort: PropTypes.bool,
  rows: PropTypes.array.isRequired,
  rowClassName: PropTypes.string,
  sortBy: PropTypes.string,
}