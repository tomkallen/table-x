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
      updateFilterValue={this.updateFilterValue}
      filters={this.state.filters}
      columns={this.props.columns}
    />
  }

  createRows = () =>
    <TablexRows
      cellClassName={this.props.cellClassName}
      rowClassName={this.props.rowClassName}
      columnClassesFromNames={this.props.columnClassesFromNames}
      onCellClick={this.props.onCellClick}
      columns={this.props.columns}
      rows={this.props.rows}
      filters={this.state.filters}
      sortBy={this.state.sortBy}
      reverseSort={this.state.reverseSort}
    />

  updateFilterValue = (cellName, value) => {
    const filter = { [cellName]: value }
    this.setState({ filters: { ...this.state.filters, ...filter } })
  }

  render () {
    return (
      <div className={'tablex'}>
        {this.createHeader()}
        {this.createFilters()}
        {this.createRows()}
      </div>)
  }
}

Tablex.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  showHeader: PropTypes.bool,
  filterable: PropTypes.bool,
  onCellClick: PropTypes.func,
  columnClassesFromNames: PropTypes.bool,
  cellClassName: PropTypes.string,
  rowClassName: PropTypes.string
}

Tablex.defaultProps = {
  showHeader: true,
  filterable: false,
  columnClassesFromNames: false,
  onCellClick: () => {}
}
