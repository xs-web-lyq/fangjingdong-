/**
 * @description Shop Model
 * @author 刘永奇
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
  name:String,
  imgUrl:String,
  sales:Number,
  expressLimit:{
    type:Number,
    default:0
  },
  expressLimit:Number,
  slogan:String,
},{timestamps:true})

const Shop = mongoose.model('shop',Schema)


module.exports = Shop
