import React from 'react'
import PropTypes from 'prop-types'
import { TablexRows, TablexHeader, TablexFilter } from './index'

export class Tablex extends React.Component {

  state = { sortBy: null, reverseSort: true, filters: {} }

  handleSort = (cell) => {
    if (!cell.sort) return
    this.setState((state) => ({ sortBy: cell.name, reverseSort: !state.reverseSort }))
  }

  createHeader = () => {
    if (!this.props.showHeader) return null
    return <TablexHeader
      columns={this.props.columns}
      handleSort={this.handleSort}
    />
  }

  createFilters = () => {
    if (!this.props.filterable) return null
    return <TablexFilter
      columns={this.props.columns}
      filters={this.state.filters}
      updateFilterValue={this.updateFilterValue}
    />
  }

  createRows = () =>
    <TablexRows
      cellClassName={this.props.cellClassName}
      columnClassesFromNames={this.props.columnClassesFromNames}
      columns={this.props.columns}
      filters={this.state.filters}
      onCellClick={this.props.onCellClick}
      reverseSort={this.state.reverseSort}
      rows={this.props.rows}
      rowClassName={this.props.rowClassName}
      sortBy={this.state.sortBy}
    />

  updateFilterValue = (cellName, value) => {
    const filter = { [cellName]: value }
    this.setState({ filters: { ...this.state.filters, ...filter } })
  }

  render () {
    return (
      <div className={this.props.tableClassName || 'tablex'}>
        {this.createHeader()}
        {this.createFilters()}
        {this.createRows()}
      </div>
    )
  }
}

Tablex.propTypes = {
  cellClassName: PropTypes.string,
  columns: PropTypes.array.isRequired,
  columnClassesFromNames: PropTypes.bool,
  filterable: PropTypes.bool,
  onCellClick: PropTypes.func,
  rows: PropTypes.array.isRequired,
  rowClassName: PropTypes.string,
  showHeader: PropTypes.bool,
  tableClassName: PropTypes.string,
}

Tablex.defaultProps = {
  columnClassesFromNames: false,
  filterable: false,
  showHeader: true,
  onCellClick: () => {}
}
