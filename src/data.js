export const data = [
  { id: 1, name: 'Bob', code: 636 },
  { id: 345, name: 'Bob 2', code: 437 },
  { id: 123, name: 'Bob 6', code: 6256 },
  { id: 123, name: 'Bob 8', code: 46 },
]

export const structure = [
  { name: 'id', accessor: d => d.id, width: 33.3, sort: (a, b) => a.id - b.id, filter: true },
  { name: 'Name', accessor: 'name', width: 33.3 },
  { name: 'Code', accessor: d => d.code, width: 33.3, filter: true },
]
