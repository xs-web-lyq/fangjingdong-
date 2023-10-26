/**
 * @description address controller
 * @author 刘永奇
 */

const Address = require('../models/Address')

/**
 * 创建地址
 * @param {String} username  用户名
 * @param {Object} data 地址详细信息
 * @returns 
 */
async function createAddress(username,data){
  const address = await Address.create({
    username,
    ...data
  })
  return address
}
/**
 * 获取收货地址
 * @param {*} username 用户名
 * @returns 
 */
async function getAllAddress(username){
  const addressList = await Address.find({
    username
  })
  return addressList
}
/**
 * 获取单个收货地址
 * @param {*} username 用户名
 * @param {*} id 地址id
 * @returns 
 */
async function getOneAddress(username,id){
  const address = await Address.findById({
    _id:id,
    username
  })
  return address
}
/**
 * 更新地址
 * @param {String} username 用户名
 * @param {String} id 地址id
 * @param {Object} data 新地址信息
 * @returns 
 */
async function updateAddress(username,id,data){
  const newAddress = await Address.findByIdAndUpdate(
    {_id:id,username}, //查找条件
    {username,...data},  //更新值
    {
      new:true //返回更新值
    }
  )
  return newAddress
}

module.exports = {createAddress,getAllAddress,getOneAddress,updateAddress}