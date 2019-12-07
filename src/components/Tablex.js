import React from 'react'
import PropTypes from 'prop-types'
import { TablexRows, TablexHeader } from './index'

export class Tablex extends React.Component {

  createHeader = () =>
    this.props.showHeader
      ? <TablexHeader columns={this.props.columns}/>
      : null

  createRows = () =>
    <TablexRows
      onCellClick={this.props.onCellClick}
      columns={this.props.columns}
      rows={this.props.rows}
    />

  render () {
    return [this.createHeader(), this.createRows()]
  }
}

Tablex.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  showHeader: PropTypes.bool,
  onCellClick: PropTypes.func
}

Tablex.defaultProps = {
  showHeader: true,
  onCellClick: () => {}
}
