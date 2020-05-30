const express = require('express')
const Router = express.Router()

Router.post('/register', function(req,res){
  // console.log(req.body.data)
  // const {user, pwd, type} = req.body.data
  return res.json({code: 1})
})

Router.post('/bosslogin', function(req,res){
  return res.json({code: 1,data:{user:'橘九',type: 'boss'}})
})
Router.post('/update', function(req,res){
  const data = req.body
  return res.json({code: 1,data})
})

Router.get('/info', function(req, res){
  return res.json({code:1})
})
module.exports = Router