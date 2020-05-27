const express = require('express')
const Router = express.Router()

Router.post('/register', function(req,res){
  // console.log(req.body.data)
  // const {user, pwd, type} = req.body.data
  return res.json({code: 1})
})

Router.post('/login', function(req,res){
  return res.json({code: 1})
})

Router.get('/info', function(req, res){
  return res.json({code:1})
})
module.exports = Router