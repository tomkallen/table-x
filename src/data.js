export const data = [
  { id: 1, name: 'Bob', code: 636 },
  { id: 345, name: 'Bob 2', code: 437 },
  { id: 123, name: 'Bob 6', code: 6256 },
  { id: 123, name: 'Bob 8', code: 46 },
  { id: 1, name: 'Bob', code: 6364 },
  { id: 345, name: 'Bob 2', code: 3437 },
  { id: 1323, name: 'Bob 6', code: 6634256 },
  { id: 767, name: 'Yuki', code: 436 },
  { id: 61, name: 'Dick', code: 554 },
  { id: 5, name: 'Kami', code: 1437 },
  { id: 3, name: 'Jack' },
  {
    id: 44,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    code: 46
  },
]

export const structure = [
  { name: 'id', accessor: d => d.id, width: 25, sort: (a, b) => a.id - b.id, filter: true },
  { name: 'Basic user name', accessor: 'name', width: 50, filter: true },
  { name: 'Code', accessor: d => d.code, width: 25, filter: true },

]
