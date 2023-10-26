/**
 * @description address Model
 * @author 刘永奇
 */

const mongoose = require('../db/db')

// 设置模型匹配要求
const Schema = mongoose.Schema({
  username:{
    type:String,
    require:true, // 必需
  },
  city:String,
  department:String,
  houseNumber:String,
  name:String,
  phone:String,
},{timestamps:true})

const Address = mongoose.model('address',Schema)

module.exports = Address