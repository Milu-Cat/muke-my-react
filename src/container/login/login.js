import React from 'react'
import Logo from './../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {login} from '../../redux/login.redux'
import './login.css'

@connect(
  state=>state.user,
  {login}
)
class Login extends React.Component{
  constructor(props){
    super(props);
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
      user: '',
      pwd: ''
    }
  }
  handleChange(key, val){
    this.setState({
      [key]: val
    })
  }
  handleLogin(){
    this.props.login(this.state)
  }
  register(){
    this.props.history.push('/register')
  }
  render(){
    return (
      <div className="login">
        <Logo></Logo>
        <List className="form-list">
          <InputItem onChange={v=>this.handleChange('user', v)}>用户名</InputItem>
          <WhiteSpace />
          <InputItem onChange={v=>this.handleChange('pwd', v)}>密码</InputItem>
          <WhiteSpace />
        </List>
        <WingBlank>
          <Button type="warning" onClick={this.handleLogin}>登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type="warning">注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login