import axios from 'axios'

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
  redirectTo: '',
  isLogin: false,
  msg: '',
  user: '',
  pwd: ''
}

export function loginAction(state = initState, action){
  switch(action.type){
    case LOGIN_SUCCESS:
      return {...state, msg: '', isLogin: true, redirectTo: '', ...action.paylad}
    case ERROR_MSG:
      return {...state, msg: action.msg, isLogin: false}
    default: 
      return state
  }
}

export function loginSuccess(data){
  return {type: LOGIN_SUCCESS, paylad: data}
}

export function errorMsg(msg){
  return {
    msg,
    type: ERROR_MSG
  }
}

export function login(data){
  const {user, pwd} =data
  if(!user || !pwd){
    return errorMsg('请输入用户名或密码')
  }
  return dispatch=>{
    axios.post('/user/login', {user, pwd}).then(res=>{
      if(res.status === 200 && res.data.code === 1){
        dispatch(loginSuccess({user, pwd}))
      } else {
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}
