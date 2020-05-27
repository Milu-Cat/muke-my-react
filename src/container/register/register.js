import React from 'react'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import Logo from './../../component/logo/logo'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
import './register.css'
import { Redirect } from 'react-router-dom'
@connect(
  state=>state.user,
  {register}
)
class Register extends React.Component{
  constructor(props){
    super(props)  
    this.handleRegister = this.handleRegister.bind(this)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genuis'
    }
  }
  async handleRegister(){
    await this.props.register(this.state)
    // localStorage.setItem('userType', this.props.)
    // console.log(this.state)
  }
  handleChange(key, val){
    this.setState({
      [key]: val
    })
  }
  render(){
    const RadioItem = Radio.RadioItem
    return (
      <div className="register">
        {this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>: null}
        <Logo></Logo>
        <List className="form-list">
          {this.props.msg?<p className="registerMsg">{this.props.msg}</p>: null}
          <InputItem onChange={v=>this.handleChange('user',v)}>用户名</InputItem>
          <WhiteSpace />
          <InputItem type="password" onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
          <WhiteSpace />
          <InputItem type="password" onChange={v=>this.handleChange('repeatpwd',v)}>确认密码</InputItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type=== 'genuis'} onChange={()=>this.handleChange('type','genuis')}>
            牛人
          </RadioItem>
          <RadioItem checked={this.state.type=== 'boss'} onChange={()=>this.handleChange('type','boss')}>
            Boss
          </RadioItem>
          <WhiteSpace />
          <Button type="warning" onClick={this.handleRegister}>注册</Button>
        </List>
      </div>
    )
  }
}

export default Register