import React from 'react'
import logo from  './logo.png'
import './logo.css'
class Logo extends React.Component{
  render(){
    return (
      <div className="logo-contater">
        <img src={logo} alt="" className="logo"/>
      </div>
    )
  }
}

export default Logo