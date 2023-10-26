/**
 * @description order controller
 * @author 刘永奇
 */

const Order = require('../models/Order')
const Products = require('../models/Products')
const Address = require('../models/Address')
/**
 * 创建订单
 * @param {*} username 用户名
 * @param {*} data 订单信息
 * @returns 
 */
async function createOrder(username,data){
  const {
    addressId,
    shopId,
    shopName,
    isCanceled = false,
    products=[] //默认值[] ===> 打手打手

  } = data
  // console.log(data)
  // 根据addressId获取地址信息
  const address = await Address.findById(addressId)
  // 获取商品列表
  const pIds = products.map(p=>p.id)
  const productList = await Products.find({
    shopId,
    _id:{
      $in:pIds
    }
  })
  console.log(productList);
  const productListWidthSales = productList.map(p=>{
    const id = p._id.toString()

    const filterProducts = products.filter(item => item.id === id)
    if(filterProducts.length === 0){
      throw Error('匹配订单失败')
    }
    return {
      product:p,
      orderSales:filterProducts[0].num
    }
  })
  const order = await Order.create({
    username,
    shopId,
    shopName,
    isCanceled,
    address,
    products:productListWidthSales
  })
  return order
}

async function getOrderList(username){
  const orderList = await Order.find({
    username,
  })
  return orderList
}

module.exports =  { createOrder,getOrderList }


