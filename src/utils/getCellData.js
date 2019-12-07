export function getCellData (row, cell) {
  if (typeof cell.accessor === 'function') {
    return cell.accessor(row)
  } else if (typeof cell.accessor === 'string') {
    return row[cell.accessor]
  }
  return null
}