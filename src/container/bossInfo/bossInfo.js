import React from 'react'
import { NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatarSelector/avatarSelector'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {update} from '../../redux/user.redux'
@connect(
  state=>state.user,
  {update}
)
class BossInfo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // avater: ''
      // title: '',
      // company: '',
      // money: ''
    }
  }
  handleChange(key, val){
    this.setState({
      [key]: val
    })
  }
  render(){
    return (
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>: null}
        <NavBar mode="dark">Boss信息完善页</NavBar>
        <AvatarSelector selectAvatar={async (imageName)=>{
          await this.setState({
            avater: imageName
          })
          // console.log(this.state)
        }}></AvatarSelector>
        <InputItem onChange={(v)=>this.handleChange('title', v)}>
          招聘职位
        </InputItem>
        <InputItem onChange={(v)=>this.handleChange('company', v)}>
          公司名称
        </InputItem>
        <TextareaItem 
        onChange={(v)=>this.handleChange('money', v)}
        row={3}
        autoHeight
        title='职位要求'
        >
        </TextareaItem>
        <Button onClick={()=>{this.props.update(this.state)}} type="primary">保存</Button>
      </div>
    )
  }
}
export default BossInfo