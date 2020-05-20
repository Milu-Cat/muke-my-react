import React from 'react';
// import {connect} from 'react-redux'
// import {addGun, removeGun, addGunAsync} from './index.redux'

class App extends React.Component{
  render(){
    return (
      <div>
        <h1>现有机关枪{this.props.num}</h1>
      </div>
    )
  }
}

export default App
