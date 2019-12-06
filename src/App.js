import React from 'react'
import './App.css'
import { data, structure } from './data'
import { Tablex } from './components/Tablex'

class App extends React.Component {
  render () {
    return <div className={'wrapper'}>
      <Tablex
        columns={structure}
        rows={data}
      />
    </div>
  }
}

export default App


