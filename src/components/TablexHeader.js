import React from 'react'
import PropTypes from 'prop-types'

export class TablexHeader extends React.Component {

  renderHeaderCells = () => {
    return this.props.columns.map((cell, index) =>
      <div
        onClick={()=>this.props.handleSort(cell)}
        key={`header-${index}`}
        className={'tablex-cell tablex-cell-header'}
        style={{ width: cell.width + '%' }}
      >
        {cell.name}
      </div>)
  }

  render() {
    return <div className={'tablex-row-header'}>{this.renderHeaderCells()}</div>
  }
}

TablexHeader.propTypes = {
  columns: PropTypes.array.isRequired
}
