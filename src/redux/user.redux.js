import axios from "axios"
import {getRedirectPath} from '../util'
// import { Switch } from "react-router-dom"

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROE_MSG = 'ERROE_MSG'

const initState = {
  redirectTo: '',
  isAuth: false,
  msg: '',
  user: '',
  pwd: '',
  type: ''
}

export function user(state=initState, action){
  switch(action.type){
    case REGISTER_SUCCESS: 
      return {...state, msg: '', isAuth: true, redirectTo: getRedirectPath(action.payload), ...action.payload}
    case ERROE_MSG:
      return {...state, isAuth: false, msg: action.msg}
    default:
      return state
  }
}

export function registerSuccess(data){
  return {type:REGISTER_SUCCESS, payload: data}
}

export function errorMsg(msg){
  return {
    msg,
    type: ERROE_MSG
  }
}

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
        dispatch(registerSuccess({user, pwd, type}))
        localStorage.setItem('userType', type)
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}