import React from 'react'
import PropTypes from 'prop-types'

export class TablexHeader extends React.Component {

  renderHeaderCells = () => {
    return this.props.columns.map((cell, index) =>
      <div
        key={`header-${index}`}
        className={'tablex-cell tablex-header'}
        style={{ width: cell.width + '%' }}
      >
        {cell.name}
      </div>)
  }

  render() {
    return <div className={'tablex-row'}>{this.renderHeaderCells()}</div>
  }
}

TablexHeader.propTypes = {
  columns: PropTypes.array.isRequired
}
