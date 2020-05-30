import axios from "axios"
import {getRedirectPath} from '../util'
// import { Switch } from "react-router-dom"

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROE_MSG = 'ERROE_MSG'

const initState = {
  redirectTo: '',
  msg: '',
  user: '',
  pwd: '',
  type: ''
}

//根据type处理state
export function user(state=initState, action){
  switch(action.type){
    case AUTH_SUCCESS: 
      return {...state, msg: '', redirectTo: getRedirectPath(action.payload), ...action.payload}
    case ERROE_MSG:
      return {...state, msg: action.msg}
    default:
      return state
  }
}
//注册/更新信息成功
export function authSuccess(data){
  return {type:AUTH_SUCCESS, payload: data}
}
//注册/更新信息失败
export function errorMsg(msg){
  return {
    msg,
    type: ERROE_MSG
  }
}

//注册
export function register (data){
  const {user, pwd, type, repeatpwd} = data
  // console.log(user, pwd, type, repeatpwd)
  if(!user || !pwd || !type){
    return errorMsg('用户名密码必须输入')
  }
  if(repeatpwd !== pwd){
    return errorMsg('输入的密码不一致')
  }
  return dispatch=>{
    axios.post('/user/register', {user, pwd, type}).then(res=>{
      // console.log(res)
      if(res.status === 200 && res.data.code === 1){
        dispatch(authSuccess({user, pwd, type}))
        localStorage.setItem('userType', type)
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}
// 登陆
export function login(data){
  const {user, pwd} =data
  if(!user || !pwd){
    console.log('请输入用户名或密码')
    return errorMsg('请输入用户名或密码')
  }
  return dispatch=>{
    axios.post('/user/bosslogin', {user, pwd}).then(res=>{
      if(res.status === 200 && res.data.code === 1){
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

//更新信息
export function update(data){
  return dispatch=>{
      axios.post('/user/update', data).then(res=>{
      // console.log(res)
      if(res.status === 200 && res.data.code === 1){
        dispatch(authSuccess(res.data.data))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }

}