/**
 * @description Products Model
 * @author 刘永奇
 */

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
  shopId:{
    type:String,
    require:true
  },
  name:String,
  imgUrl:String,
  sales:Number,
  price:Number,
  oldPrice:Number,
  tabs:[String]
},{timestamps:true})

const Products = mongoose.model('products',Schema)

module.exports = Products