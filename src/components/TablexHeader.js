import React from 'react'
import PropTypes from 'prop-types'

export function TablexHeader ({ columns }) {
  return <div className={'tablex-row'}>
    {columns.map(cell =>
      <div
        style={{ width: cell.width + '%' }}
        className={'tablex-cell tablex-header'}>{cell.name}</div>)}
  </div>
}

TablexHeader.propTypes = {
  columns: PropTypes.array.isRequired
}
