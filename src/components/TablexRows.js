import React from 'react'
import PropTypes from 'prop-types'

export function TablexRows ({ rows, columns }) {
  return rows.map((row, index) => {
    const view = columns.map(cell =>
      <div
        style={{ width: cell.width + '%' }}
        key={index} className={'tablex-cell'}>{cell.accessor(row)}</div>)
    return <div className={'tablex-row'}>{view}</div>
  })
}

TablexRows.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
}