import React from 'react'
import PropTypes from 'prop-types'
import { TablexRows, TablexHeader, TablexFilter } from './index'

export class Tablex extends React.Component {

  state = { sortBy: null, reverseSort: true, filters: {} }

  handleSort = (cell) => {
    this.setState((state) => ({ sortBy: cell.name, reverseSort: !state.reverseSort }))
  }

  createHeader = () => this.props.showHeader
    ? <TablexHeader
      columns={this.props.columns}
      handleSort={this.handleSort}
    />
    : null

  createFilters = () => {
    if (!this.props.filterable) return null
    return <TablexFilter
      updateFilterValue={this.updateFilterValue}
      filters={this.state.filters}
      columns={this.props.columns}
    />
  }

  updateFilterValue = (cellName, value) => {
    const filter = { [cellName]: value }
    this.setState({ filters: { ...this.state.filters, ...filter } })
  }

  createRows = () =>
    <TablexRows
      onCellClick={this.props.onCellClick}
      columns={this.props.columns}
      rows={this.props.rows}
      filters={this.state.filters}
      sortBy={this.state.sortBy}
      reverseSort={this.state.reverseSort}
    />

  render () {
    return <div className={'tablex'}>
      {this.createHeader()}
      {this.createFilters()}
      {this.createRows()}
    </div>
  }
}

Tablex.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  showHeader: PropTypes.bool,
  filterable: PropTypes.bool,
  onCellClick: PropTypes.func
}

Tablex.defaultProps = {
  showHeader: true,
  filterable: false,
  onCellClick: () => {}
}
