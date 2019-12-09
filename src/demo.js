import React from 'react'
import './css/tablex.css'
import { data, structure } from './data'
import { Tablex } from './components/Tablex'

class App extends React.Component {

  onCellClick = (row, cellData) => {
    console.log(row, cellData)
  }

  render () {
    return <div className={'wrapper'}>
      <Tablex
        columns={structure}
        filterable
        rows={data}
        onCellClick={this.onCellClick}
        columnClassesFromNames
      />
    </div>
  }
}

export default App


