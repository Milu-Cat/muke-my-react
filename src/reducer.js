// 合并所有的reducer 并返回
import {combineReducers} from 'redux'
import {user} from './redux/user.redux'
import {loginAction} from './redux/login.redux'

export default combineReducers({user, loginAction})

